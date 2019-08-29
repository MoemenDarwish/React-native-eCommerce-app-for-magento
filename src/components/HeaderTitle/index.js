

import React from 'react';
import { StyleSheet, View} from 'react-native';
import { COLORS } from '../../common';
import { AppText } from '../AppText';


const HeaderTitle = ({title, maxLength})=>{
    let max = maxLength ? maxLength : 25;
    let name = title.length > max ? `${title.substr(0,max)}...` : title;
    return <View style={styles.container} >
    <AppText style={styles.title} numberOfLines={1} >{name}</AppText>  
    </View> 
}

export  {HeaderTitle};


const styles = StyleSheet.create({
    container:{
        width:"80%",
        alignItems:'flex-start',
    },
    title:{
        textAlign:'left',
        fontWeight:'bold',
        fontSize:17,
        color:COLORS.header_titles_icons
    }
})