import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../AppText';
import PropTypes from 'prop-types';
import { COLORS } from '../../common';

const ProductName = ({ name, style, textStyle,numberOfLines }) => {
    return (
        <View style={[styles.productView, style]}>
            <AppText style={[styles.name, textStyle]} numberOfLines={numberOfLines==0 ? null : 2} ellipsizeMode="tail">{name}</AppText>
        </View>
    )
};
ProductName.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.any

}
export { ProductName };

const styles = StyleSheet.create({
    productView: {
        paddingHorizontal : 5
    },
    name: {
        fontSize: 13,
        textAlign: 'left',
        color:COLORS.product_name,
        fontWeight:'500'
    }


});
