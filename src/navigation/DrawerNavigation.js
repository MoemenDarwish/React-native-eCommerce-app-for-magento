import { createDrawerNavigator } from "react-navigation";
import {I18nManager} from "react-native";
import TabNavigator from "./TabNavigation";
import SideMenu from "../containers/SideMenu";
import { SCREEN } from "../common";

const DrawerNavigator = createDrawerNavigator({
    TabScreen: TabNavigator
},{
    contentComponent : SideMenu,
    drawerWidth : SCREEN.WIDTH * 0.8,
    drawerPosition : I18nManager.isRTL ? "right" : "left",
    navigationOptions : {
        header : null
    }
});



export default DrawerNavigator;