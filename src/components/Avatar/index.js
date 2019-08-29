import React from'react';
import {StyleSheet,View,TouchableOpacity,Image}from 'react-native';
import { COLORS,IMAGES, SCREEN } from '../../common';

const Avatar =({user,onPress,style})=>{
    const userImageSource = user && user.image ? { uri : user.image } : IMAGES.avatar;
    return(
        <View style={[styles.avatarContainer,style]} >
        <TouchableOpacity 
            activeOpacity={0.5}
            style={styles.avatarImageContainer}
            onPress={onPress} >
            <Image 
                source={ userImageSource } 
                style={[styles.avatarImage,{tintColor: user && user.image ? null : COLORS.icon}]}
                />
        </TouchableOpacity>
        </View>
    )}

export  {Avatar};

const styles = StyleSheet.create({

    avatarContainer:{
           backgroundColor:COLORS.border,
           height:SCREEN.HEIGHT/5.5,
           justifyContent:'center',
           alignItems:'center',
       },
       avatarImageContainer:{
           alignItems:'center',
           justifyContent:'center',
           width:100,
           height:100,
           borderRadius:50,
           borderWidth:3,
           borderColor:COLORS.border,
           overflow:'hidden'
       },
       avatarImage:{
           flex:1,
           width:null,
           height:null,
        
       },
})