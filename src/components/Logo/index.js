import React from 'react';
import { StyleSheet, View, Platform ,Image } from 'react-native';
import { Header } from 'react-navigation';
import { IMAGES } from '../../common';


const HeaderLogo = ({ source, style, resizeMode }) => {
    return <View style={styles.container} >
        <Image style={styles.image} source={IMAGES.logo_light} resizeMode={"contain"} />
    </View>
}

export { HeaderLogo };


 let height  = Platform.OS == 'ios' ? Header.HEIGHT * 0.50 :  Header.HEIGHT * 0.55

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        height

    },
    image: {
        height,
        width:4* height,        
        alignSelf:"flex-start",
 
    }
});