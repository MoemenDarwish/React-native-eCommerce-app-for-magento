import React from "react";
import {
    createStackNavigator
} from "react-navigation";

import DrawerNavigator from "./DrawerNavigation";



import styles from "./styles";
import { COLORS } from "../common";
import { CategoryStack, ProductStack } from "./StacksNavigation";
import Wishlist from "../containers/Wishlist"
import Orders from "../containers/Orders"
import OrderDetail from "../containers/Orders/OrderDetails"
import Profile from "../containers/Profile"
import Address from "../containers/Address"
import NewAddress from "../containers/NewAddress"
import CheckoutWeb from "../containers/Checkout/CheckoutWeb"
import ResetPassword from "../containers/Auth/ResetPassword";

const MainStack = createStackNavigator({
    DrawerNav: DrawerNavigator,
    ProductScreen: ProductStack,
    CategoryScreen: CategoryStack,
    ProfileScreen : Profile,
    ResetScreen : ResetPassword,
    WishlistScreen: Wishlist,
    OrdersScreen : Orders,
    OrderDetailsScreen : OrderDetail,
    AddressScreen : Address,
    NewAddressScreen : NewAddress ,
    CheckoutScreen: { screen: CheckoutWeb },

    
}, {
        mode: "card",
        headerLayoutPreset: "left",
        headerBackTitleVisible: false,

        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: styles.headerStyle,
                headerTintColor: COLORS.header_titles_icons,
                headerBackTitle: null,
                headerTitleContainerStyle: { paddingHorizontal: 20 },
            }
        },
    });


export default MainStack;