import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { AppText,AppIcon } from '../../../components';
import PropTypes from 'prop-types';
import { ICONS, SCREEN } from '../../../common';



const LanguageItem = ({ lang, checked, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.container, checked ? { borderColor: 'green', borderWidth: 2 } : {}]} activeOpacity={0.8}
            onPress={() => onPress(lang.key)}
        >
            <View style={styles.icon} >
                <AppIcon name={checked ? ICONS.checked : ICONS.unchecked} color={'#555'} />
            </View>
            <View style={styles.lang} >
                <AppText style={styles.langText} >{lang.name}</AppText>

            </View>
        </TouchableOpacity>
    );
}


LanguageItem.proptypes = {
    lang: PropTypes.object.isRequired,
    checked: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
}
export default LanguageItem;


const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        width: SCREEN.WIDTH * 0.5,
        paddingHorizontal:10,
        marginBottom: 10
    },
    lang: {
        width: "80%",
        height: "100%",
        justifyContent:'center'
    },
    icon: {
        width: "20%",
        height: "100%",
        justifyContent:'center'
    },
    langText:{
        fontWeight:'bold',
        fontSize:16,
        color:'#555',
        textAlign:'right'
    }

});