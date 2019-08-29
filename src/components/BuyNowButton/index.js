import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from '../Button';
import I18n from '../../i18n';
import { COLORS } from '../../common';
import { add_to_cart, buy_now, handle_local_cart } from '../../redux/actions';
import { checkProduct } from '../../utils/checkProduct';



class BuyNowButton extends Component {
    addToCart = ({ type }) => {
        const { user, product, cart_items, add_to_cart, buy_now, navigation, cart_ids, handle_local_cart } = this.props;
        const { inCart } = checkProduct({ product_id: product.id, cart_ids });

        if (user) {

            const data = { customer_id: user.id, product_id: product.id };
            if (type === 'add') {
                add_to_cart(data);
            } else if (type === 'buy') {
                buy_now(data, navigation);
            }
        } else {
            if (type === 'add') {
                handle_local_cart({ product, cart_items, action: inCart ? 'increase' : 'add' });
            } else if (type === 'buy') {
                handle_local_cart({ product, cart_items, action: 'buyNow', navigation });
            }
        }
    }

    render() {
        const { product } = this.props;
        const { inStock } = checkProduct({ in_stock: product.in_stock });

        if (inStock) {
            return (
                <View style={styles.container} >
                    {/* <Button
                        title={I18n.t('addToCart') }
                        style={[styles.buttonStyle, styles.addToCart]}
                        titleStyle={styles.buttonText}
                        activeOpacity={0.8}
                        onPress={() => this.addToCart({ type: 'add' })}
                    /> */}
                    <Button
                        title={ I18n.t('addToCart')}
                        style={[styles.buttonStyle, styles.buyNow]}
                        titleStyle={styles.buttonText}
                        activeOpacity={0.8}
                        onPress={() => this.addToCart({ type: 'buy' })}

                    />
                </View>
            );
        }else{
            return(
                <View style={styles.container} >
                    <Button
                        disabled={true}
                        title= {I18n.t('outOfStock')}
                        style={[styles.buttonStyle, styles.outOfStock]}
                        titleStyle={styles.buttonText}
                    />
                </View>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        cart_items: state.cart.cart_items,
        cart_ids: state.cart.cart_ids
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        add_to_cart,
        handle_local_cart,
        buy_now
    }, dispatch);
}

const BuyNowButtonContainer = connect(mapStateToProps, mapDispatchToProps)(BuyNowButton);

export { BuyNowButtonContainer as BuyNowButton };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        flex: 1,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    addToCart: {
        backgroundColor: COLORS.secondary
    },
    buyNow: {
        backgroundColor: COLORS.main_button
    },

    outOfStock :{
        flex:1,
        backgroundColor:"tomato"
    }
});