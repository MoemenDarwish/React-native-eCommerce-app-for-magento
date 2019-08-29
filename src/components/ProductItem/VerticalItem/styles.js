import {StyleSheet} from 'react-native';
import { SCREEN } from '../../../common';


let itemHeight =  260 ; //(DEVICE_HEIGHT * 0.30);
let imageHeight = 110; // 0.6 * itemHeight - 10;
let barHeight = 40;
let nameHeight = 40 //0.25 * itemHeight;
let reviewHeight = 20//0.15 * itemHeight;
let priceHeight = 30 //50;

// Section for Widths 
let itemwidth = (SCREEN.WIDTH -1 )* 0.5 ;
let saleRateWidth = itemwidth * 0.49;

const styles = StyleSheet.create({
    container:{
        padding:15,
        paddingBottom:0,
        height : itemHeight,
        width:itemwidth,
        backgroundColor: "#FFF",
        borderWidth:0.5,
        borderColor:"#ccc"
    },
    imageContainer:{
        marginTop:0,
        height:  imageHeight,
        width: itemwidth - 10,
        alignItems:'center',
        justifyContent:'center',

    },
    image:{
        flex:1,
        alignSelf:"stretch",
        
        alignItems:'center',
        justifyContent:'center'
    },
    saleRate:{
        position:'absolute',
        bottom:0,
        left:0,
        width : saleRateWidth,
        justifyContent:'center'
    },
    wishlist:{
        position : 'absolute',
        top:2,
        zIndex:999,
        right:2
    },
    productname:{
        height: nameHeight,
        justifyContent:'flex-end'
    },
    rateViewer:{
        height:reviewHeight,
        alignItems:'center'
    },
    productPrice:{
        height:priceHeight
    },
    controlBar:{
        flexDirection:'row',
        height : barHeight,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:0,
        borderRightWidth:0,
        borderLeftWidth:0

    },
    controlBarIcon:{
        flex:0.5,
        borderRadius:0,
        marginHorizontal:5
    }
});
export default styles;