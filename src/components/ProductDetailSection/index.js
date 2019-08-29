import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS } from '../../common';

const ProductDetailSection = ({ children, style }) => {
    return (
        <View style={[styles.container, style]} >
            {children}
        </View>
    );
}


ProductDetailSection.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export { ProductDetailSection };


const styles = StyleSheet.create({
    container: {
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        
    }
})