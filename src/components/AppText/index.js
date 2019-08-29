import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS } from '../../common';







const AppText = ({ children, style, onPress, ...rest }) => (
    <Text {...rest} style={[styles.text, style]} onPress={onPress} >{children}</Text>
);
export { AppText };


const styles = StyleSheet.create({
    text: {
        color: COLORS.text,
        ...FONTS.regular,
        textAlign : Platform.OS === "ios" ? "left":null
    }
})