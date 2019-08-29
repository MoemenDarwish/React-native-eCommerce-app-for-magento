import {StyleSheet} from 'react-native';
import { COLORS } from '../../common';


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : "#eee"
     },
    listStyle:{
        paddingTop:10,
        paddingBottom:20,
        alignItems:'center'
    },
    emptyButton:{

        backgroundColor:  COLORS.red ,
        flex:1,
        width:'100%',
    },
    emptyButtonText:{
        color:COLORS.text_light,
        fontWeight:'bold'
    },
    emptyAllContainer:{
        bottom:0,
        left:0,
        right:0,
        alignItems:'center',
        justifyContent:'center' ,
        height:55
    }
});

export default styles;