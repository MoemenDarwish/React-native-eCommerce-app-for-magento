import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {add_to_wishlist, remove_from_wishlist, handle_local_wishlist} from '../../../redux/actions';
import { PressedIcon } from '../PressedIcon';
import { COLORS, ICONS } from '../../../common';
import PropTypes from 'prop-types';
import { checkProduct } from '../../../utils/checkProduct';


class  WishListIcon extends Component{



    onPressWishlistIcon = (inWishlist)=>{
        const {user,remove_from_wishlist,product ,add_to_wishlist,handle_local_wishlist} = this.props;
            if(user){
                let data = { customer_id : user.id, product_id : product.id }
                inWishlist ? remove_from_wishlist(data) : add_to_wishlist(data)
            }else{
                handle_local_wishlist({product, action : inWishlist ? 'remove':'add'})
            }  
        
    }

    render(){
        const {product,wishlist_ids ,style} = this.props;
        const {inWishlist} = checkProduct({product_id : product.id , wishlist_ids });

        return(
            <PressedIcon
                 name={ ICONS.heart_filled }
                 color={ inWishlist ? COLORS.favorite : null }
                 onPress={()=> this.onPressWishlistIcon(inWishlist) }
                 style={ style }
                 />
        );
    }
}


WishListIcon.propTypes = {
    product : PropTypes.object.isRequired,
    style : PropTypes.any
}

const mapStateToProps = state=>{
    return{
        wishlist : state.wishlist.wishlist,
        wishlist_ids : state.wishlist.wishlist_ids,
        user : state.auth.user
    }
}

const mapDispatchToProps= dispatch =>{
    return bindActionCreators({
        add_to_wishlist,
        handle_local_wishlist,
        remove_from_wishlist
    }, dispatch)
}

const WishlistIconContainer = connect(mapStateToProps, mapDispatchToProps)(WishListIcon);


export { WishlistIconContainer as WishListIcon};