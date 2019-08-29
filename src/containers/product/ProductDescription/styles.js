import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, SCREEN } from '../../../common';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
        flex: 1
    },
    section: {
        alignSelf: "center",
        backgroundColor: "#fff",
        padding: 12,
        paddingBottom: 16,
        width: SCREEN.WIDTH - 20,
        marginTop: 10,
        borderRadius: 3
    },
    header: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        color: COLORS.main_text
    },
    readMore: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    readMoreText: {
        marginLeft: 5,
        color: COLORS.main_text
    },
    subSpecif: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    keyText: {
        flex: 0.5,
        textAlign: 'left'
    },
    valueText: {
        flex: 0.5,
        marginLeft: 10,
        textAlign: 'left'
    },

})

export default styles;