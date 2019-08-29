

import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import { COLORS } from '../../../common';
import { PressedIcon} from '../index';


const Menu = ({navigation})=>{
    const iconSize = Platform.OS === 'ios' ? 25: 25;
    return(
        <View  style={styles.container} >

        <PressedIcon 
            name={"menu"}
            onPress={() => navigation.openDrawer()}
            size={iconSize}
            underlayColor={COLORS.transparent}
            color={COLORS.header_titles_icons} />
        </View>  
    );
}


export default Menu;


const styles = StyleSheet.create({
    container:{
        flex:1,
        height: 40,
        width: 40 ,
        alignItems:'center',
        justifyContent:'center',
    }
})