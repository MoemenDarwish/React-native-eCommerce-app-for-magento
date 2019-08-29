import { StyleSheet } from "react-native";
import { COLORS, FONTS, SCREEN } from "../../common";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabsContainerStyle: {
        height: 50,
        width: SCREEN.WIDTH * 0.9,
        alignSelf: "center",
        marginVertical: 20, 
    },
    tabStyle: {
        // borderWidth: null,
        borderColor: "gray",
        backgroundColor: "#EEE"
    },
    activeTabStyle: {
        borderColor: "gray",
        backgroundColor: 'rgba(1, 54, 101,0.9)'
    },

    tabTextStyle: {
        ...FONTS.regular,
        fontSize: 18,
        color: COLORS.text_dark
    },
    activeTabTextStyle: {
        ...FONTS.bold,
    },
    content: {
        flex: 1,
        // width: SCREEN.WIDTH * 0.9,
        alignSelf: "center",
        
        marginTop: 10,
    },
    forgetPassword: {
        height: 60,
        justifyContent: "center",
        alignSelf: "flex-start",
    },
    forgetPasswordText: {
        ...FONTS.semiBold,
        fontSize: 13,
    },
    buttonStyle: {
        width: SCREEN.WIDTH * 0.9,
        height: 50,
        alignSelf: "center",
        borderRadius: 5, marginBottom: 0
    },
    buttonText: {
        ...FONTS.semiBold,
        fontSize: 16
    },
    bottomArea: {
        marginTop : 20,
    },
    orSection: {
        width: SCREEN.WIDTH * 0.9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
    },
    orText: {
        color: COLORS.text_mid
    },
    orView: {
        width: "45%",
        borderWidth: 0.5,
        borderColor: COLORS.text_mid
    }
});

export default styles;