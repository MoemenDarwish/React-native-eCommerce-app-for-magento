import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { IMAGES } from '../../common';
import {
    navigateToConfig,
    navigateToMain,
    navigateToAppIntro
} from '../../navigation/Navigator';
import I18n from "../../i18n";


class Splash extends Component {


    componentDidMount() {
        setTimeout(() => {
            this.startup()
        }, 2000);
    }

    startup = async () => {
        const { lang, user, navigation } = this.props;
        if (lang) {
            I18n.locale = lang;
            try {
                const isFirstTime = await AsyncStorage.getItem("@IS_FIRST_TIME");
                if (user) {
                    return navigateToMain(navigation)
                }
                if (!isFirstTime) {
                    await AsyncStorage.setItem("@IS_FIRST_TIME", "true").then(() => {
                        navigateToAppIntro(navigation)
                    })
                } else {
                    return navigateToMain(navigation)
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            navigateToConfig(navigation)
        }
    }
    render() {
        return (
            <ImageBackground source={IMAGES.splash} style={{ flex: 1 }} />
        );
    }
}





const mapStateToProps = state => {
    return {
        lang: state.lang,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Splash);