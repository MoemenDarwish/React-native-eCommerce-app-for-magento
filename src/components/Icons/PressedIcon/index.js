import React from 'react';
import { TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';
import { AppIcon } from '../AppIcon';
import PropTypes from 'prop-types';
import { COLORS } from '../../../common';

const PressedIcon = ({ onPress,disabled ,name, style,activeOpacity ,color, underlayColor, size, iconStyle }) => {
    return (
        <TouchableHighlight
            activeOpacity={activeOpacity || 0.6}
            underlayColor={underlayColor || COLORS.iconTransparent}
            style={[styles.iconContainer, style]}
            onPress={() => onPress != null ? onPress() : alert("NO FUNCTION")}
            disabled={disabled}
        >
            <AppIcon name={name} style={styles.icon} color={color} size={size} iconStyle={iconStyle} />
        </TouchableHighlight>
    );

}

PressedIcon.propTypes = {
    onPress: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    underlayColor: PropTypes.string,
    size: PropTypes.number
}

export { PressedIcon };

const styles = StyleSheet.create({
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        margin: 0,
        lineHeight:40,
        textAlign:"center"
    }
})