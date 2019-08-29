import React from "react";
import { createStackNavigator } from "react-navigation"
import ForgetPassword from "../containers/Auth/ForgetPassword";
import Category from "../containers/Category";
import Filtering from "../containers/Category/Filtering";
import ProductDetails from "../containers/product/ProductDetails";
import ProductDescription from "../containers/product/ProductDescription";
import ProductGallery from "../containers/product/ImageGallery";
import AddReview from "../containers/product/AddReview";
import ProductReviews from "../containers/product/Reviews";
import { COLORS } from "../common";
import styles from "./styles";
import { SkipButton } from "./HeaderIcons";
import Auth from "../containers/Auth";
import { HeaderLogo } from "../components";



const AuthStack = createStackNavigator({
    AuthScreen : Auth,
    ForgetScreen: ForgetPassword
}, {
        initialRouteName: "AuthScreen",
        headerLayoutPreset: "center",
        mode : "modal",
        headerBackTitleVisible: false,
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: [styles.headerStyle, styles.authHeader],
                headerTintColor: COLORS.header_titles_icons,
                headerBackTitle: null,
                headerTitle : <HeaderLogo />,
                headerRight: <SkipButton  navigation={navigation} />,
            }
        }
    });


const CategoryStack = createStackNavigator({
    CategoryScreen: { screen: Category },
    FilterScreen: { screen: Filtering },
}, {
        mode: "modal",
        initialRouteName: 'CategoryScreen',
        headerLayoutPreset: "left",
        defaultNavigationOptions: {
            headerStyle: styles.headerStyle,
            headerTintColor: COLORS.header_titles_icons,
            headerBackTitle: null,
            headerTitleContainerStyle: { paddingHorizontal: 20 },
        },
        navigationOptions: {
            header: null
        }
    });



const ProductStack = createStackNavigator({
    ProductScreen: ProductDetails,
    DescriptionScreen: ProductDescription,
    AddReviewScreen: { screen: AddReview },
    ReviewsScreen: { screen: ProductReviews },
    GalleryScreen: { screen: ProductGallery },

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
        navigationOptions: {
            header: null
        }
    });



export { AuthStack, CategoryStack, ProductStack };