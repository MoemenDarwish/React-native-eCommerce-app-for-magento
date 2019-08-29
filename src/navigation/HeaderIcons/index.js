import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { AppText } from "../../components";
import I18n from "../../i18n";
import { navigateToMain } from "../Navigator";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ICONS, COLORS, IMAGES } from "../../common";



export const HeaderIcon = ({ iconName, onPress }) => {
    return (
        <TouchableOpacity
            disabled={!onPress}
            onPress={onPress}
            style={styles.pressedIconContainer} >
            <Icon size={25} name={iconName} color={COLORS.header_titles_icons} />
        </TouchableOpacity>

    );
}


/** SKIP */
export const SkipButton = ({ navigation }) => {
    return <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigateToMain(navigation)} >
        <AppText style={styles.skipText} >{I18n.t("skip")}</AppText>
    </TouchableOpacity>
}


/** MENU ICON */
export const Menu = ({ navigation }) => {
    return (
        <HeaderIcon iconName={ICONS.menu} onPress={() => navigation.openDrawer()} />

    );
}



/** HEADER LOGO IMAGE */

export const HeaderLogo = ()=> <Image source={IMAGES.logo_light} />


