import { StyleSheet } from 'react-native';
import { COLORS } from '../../../common';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,

    },
    productDetails: {
        height: 80,
        justifyContent: 'center',
        padding: 10,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,

    },
    productImage: {
        width: 150,
        height: 150,
        marginTop: 10,
        alignSelf:'center'
    },
    productNameText: {
        fontSize: 16,
        color: COLORS.main_text,
        fontWeight: "bold"
    },
    ratingContainer: {
        alignItems: 'center',
        marginVertical: 10,
        padding: 10
    },
    starsContainer: {
        marginVertical: 10,
        width: "50%"
    },
    starText: {
        color: COLORS.secondary,
        marginTop: 10
    },
    inputContainer: {
        paddingHorizontal:15,
        // alignItems: 'center',
        marginVertical: 10

    },
    inputStyle: {
        width:"100%",
        // paddingHorizontal:15,
      marginBottom: 10
    },
    buttonStyle: {
        width: "100%",
        height:55,
        alignSelf: 'center',
        backgroundColor: COLORS.main
    },
    buttonText: {
        fontWeight: "bold",
        fontSize:16
    }
});

export default styles;