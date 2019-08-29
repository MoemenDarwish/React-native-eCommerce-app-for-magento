import {StyleSheet} from 'react-native';
import { COLORS, SCREEN } from '../../common'
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#fafafa',
        alignItems:'center'
    },
    fieldsContainer:{
        width:SCREEN.WIDTH*0.95,
        backgroundColor:'#fff',
        shadowColor: "#000",
        elevation:1,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        marginTop:10,
        marginBottom:10,
        paddingBottom:10,
    },
    headerContainer:{
        paddingHorizontal : 10,
        justifyContent:'center',
        borderBottomWidth:2,
        height:50,
        borderBottomColor:COLORS.border
    },
    headerText:{
        fontSize:17,
        textAlign:'left',
        color : COLORS.text_dark,
        fontWeight:'bold',
    },
    infoSection:{
        marginTop:10,
        paddingHorizontal : 15,
        marginBottom:20,
    },
    saveButton:{
        backgroundColor:COLORS.secondary,
        marginBottom:10,
        width:null,
        marginHorizontal:15,
    },
    saveButtonText:{
        fontWeight:'bold',
        fontSize:17
    },
    country: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        justifyContent: 'center',
        height: 35,
        marginBottom: 10,
    },
    countryText: {
        paddingHorizontal: 5,
        textAlign:'left'
    },
});

export default styles;