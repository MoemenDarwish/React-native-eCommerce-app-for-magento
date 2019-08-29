import React, { Component } from 'react';
import { ScrollView, View, Button as TButton, TouchableOpacity, I18nManager } from 'react-native';
import { AppText, HeaderIcon, ProductImageSlider, ProductName, ProductPrice, RateViewer, BuyNowButton, SubDescription, HomeLayout, ProductDetailSection, AppIcon, ReviewList, HeaderTitle, LoadingModal, LoadingAnimation, Button } from '../../../components';
import I18n from '../../../i18n';
import styles from "./styles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProductDetails } from '../../../redux/actions';
import { listLayouts } from '../../../config/layout';
import { ICONS, COLORS } from '../../../common';
import _ from 'lodash';
import { 
    navigateToGallery,
    navigateToProductDescription, 
    navigateToAddReview, 
    navigateToLogin } from '../../../navigation/Navigator';
import { SubSpecification } from '../../../components/SubSpecification';
import { HeaderBackButton } from "react-navigation";
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.getProductDetails = this.getProductDetails;
  }

  static navigationOptions = ({ navigation }) => {
    const productData = navigation.getParam('data', {});
    const linkingName = navigation.getParam('name', null);

    return {
      headerRight: <HeaderIcon name={"product-right"} navigation={navigation} />,
      headerTitle: <HeaderTitle title={linkingName ? linkingName : productData.name ? productData.name : ''} />,
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} tintColor={COLORS.header_titles_icons} />,

    }
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = () => {
    const productData = this.props.navigation.getParam('data', {});
    const linkingId = this.props.navigation.getParam('id', null);
    const { id } = productData;
    if (linkingId) {
      this.props.fetchProductDetails({ id: linkingId })

    } else {
      this.props.fetchProductDetails({ id })
    }

  }



  onPressAddReview = () => {
    const { navigation, product, user } = this.props;
    const productData = navigation.getParam('data', {});
    if (user) {
      navigateToAddReview(navigation, { name: product.name, id: product.id, image: product.image })
    } else {
      let nextScreen = { screen: 'ProductScreen', data: { productData } }
      navigateToLogin(navigation, nextScreen)
    }
  }


  render() {
    const { product, navigation, user } = this.props;
    const { sale, name, attributes, description, images, reviews, related_products, id } = product;
    const productData = navigation.getParam('data', {});

    subSpecification = product && product.attributes ? product.attributes.slice(0, 3) : [];
    let nextScreen = { screen: 'ProductScreen', data: { productData } };

    if (_.isEmpty(product)) {
      return <View />
    } else {
      return (
        <View style={styles.fullView} >
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* image slider and wishlist and cart */}
            <ProductImageSlider
              data={images}
              product={product}
              sale={product.sale}
              nextScreen={nextScreen}
              navigation={navigation}
              onPressItem={(pressedIndex) => navigateToGallery(navigation, { images: product.images, pressedIndex })} />
            {/* Name , price and rate stars */}
            <View style={styles.mainDetials}>
              <ProductName
                name={product.name}
                numberOfLines={0}
                style={styles.productName}
                textStyle={styles.nameText}
              />
              <View style={styles.priceAndRate}>
                <RateViewer
                  style={styles.rateViewer}
                  rate={product.rating} />
                <ProductPrice
                  style={styles.productPrice}
                  totalPrice={product.price}
                  textStyle={[{ fontSize: 19, marginRight: 10 }, { fontSize: 15, marginRight: 10 }]}
                  sale={sale}
                />
              </View>
            </View>

            {/* <ProductOptions options={product.options} /> */}

            {
              description.length > 0 &&
              <SubDescription
                description={description} style={styles.description}
                onPress={() => navigateToProductDescription(navigation, { description, attributes })}
              >
                <AppText style={styles.subDescriptionText} numberOfLines={4} >{product.description}</AppText>
              </SubDescription>
            }

            {
              subSpecification.length > 0 &&
              <SubSpecification
                data={subSpecification}
                onPress={() => navigateToProductDescription(navigation, { description, attributes })}
              />
            }

            {/* reviwes horizontal list */}
            {product && reviews && reviews.length > 0 &&
              <ProductDetailSection style={styles.reviewsContainer}>
                <View style={styles.showAllContainer} >
                  <AppText style={styles.reviewText}>{I18n.t("reviews")}</AppText>
                  <TouchableOpacity onPress={() => navigation.navigate('ReviewsScreen', { product })} style={styles.seeAllView} >
                    <AppText style={styles.showAllText} numberOfLines={1} >{I18n.t("showAllReviews")}</AppText>
                    <AppIcon name={I18nManager.isRTL ? ICONS.LeftArrow : ICONS.RightArrow} size={18} color={COLORS.main} style={{ margin: 0 }} />
                  </TouchableOpacity>
                </View>
                <ReviewList
                  reviews={product.reviews}
                  navigation={navigation}
                  horizontal={true}
                  itemStyle={styles.reviewItem}
                />
              </ProductDetailSection>
            }

            {/* Add New Review */}

            {

              <ProductDetailSection style={styles.addReviewContainer} >
                {user && <TouchableOpacity
                  onPress={() => this.onPressAddReview()}
                  style={styles.addReviewButton}
                  activeOpacity={0.8} >
                  <AppIcon name={ICONS.addReview} color={COLORS.iconActive} size={22} />
                  <AppText style={styles.addReviewText} >{I18n.t('addReview')}</AppText>
                </TouchableOpacity>
                }


              </ProductDetailSection>
            }
            {/* section for Related Products */}
            {product && related_products && related_products.length > 0 && <HomeLayout rowType={listLayouts.slider} data={related_products} />}

          </ScrollView>
          <BuyNowButton
            navigation={navigation}
            product={product}
            nextScreen={nextScreen}
          />
        </View>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    product: state.product.product,
    user: state.auth.user
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchProductDetails
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);