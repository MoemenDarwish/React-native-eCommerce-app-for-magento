import React, { Component } from 'react';
import { View } from 'react-native';
import { ReviewList, PressedIcon , AppText} from '../../../components';
import styles from './styles';
import I18n from '../../../i18n';
import { ICONS, COLORS } from '../../../common';
import { navigateToAddReview } from '../../../navigation/Navigator';
import { connect } from 'react-redux';
class Reviews extends Component {
    static navigationOptions = ({navigation}) => {
        let product = navigation.getParam('product', []);
        return {
            title: product.name
        }
    }
    render() {
        const { navigation, user } = this.props;
        const product = navigation.getParam('product', []);
        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <AppText style={styles.headerText} >{I18n.t('reviews')}</AppText>
                </View>
                <ReviewList
                    reviews={product.reviews}
                    horizontal={false}
                    listStyle={styles.listStyle}
                    itemStyle={styles.itemStyle}
                />
                {user &&
                    <PressedIcon
                        iconStyle={{marginTop:6}}
                        style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)', bottom: 20, right: 20, width: 70, height: 70, borderRadius: 35, margin:0 }}
                        name={ICONS.addNewReview}
                        size={36}
                        color={COLORS.text_light}
                        onPress={() => navigateToAddReview(navigation, { name: product.name,image:product.image })}
                    />}
            </View>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(Reviews);
