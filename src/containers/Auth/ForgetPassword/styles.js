import {StyleSheet} from "react-native";
import { SCREEN } from "../../../common";
const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingVertical:20
    },
    forgetButton : {
        width : SCREEN.WIDTH * 0.9,
        alignSelf : "center",
        marginTop:10
    },
    resetPassText : {
        width : SCREEN.WIDTH * 0.7,
        color : "#555",
        textAlign:"center",
        alignSelf:"center",
        fontSize : 13,
        marginBottom:20
    }
})

export default styles;