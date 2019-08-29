import React, { Component } from 'react'
import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import SegmentedControlTab from "react-native-segmented-control-tab";
import Login from './Login';
import Register from './Register';
import I18n from "../../i18n";
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import { AppText } from '../../components';
import SocialButtons from "./SocialButtons"
export class Auth extends Component {

    constructor() {
        super();
        this.state = {
            index: 0
        };
    }



    render() {
        const { index } = this.state;
        const { navigation } = this.props;
        return (
            <KeyboardAvoidingView style={styles.container} >
                <LinearGradient colors={["#eee", "#fff"]} style={styles.container} >
                    <ScrollView>

                        <SegmentedControlTab
                            values={[I18n.t("login").toUpperCase(), I18n.t("register").toUpperCase()]}
                            selectedIndex={this.state.index}
                            onTabPress={index => this.setState({ index })}
                            borderRadius={5}
                            tabsContainerStyle={styles.tabsContainerStyle}
                            activeTabStyle={styles.activeTabStyle}
                            tabStyle={styles.tabStyle}
                            tabTextStyle={styles.tabTextStyle}
                            activeTabTextStyle={styles.activeTabTextStyle}
                        />
                        <View style={styles.content} >
                            {index === 0 && <Login navigation={navigation} />}
                            {index === 1 && <Register navigation={navigation} />}

                            <View style={styles.bottomArea} >
                                <View style={styles.orSection} >
                                    <View style={styles.orView} />
                                    <AppText style={styles.orText} >{I18n.t("or")}</AppText>
                                    <View style={styles.orView} />
                                </View>

                                <SocialButtons navigation={navigation} />
                            </View>


                        </View>
                    </ScrollView>

                </LinearGradient>
            </KeyboardAvoidingView>
        );
    }
}

export default Auth
