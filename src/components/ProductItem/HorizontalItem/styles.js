import { StyleSheet } from 'react-native';
import { SCREEN } from '../../../common';


let itemHeight =  160 ; //(DEVICE_HEIGHT * 0.30);
let imageHeight = 130 ; // 0.6 * itemHeight - 10;
let barHeight = 35;
let nameHeight = 40 //0.25 * itemHeight;
let reviewHeight = 20//0.15 * itemHeight;
let priceHeight = 40 //50;



// Section for Widths 
let itemwidth = SCREEN.WIDTH ;

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        padding: 5,
        paddingTop:15,
        paddingBottom:10,
        height: itemHeight,
        width: itemwidth,
        backgroundColor: "#FFF",
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },
    prodcutDetails: {
        flex: 1,
        // flexDirection: 'row'
    },
    imageContainer: {
        // padding:/,
        width: itemwidth * 0.35,
        height : imageHeight,
    },
    image: {
        flex: 1,
        alignSelf:"stretch"
    },
    saleRate: {
        position: 'absolute',
        padding: 2,
        bottom: 0,
        left: 0,
        justifyContent: 'center'
    },
    productname: {
        height: nameHeight,
        justifyContent: 'center'
    },
    nameText: {
        fontSize: 15,
    },
    rateViewer: {
        height: reviewHeight,
        alignItems: 'center',
    },
    productPrice: {
        height: priceHeight,
    },
    controlBar: {
        flexDirection: 'row',
        height: barHeight,
        alignItems: 'center',
        justifyContent: 'center'

    },
    controlBarIcon: {
        flex: 1,
        borderRadius: 0
    },
    detialsProduct: {
        flex: 1,
        padding: 5
    },
    priceText:{
        fontSize : 17
    },
    discountPriceText:{
        fontSize : 14
    }
});
export default styles;