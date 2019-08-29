import {StyleSheet} from 'react-native'
import { COLORS } from '../../../common';
const styles = StyleSheet.create({
    container:{        
    },
    optionsName:{
        textAlign:'left',
        fontSize:16,
        fontWeight:'bold'
    },
    listContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
        padding:5
    
    },
    optionStyle:{
        height : 120,
        backgroundColor:null,
        marginBottom:0
    },
    attributeStyle:{
        width:50,
        height:50,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        borderColor:COLORS.border,
        borderWidth:1,
        marginRight:5
    },
    attributeText:{
        color:COLORS.main,
        fontSize:14,
        fontWeight:'bold'
    }
});

export default styles;