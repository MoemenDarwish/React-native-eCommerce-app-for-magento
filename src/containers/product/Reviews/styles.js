import {StyleSheet} from 'react-native'
import { COLORS, SCREEN } from '../../../common';

const style=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#eee"
        // alignItems:'center',

        
    },
    listStyle:{
        alignSelf:"center"
    },
    itemStyle:{
        backgroundColor:"#fff",
        width: SCREEN.WIDTH*0.95,
        borderRadius:3,
        marginBottom:10,
        marginRight:0
    },
    header: {
        width: SCREEN.WIDTH*0.95,
        marginTop:20,
        marginBottom:20,
        alignSelf:"center"
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        color: COLORS.main_text
    },
})

export default style;