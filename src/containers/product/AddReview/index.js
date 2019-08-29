import React, { Component } from 'react';
import { View,  Keyboard, Image } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from '../../../i18n';
import {
  TextInput,
  Button,
  ProductName,
  LoadingModal,
} from '../../../components';
import styles from "./styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {  addReviewValidation } from '../../../utils/validation';
import { fetchReviewOptions, addNewReview } from '../../../redux/actions';
import { RateSection } from './RateSection';

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: [],
      name: '',
      title: '',
      review: '',
      submitted: false
    }
    this.confirmReview = this.confirmReview.bind(this)
    this.onPressStar = this.onPressStar.bind(this)
  }


  static navigationOptions = () => {
    return {
      title: "Add Review"
    }
  }

  componentDidMount() {
    this.props.fetchReviewOptions();
  }

  confirmReview() {

    Keyboard.dismiss();
    this.setState({ submitted: true });
    const { reviewOptions, navigation, user } = this.props;
    const { rates, name, review, title, image } = this.state;
    let product_id = navigation.getParam('id', '');
    let valid = addReviewValidation({ name, review, rates, title, reviewOptions })
    if (valid.status == 'valid') {
      const reviewData = { name, title, image, review, rates, customer_id: user.id, product_id }
      this.props.addNewReview(navigation, reviewData);
    } else {
      alert(valid.msg)
    }
  }
  onPressStar = (id, rate) => {
    const { rates } = this.state;
    const index = rates.findIndex(i => i.id == id);
    if (index == -1) {
      this.setState({ rates: [...rates, { id, rate }] })
    } else {
      rates[index].rate = rate;
      this.setState({ rates })
    }

  }



  renderRateItem = (item) => {
    return <RateSection
      key={`${item.id}`}
      option={item}
      submitted={this.state.submitted}
      onRate={(rate) => this.onPressStar(item.id, rate)} />
  }


  render() {
    const { name, review, title, submitted } = this.state;
    const { navigation, reviewOptions } = this.props;
    let productName = navigation.getParam('name', '');
    let productImage = navigation.getParam('image', '');
    if (reviewOptions.length == 0) {
      return <LoadingModal visible={true} />
    } else {
      return (
        <View style={styles.container} >
          <KeyboardAwareScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
            <Image source={{ uri: productImage }} style={styles.productImage} resizeMode={"contain"} />
            <View style={styles.productDetails} >
              <ProductName name={productName} textStyle={styles.productNameText} />
            </View>
            {reviewOptions.map(item => this.renderRateItem(item))}
            <View style={styles.inputContainer} >

              <TextInput
                ref={"name"}
                value={name}
                inputContainer={styles.inputStyle}
                onChangeText={name => this.setState({ name })}
                placeholder={I18n.t('yourName')}
                maxLength={20}
                onSubmitEditing={() => { this.refs.title.focus(); }}
                returnKeyType={'next'}
                required={submitted && name.length == 0}

              />
              <TextInput
                ref={"title"}
                value={title}
                inputContainer={styles.inputStyle}
                onChangeText={title => this.setState({ title })}
                placeholder={I18n.t('title')}
                maxLength={20}
                onSubmitEditing={() => { this.refs.review.focus(); }}
                returnKeyType={'next'}
                required={submitted && review.length == 0}
              />

              <TextInput
                ref={"review"}
                value={review}
                inputContainer={styles.inputStyle}
                onChangeText={review => this.setState({ review })}
                placeholder={I18n.t('writeComment')}
                maxLength={150}
                multiline
                onSubmitEditing={() => this.confirmReview()}
                returnKeyType={'done'}
                required={submitted && review.length == 0}
              />

            </View>


          </KeyboardAwareScrollView>
          <Button
            onPress={() => this.confirmReview()}
            title={I18n.t('confirmReview')}
            titleStyle={styles.buttonText}
            style={styles.buttonStyle}
          />

          {/* <LoadingModal visible={this.props.loading} /> */}
        </View>

      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    loading: state.reviews.isFetching,
    reviewOptions: state.reviews.reviewOptions
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchReviewOptions,
    addNewReview
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);