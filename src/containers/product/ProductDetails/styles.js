import { StyleSheet } from 'react-native';
import { COLORS, SCREEN } from '../../../common';

const styles = StyleSheet.create({
    fullView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor : "#eee",
    },
    productName: {
        marginTop: 5,
    },
    nameText: {
        fontSize: 17,
        textAlign: 'left',
        color: COLORS.main_text,
        fontWeight: 'bold'

    },
    mainDetials: {
        padding: 10,
        backgroundColor : "#fff",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border
    },
    productPrice: {
        // marginTop: 10,
    },
    priceAndRate: {
        flex: 1,
        flexDirection: 'row',
        marginTop:10,
        // backgroundColor:"red",
        justifyContent: 'space-between',
        alignItems:"center"
    },
    modalDropdown: {
        flex: 1
    },
    subDescriptionText: {
        textAlign: 'left',
        paddingHorizontal: 10,
    },
    subSpecif: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 5
    },
    keyText: {
        flex: 0.5,
        textAlign: 'left'
    },
    valueText: {
        flex: 0.5,
        marginLeft: 10,
        textAlign: 'left'
    },
    addReviewContainer: {
        justifyContent: 'center',
        marginBottom: 0
    },
    addReviewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical:10,
        paddingHorizontal: 15,
        backgroundColor: '#fff'
    },
    addReviewText: {
        fontWeight: 'bold',
        marginLeft : 5,
        fontSize:15
    },
    addReview: {

    },
    reviewText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.main_text,
    },
    reviewItem:{
        backgroundColor:"#fff"
    },  
    showAllText: {
        fontSize: 15,
        color: COLORS.main,
        textAlign: 'left'

    },
    showAllContainer: {
        marginBottom:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between",
    },
    reviewsContainer: {
        marginTop:10,
        padding: 10,
        marginBottom: 0,
        borderBottomWidth:0,
        paddingBottom:0,

    },
    seeAllView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center"
    },
    description:{
        backgroundColor : "#fff",
        width : SCREEN.WIDTH - 20,
        alignSelf:"center",
        marginTop:10,
        borderRadius:3
        // backgroundColor:"red"
    }

});


export default styles;