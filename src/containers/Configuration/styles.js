import {StyleSheet} from 'react-native';
import { COLORS, SCREEN } from "../../common"



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    linearGradient: {
        flex: 1
    },
    pickerContainer: {
        width: SCREEN.WIDTH * 0.85,
        justifyContent: 'center',
    },
    applyButton: {
        backgroundColor: COLORS.secondary
    },
    selectLangText: {
        textAlign: "center",
        fontSize: 17,
        color: "#FFF",
        fontWeight: 'bold'
    }
})

export default styles;