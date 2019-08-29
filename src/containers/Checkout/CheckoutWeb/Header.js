import React, { Component } from 'react';
import { View, StyleSheet, I18nManager, Platform } from 'react-native';
import { Header } from "react-navigation";
import { COLORS, ICONS } from '../../../common';
import { HeaderTitle, PressedIcon } from '../../../components';


class CheckoutHeader extends Component {
    render() {
        const { title, onPressBack } = this.props;

        const iconName = I18nManager.isRTL ? ICONS.backRight : ICONS.backLeft;
        const iconSize = Platform.OS === 'ios' ? 35 : 25;
        const iconUnderlay = Platform.OS === 'ios' ? COLORS.transparent : null;

        return (
            <View style={styles.container} >
                <PressedIcon
                    onPress={() => onPressBack()}
                    name={iconName}
                    underlayColor={iconUnderlay}
                    color={COLORS.header_titles_icons}
                    size={iconSize} />

                <View style={{ height: 40, justifyContent: "center", width:"80%" }} >
                    <HeaderTitle title={title || ""} maxLength={35} />
                </View>


            </View>
        );
    }
}





export default CheckoutHeader;


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height : Platform.OS=='ios'? Header.HEIGHT * 1.5 : Header.HEIGHT ,
        paddingTop: Platform.OS=='ios'? Header.HEIGHT*0.45 : 0,
        backgroundColor: COLORS.main,
        alignItems: "flex-end",
        justifyContent: "flex-start",
        // paddingTop: 20
    }
})