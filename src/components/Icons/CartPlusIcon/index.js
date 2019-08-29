import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {add_to_cart,delete_from_cart ,updateCartItem, showToast, handle_local_cart} from '../../../redux/actions';
import { PressedIcon } from '../PressedIcon';
import { ICONS, COLORS } from '../../../common';
import I18n from '../../../i18n';

import PropTypes from 'prop-types';
import { checkProduct } from '../../../utils/checkProduct';
import { toast } from '../../../utils/Toast';

class CartPlusIcon extends Component{
    addToCart = (inCart)=>{
        const {product,user,delete_from_cart ,add_to_cart, cart_items,handle_local_cart} = this.props;
        if(user){
            const data = {customer_id :user.id , product_id: product.id};
            inCart ? delete_from_cart(data):  add_to_cart(data) ;
        }else{
            handle_local_cart({product, cart_items, action : inCart ? 'delete' : 'add' })
        }  
    }
    render(){
        const {product,cart_ids } = this.props;
        const {inCart, inStock} = checkProduct({product_id : product.id ,cart_ids, in_stock:product.in_stock });
        return(
            <PressedIcon
                 name={ ICONS.cartPlus }
                 onPress = { inStock ? ()=> this.addToCart(inCart,inStock) : ()=> toast(I18n.t('outOfStock')) }
                 style={this.props.style}
                 color = { inCart ? COLORS.facebook : null }
                 />
        ); 
    }

}

CartPlusIcon.proptypes = {
    product : PropTypes.object.isRequired,
    nextScreen: PropTypes.object.isRequired,
    style : PropTypes.any
}


const mapStateToProps = state =>{
    return{
        cart_items : state.cart.cart_items,
        cart_ids : state.cart.cart_ids,
        user : state.auth.user
    }
}

const mapDispatchToProps = dispatch=>{
    return bindActionCreators({
        add_to_cart,
        handle_local_cart,
        delete_from_cart,
        updateCartItem,
        showToast

    }, dispatch)
}

const CartPlusContainer = connect(mapStateToProps,mapDispatchToProps)(CartPlusIcon);

export {CartPlusContainer as CartPlusIcon};