import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import { navigateToMain } from '../../navigation/Navigator';
import AppIntroSlider from "react-native-app-intro-slider"
import onboard_slides from './onboard_slides';
import styles from './styles';
import OnBoardItem from './OnboardItem';
import I18n from "../../i18n";

class AppIntro extends Component {
    renderItem = (slide) => {
        return <OnBoardItem slide={slide} />
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container} >
                <StatusBar barStyle={"light-content"} />
                <AppIntroSlider
                    slides={onboard_slides}
                    renderItem={this.renderItem}
                    activeDotStyle={[styles.sliderDotStyle, { backgroundColor: "#FFF" }]}
                    dotStyle={styles.sliderDotStyle}
                    paginationStyle={styles.paginationStyle}
                    showSkipButton={true}
                    buttonTextStyle={styles.doneButtonText}
                    doneLabel={I18n.t("done")}
                    nextLabel={I18n.t("next")}
                    skipLabel={I18n.t("skip")}
                    onDone={() => navigateToMain(navigation)}
                    onSkip={() => navigateToMain(navigation)}
                />
            </View>


        )
    }
}


export default AppIntro