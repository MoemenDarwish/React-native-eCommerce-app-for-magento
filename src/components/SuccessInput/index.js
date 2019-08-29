import React, { Component } from 'react';
import { TextInput, View, StyleSheet, I18nManager } from 'react-native';
import { AppIcon } from '../Icons';
import { ICONS } from '../../common';
class SuccessInput extends Component {

    focus =()=>{
        this.refs.textInput.focus()
    }
    render() {
        const { placeholder, required, error, checked } = this.props;
        return (<View style={[styles.container,{ borderBottomColor :  error ? 'red' : '#ddd' }]}
        >
            <TextInput
                ref={"textInput"}
                {...this.props}
                underlineColorAndroid={'transparent'}
                style={styles.input}
                placeholder={required ? `${placeholder} * ` : placeholder}
            />
            <AppIcon name={ICONS.checked} size={20} color={ checked ? 'green': "#ccc"} />
        </View>
        )
    }
}

export { SuccessInput };


const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        borderBottomWidth: 1,
        alignItems:'center',
        height: 35,
        marginBottom:10,
    },
    input: {
        height: 35,
        width : "90%",
        padding:5,
        textAlign: I18nManager.isRTL?"right" :'left',
    }
})