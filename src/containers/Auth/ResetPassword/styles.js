import { StyleSheet } from 'react-native';
import { COLORS, SCREEN } from "../../../common";


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    logo: {
        margin: 0,
        height : SCREEN.HEIGHT*0.18,        alignItems: "center",
        justifyContent: "center"
    },
    loginText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 30,
        color: "#fff"
    },

    inputContainer: {
        paddingTop: 5,
        backgroundColor: 'rgba(255,255,255,0.85)',
        width: "80%",
        paddingBottom: 15,
        borderRadius: 15,
        paddingHorizontal: 15,
        alignSelf: "center",
        justifyContent: 'center',
        marginBottom: 10
    },

    logoTextContainer: {
        alignItems: 'center',
        marginVertical: 20
    },
    logoText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.main
    },


    forgetButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    forgetPassButton: {
        width: "100%",
        borderRadius: 5,
        backgroundColor: COLORS.main,
        height: 45,
        marginBottom: 0
    },
    titleStyle: {
        color: COLORS.white,
        fontWeight: 'bold'
    },
    textInputView: {
        width: "100%",
        alignSelf: 'center',
        marginVertical: 10,

    },

    forgetPassContainer: {
        alignItems: 'flex-start',
        marginHorizontal: 40,
        // marginVertical: 10,
        marginTop: 5,
        marginBottom: 10

    },
    forgetPass: {
        fontSize: 13,

        color: "#777",
        fontWeight: 'bold'
    },
});

export default style;