import React from 'react';
import {
    createStackNavigator,
    createSwitchNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import { Platform, I18nManager } from 'react-native';
import I18n from '../i18n';

/* IMPORT APP SCREENS */
import Splash from '../containers/Splash';
import Configuration from '../containers/Configuration';
import SideMenu from '../containers/SideMenu';
import Home from '../containers/Home';
import Category from '../containers/Category';
import ProductDetails from '../containers/product/ProductDetails';
import ImageGallery from '../containers/product/ImageGallery';
import ProductDescription from '../containers/product/ProductDescription';
import Reviews from '../containers/product/Reviews';
import AddReview from '../containers/product/AddReview';
import MyCart from '../containers/checkout/MyCart';
import Login from '../containers/Auth/Login';
import ForgetPassword from '../containers/Auth/ForgetPassword';
import ResetPassword from '../containers/Auth/ResetPassword';
import Search from '../containers/Search';
import Wishlist from '../containers/MyWishlist';
import MyAccount from '../containers/MyAccount';
import MyOrders from '../containers/Orders';
import OrderDetails from '../containers/Orders/OrderDetails';
import MyProfile from '../containers/Profile';
import MyAddress from '../containers/Address';
import SignUp from '../containers/Auth/SignUp';
import Filtering from '../containers/Category/Filtering';
import NewAddress from '../containers/NewAddress';
import CheckoutWeb from '../containers/checkout/CheckoutWeb';
import { COLORS, SCREEN } from '../common';
import styles from './styles';
import { prefix_url } from '../Configuration';



const CategoryStack = createStackNavigator({
    CategoryScreen: { screen: Category },
    FilterScreen: { screen: Filtering },
}, {
        mode: "modal",
        initialRouteName: 'CategoryScreen',
        cardStyle: { shadowColor: 'transparent', backgroundColor: COLORS.background },
        headerLayoutPreset: "left",
        defaultNavigationOptions: {
            headerStyle: styles.headerStyle,
            headerTintColor: COLORS.header_titles_icons,
            headerBackTitle: null,
            headerTitleContainerStyle: {
                marginLeft : Platform.OS == 'ios' ? 25 : null
            }
        },
    });

CategoryStack.navigationOptions = {
    header: null
}


const AppStack = createStackNavigator({
    HomeScreen: { screen : Home, path: 'home/:data'},
    SearchScreen: { screen: Search },
    CategoryScreen: { screen: CategoryStack, path: 'category/:data' },
    FilterScreen: { screen: Filtering },
    ProductScreen: { screen: ProductDetails,  path: 'product/:data'},
    DescriptionScreen: { screen: ProductDescription },
    AddReviewScreen: { screen: AddReview },
    ReviewsScreen: { screen: Reviews },
    GalleryScreen: { screen: ImageGallery },
    WishlistScreen: { screen: Wishlist },
    AccountScreen: { screen: MyAccount },
    OrderScreen: { screen: MyOrders },
    ProfileScreen: { screen: MyProfile },
    AddressScreen: { screen: MyAddress },
    LoginScreen: { screen: Login },
    SignUpScreen: { screen: SignUp },
    ForgetPasswordScreen: { screen: ForgetPassword },
    ResetPasswordScreen: { screen: ResetPassword },
    OrderDetailsScreen: { screen: OrderDetails },
    CartScreen: { screen: MyCart },
    CheckoutScreen: { screen: CheckoutWeb },
    NewAddressScreen: { screen: NewAddress }
}, {
        initialRouteName: 'HomeScreen',
        cardStyle: { shadowColor: 'transparent', backgroundColor: COLORS.background },
        headerLayoutPreset: "left",
        defaultNavigationOptions: {
            headerStyle: styles.headerStyle,
            headerTintColor: COLORS.header_titles_icons,
            headerBackTitle: null,
            headerTitleContainerStyle: {
                marginLeft : Platform.OS == 'ios' ? 25 : null
            }
        },

    });

const DrawerNavigation = createDrawerNavigator({
    DrawerStack: { screen : AppStack , path:'main'},
    ProductScreen: { screen: ProductDetails,  path: 'product/:id/:name'},
    CategoryScreen: { screen: Category, path: 'category/:id/:name' },
}, {
        drawerWidth: SCREEN.WIDTH * 0.8,
        initialRouteName: 'DrawerStack',
        edgeWidth:  I18nManager.isRTL ? 50 - SCREEN.WIDTH : 50 ,
        drawerPosition: I18nManager.isRTL ? 'right' : 'left', //Platform.OS === 'ios' ? 'left' : androidDrawerPosition(),
        contentComponent: SideMenu
    });

DrawerNavigation.navigationOptions = {
    header: null,
    
}

// DrawerNavigation.navigationOptions = ({ navigation }) => {
//     let drawerLockMode = 'unlocked';
//     if (navigation.state.index > 1) {
//         drawerLockMode = 'locked-closed';
//     }

//     return {
//         drawerLockMode,
//     };
// };





const RootNavigation = createSwitchNavigator({
    SplashScreen: { screen : Splash,   },
    ConfigScreen: { screen: Configuration,  path: 'config'},
    Main: { screen: DrawerNavigation, path :'root' }

}, {
        initialRouteName: 'SplashScreen'
    });





const Root =  createAppContainer(RootNavigation);
export default MainApp = () => <Root uriPrefix={prefix_url} />;


