import React from "react";
import {
    createAppContainer,
    createSwitchNavigator,
} from "react-navigation";
import Splash from "../containers/Splash";
import AppIntro from "../containers/AppIntro";
import Config from "../containers/Configuration";
import MainStack from "./MainStack";
import { AuthStack } from "./StacksNavigation";





const RootNavigation = createSwitchNavigator({
    SplashScreen: Splash,
    ConfigScreen: Config,
    AppIntroScreen : AppIntro,
    AuthScreen: AuthStack,
    MainScreen: MainStack
},{
    // initialRouteName : "AuthScreen",
    resetOnBlur : false
});


export default createAppContainer(RootNavigation);