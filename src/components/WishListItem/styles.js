import { StyleSheet } from 'react-native';
import { COLORS, SCREEN } from '../../common';

// Section for Heights
let itemHeight = 130;
let nameHeight = 0.25 * itemHeight;


// Section for Widths 
let itemwidth = SCREEN.WIDTH * 0.95;

const styles = StyleSheet.create({
    container: {
        padding: 5,
        height: itemHeight,
        width: itemwidth,
        backgroundColor: COLORS.background,
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: COLORS.border,
        marginBottom: 10
    },
    prodcutDetails: {
        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        width: itemwidth * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: 'center',
        justifyContent: 'center'
    },
    saleRate: {
        position: 'absolute',
        padding: 2,
        top: 0,
        left: 0,
        justifyContent: 'center',
    },
    productname: {
        marginBottom: 5
    },
    nameText: {
        fontSize: 15,
    },
    productPrice: {
        justifyContent: "space-between",
        marginBottom: 5
    },
    controlBar: {
        flexDirection : "row",
        justifyContent: "space-between",

    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },

    controlBarIcon: {
        // borderRadius: 0
    },
    detialsProduct: {
        flex: 1,
        padding: 5
    }
});
export default styles;