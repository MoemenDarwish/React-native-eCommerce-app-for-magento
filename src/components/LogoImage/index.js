import React,{Component} from 'react';
import {View,Image,StyleSheet} from 'react-native';
import PropTypes from 'prop-types'
import { IMAGES, SCREEN } from '../../common';
const LogoImage=({style, type = 'dark'})=>{
        return(
            <View style={styles.imageContainer}>
            <Image  style={[styles.image,style]} resizeMode={"contain"}
              source={ type=='light' ?  IMAGES.logo_light : IMAGES.logo_dark}
            />
          </View>
        );
    
}

export {LogoImage};
LogoImage.propTypes={
    style: PropTypes.any
}
const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: SCREEN.WIDTH/2,
    },
});