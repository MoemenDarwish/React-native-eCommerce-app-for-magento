import {StyleSheet} from 'react-native';
import { COLORS, SCREEN, FONTS } from '../../common';



export default StyleSheet.create({
    container:{
        flex: 1
    },
    sliderDotStyle: {
        backgroundColor: "gray",
        borderRadius : 2,
        height:5,
        width:15

    },
    paginationStyle : {
        justifyContent:"center",
        padding :5
    },
    doneButtonText:{
        ...FONTS.bold,
        padding:0,
        fontSize:18,
    }

    
});