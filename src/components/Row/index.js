import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppText } from '../AppText'

const Row = ({ rowKey, value }) => {
    return (
        <View style={styles.container}>
            <AppText style={styles.rowKey}>{rowKey}</AppText>
            <AppText style={styles.value}>{value}</AppText>
        </View>
    )
}

export { Row };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        shadowOffset: { width: 1, height: 1 }
    },
    rowKey: {
        fontSize: 14
    },
    value: {
        fontWeight: '600'
    },
})