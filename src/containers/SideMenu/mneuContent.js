
import I18n from '../../i18n';
import { ICONS } from '../../common';
import {
    navigateToWishlist, navigateToOrders, navigateToCart, navigateToMore } from '../../navigation/Navigator';



export const menu_content = ({categories,navigation ,wishlist_count,cart_count ,user,onPressLogout})=>{
    if(user){
        return [
            {
                id : 0,
                name : I18n.t('categories'),
                data : categories,
                icon : ICONS.gridMode,
            },
            {
                id : 1,
                name : I18n.t('myAccount'),
                isHeader : true
            },
            {
                id : 2,
                name : I18n.t('myCart'),
                icon : ICONS.myOrders,
                count : cart_count,
                onPress :()=> navigateToCart(navigation)
            },
            {
                id : 3,
                name : I18n.t('myWishlist'),
                icon : ICONS.heart_filled,
                count : wishlist_count,
                onPress : ()=> navigateToWishlist(navigation)
            },
            {
                id : 4,
                name : I18n.t('myOrders'),
                icon : "clipboard-check",
                onPress :()=> navigateToOrders(navigation)
            },
            {
                id : 5,
                name : I18n.t('settings'),
                icon : ICONS.settings,
                onPress : () => navigateToMore(navigation)
            },
            {
                id : 6,
                name : I18n.t('logout'),
                icon : ICONS.logout,
                onPress : ()=>onPressLogout()
            }
        ]
    }else{
        return [{
            id : 0,
            name : I18n.t('categories'),
            data : categories,
            icon : ICONS.gridMode
        },
        {
            id : 1,
            name : I18n.t('myAccount'),
            isHeader : true

        },
        {
            id : 2,
            name : I18n.t('myCart'),
            icon : ICONS.myOrders,
            count : cart_count,
            onPress :()=> navigateToCart(navigation)
        },
        {
            id : 3,
            name : I18n.t('myWishlist'),
            icon : ICONS.heart_filled,
            count : wishlist_count,
            onPress : ()=> navigateToWishlist(navigation)
        },
        {
            id : 4,
            name : I18n.t('settings'),
            icon : ICONS.settings,
            onPress : () => navigateToMore(navigation)

        }
    ]
    }
   
}

