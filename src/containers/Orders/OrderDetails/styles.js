import { StyleSheet } from 'react-native';
import { COLORS, SCREEN } from '../../../common';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee"
    },
    details: {
        marginTop: 15,
        width: SCREEN.WIDTH - 20,
        shadowOffset: { width: 1, height: 1 },
        backgroundColor: COLORS.background,
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.1,
        alignSelf: 'center'
    },

    itemsDetails: {
        fontSize: 16,
        marginTop: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'flex-start'
    },
    orderNoText: {
        fontWeight: 'bold',
        fontSize: 17
    },
    dateText: {
        marginLeft: 10,
        marginTop: 5
    },
   
    cancelButton: {
        backgroundColor: COLORS.disabled_icon,
        alignSelf: 'center',
        marginVertical: 10,
        width: '85%'

    },
    shipAddress: {
        marginHorizontal: 10
    },
    cancelText: {
        fontWeight: 'bold',
        color: COLORS.text_mid
    },
    orderStatus: {
        marginTop: 15
    },
    orderNoText: {
        fontWeight: "bold",
        color: COLORS.main,
        fontSize: 20,
        textAlign: "center",
        marginTop: 15
    },
    rows: {
        padding: 15,
        borderBottomColor: COLORS.border,
        borderBottomWidth: 1
    },
    shipInfoView: {
        padding: 15
    },
    shipInfo: {
        fontSize: 13,
        marginTop: 5
    },
    shipInfoText: {
        fontWeight: "bold"
    }
});


export default styles;