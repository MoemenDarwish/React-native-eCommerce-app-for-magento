import React from 'react';
import { StyleSheet, View } from 'react-native';
import I18n from '../../i18n';
import { AppText } from '../index';
import { COLORS } from '../../common';
import PropTypes from 'prop-types';

const SaleRate = ({ value, style }) => {
    return (
        <View style={[styles.saleRate, style]}>

            <AppText style={styles.saleText}>{value}% {I18n.t("off")}</AppText>

        </View>
    )
}
SaleRate.propTypes = {
    value: PropTypes.number.isRequired,
    style: PropTypes.any
}

export { SaleRate };

const styles = StyleSheet.create({
    saleRate: {
        flexDirection: 'row',
        backgroundColor: COLORS.sale,
        paddingHorizontal:7
    },
    saleText: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: 'bold'
    }
});