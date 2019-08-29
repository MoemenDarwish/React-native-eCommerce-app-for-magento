

import React,{Component} from 'react';
import {View, StyleSheet, Platform, I18nManager} from 'react-native';
import { ICONS, COLORS } from '../../../common';
import { PressedIcon} from '../index';


const Back = ({navigation})=>{
    const iconName = I18nManager.isRTL ? ICONS.backRight : ICONS.backLeft ;
    const iconSize = Platform.OS === 'ios' ? 35: 25;
    const iconUnderlay = Platform.OS === 'ios' ? COLORS.transparent : null;
    return(
        <View  style={styles.container} >
                <PressedIcon 
                    onPress={()=> navigation.goBack(null) }
                    name={iconName}
                    underlayColor={iconUnderlay}
                    color={COLORS.header_titles_icons}
                    size={iconSize} />
        </View>  
    );
}


export default Back;



const styles = StyleSheet.create({
    container:{
        flexDirection : 'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginLeft : Platform.OS == 'ios' ? -5 : 5
    }
})