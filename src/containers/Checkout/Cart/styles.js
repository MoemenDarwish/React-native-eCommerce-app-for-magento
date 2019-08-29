import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:10,
        backgroundColor:"#eee"
    },
    listStyle: {
        // paddingTop: 5,
        paddingBottom: 20,
        alignItems: 'center'
    },
    bottomArea: {
        backgroundColor: COLORS.border,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },

    emptyCartBtn: {
        backgroundColor: COLORS.google,
        width: "90%",
        marginBottom:10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize:16
    },
    subTotalArea: {
        width: "90%",
        marginBottom: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    subTotalText: {
        fontSize: 14,
    },
    subTotalPrice: {
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonsArea:{
        width : "100%",
        flexDirection:"row",

    },
    buttonStyle: {
        flex:1,
        height:55,
        backgroundColor: COLORS.main_button,
    },
});

export default styles;