import React from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import I18n from "../i18n"
import Home from "../containers/Home"
import Search from "../containers/Search"
import Cart from "../containers/Checkout/Cart"
import More from "../containers/More"
import { COLORS, ICONS } from "../common";
import styles from "./styles";
import { HeaderIcon } from "./HeaderIcons";
import { CartIcon } from "../components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const Tabs = createBottomTabNavigator({
    HomeScreen: Home,
    SearchScreen: Search,
    CartScreen: Cart,
    MoreScreen: More
}, {
        defaultNavigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state;
            let iconName = "", tabBarLabel = "";
            if (routeName === 'HomeScreen') {
                iconName = ICONS.home;
                tabBarLabel = I18n.t('home');
            } else if (routeName === 'SearchScreen') {
                iconName = ICONS.search;
                tabBarLabel = I18n.t('search');
            } else if (routeName === "CartScreen") {

                return {
                    tabBarIcon: ({ tintColor }) => <CartIcon navigation={navigation} color={tintColor} disabled={true} />,
                    tabBarLabel: I18n.t('cart')
                }
            }
            else if (routeName === "MoreScreen") {
                iconName = ICONS.dotHorizontal;
                tabBarLabel = I18n.t('more');
            }
            return {
                tabBarIcon: ({ tintColor }) => <Icon name={iconName} size={25} color={tintColor} />,

                tabBarLabel,
                headerTitle: tabBarLabel
            }
        },
        tabBarOptions: {
            activeTintColor: "#FFF",
            inactiveTintColor: 'rgba(255,255,255,0.5)',
            style: styles.tabContainer,
        },
        resetOnBlur: true
    });



const TabNavigator = createStackNavigator({
    TabNav: Tabs
}, {
        defaultNavigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            let headerTitle = routeName;
            if (routeName === 'HomeScreen') {
                headerTitle = I18n.t('home');
            } else if (routeName === 'SearchScreen') {
                headerTitle = I18n.t('search');
            } else if (routeName === "CartScreen") {
                headerTitle = I18n.t('cart');
            }
            else if (routeName === "MoreScreen") {
                headerTitle = I18n.t('more');
            }
            return {
                headerTitle,
                headerLeft: <HeaderIcon iconName={ICONS.menu} onPress={() => navigation.openDrawer()} />,
                headerRight: <CartIcon navigation={navigation} color={COLORS.header_titles_icons} />,
                headerRightContainerStyle: { paddingHorizontal: 10 },
                headerLeftContainerStyle: { paddingHorizontal: 10 },
                headerTintColor: COLORS.header_title,
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headetTitleStyle,
            };
        },

    })

export default TabNavigator;

