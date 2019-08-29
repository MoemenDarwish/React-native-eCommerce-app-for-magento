import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: "#eee"
    },
    layoutIcon: {
        backgroundColor: COLORS.transparent
    },
    list: {
        borderWidth: 0.5,
        borderTopWidth: 0,
        marginTop: -0.5,
        borderBottomWidth:0,
        borderColor: "#ccc"
        // paddingVertical:10 
    },

});

export default styles;