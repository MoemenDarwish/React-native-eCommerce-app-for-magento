import React from 'react';
import { View, StyleSheet, TouchableOpacity, I18nManager } from 'react-native';
import { ICONS, COLORS, SCREEN } from '../../common';
import { AppText } from '../AppText';
import I18n from '../../i18n';
import { AppIcon } from '../Icons/AppIcon';
const SubDescription = ({  onPress, description }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.container} >
            <View style={styles.header} >
                <AppText style={styles.headerText} >{I18n.t('description')}</AppText>
                <View style={styles.readMore}>
                    <AppText style={styles.readMoreText}>{I18n.t("readMore")}</AppText>
                    <AppIcon name={I18nManager.isRTL ? ICONS.LeftArrow : ICONS.RightArrow} color={"#222"} size={16} style={{margin:0}} />
                </View>
            </View>
            <View>
                <AppText numberOfLines={3} >{description}</AppText>
            </View>
        </TouchableOpacity>
    );
}


export { SubDescription };

const styles = StyleSheet.create({
    container: {
        alignSelf:"center",
        backgroundColor:"#fff",
        padding:12,
        paddingBottom:16,
        width : SCREEN.WIDTH - 20,
        marginTop:10,
        borderRadius:3
    },
    header: {
        marginBottom:10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        color: COLORS.main_text
    },
    readMore: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    readMoreText: {
        marginLeft: 5,
        color: COLORS.main_text
    }

})