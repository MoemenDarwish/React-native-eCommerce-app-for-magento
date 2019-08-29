import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');




export const SCREEN = {
    WIDTH : width ,
    HEIGHT :height 
}


export const FONTS = {
    light :{
        fontFamily : Platform.OS === "ios" ?  "Cairo" : "Cairo-Light"
    } ,
    regular : {
        fontFamily : Platform.OS === "ios" ?  "Cairo" : "Cairo-Regular"
    } ,
    semiBold : {
        fontFamily : Platform.OS === "ios" ?  "Cairo" : "Cairo-SemiBold",
        fontWeight : Platform.OS === "ios" ?  "600" : null 
    },
    bold :{
        fontFamily : Platform.OS === "ios" ?  "Cairo" : "Cairo-Bold" ,
        fontWeight : Platform.OS === "ios" ?  "bold" : null 
    }
}