import React, { Component } from 'react'
import { TextInput, View, StyleSheet, I18nManager } from 'react-native'
import { AppText } from '../AppText';
import { COLORS } from '../../common';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { error: false };
        this.focus = this.focus.bind(this);
    }


    focus() {
        this.refs.textInput.focus();

    }

    render() {
        const {
            secureTextEntry,
            required,
            inputContainer,
            inputStyle,
            style,
            maxLength,
            multiline,
            } = this.props;
        return (
            <View style={[styles.container,inputContainer]} >
                <View style={styles.topTextContainer}>
                    {
                        this.props.value.length > 0 &&
                        <AppText style={styles.topText}>{this.props.placeholder}</AppText>}
                </View>
                <View style={[styles.inputContainer, inputStyle,{borderBottomColor : required ? 'red':COLORS.border}]} >
                <TextInput
                    ref={'textInput'}
                    style={[styles.input,style]}
                    enablesReturnKeyAutomatically={true}
                    maxLength={maxLength || 40}
                    underlineColorAndroid={"transparent"}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={COLORS.placeholder}
                    autoCorrect={false}
                    autoCapitalize={"none"}
                    multiline={multiline || false}
                    blurOnSubmit={true}
                    {...this.props}
                />
                </View>
            </View>
        );
    }
}
export { Input as TextInput};

const styles = StyleSheet.create({

    container:{
        width : "100%",
        minHeight:51,
        marginBottom:10
    },
    topTextContainer:{
        minHeight : 17,
        justifyContent:'center'
    },
    topText:{
        fontSize:13,
        textAlign: 'left',
        color:"#222",
    },
    inputContainer:{
        minHeight : 34,
        justifyContent:'center',
        borderBottomWidth: 1,
        borderColor:COLORS.border
    },
    input:{
        fontSize:15,
        padding:5,
        minHeight:34,
        textAlign: I18nManager.isRTL ? 'right':'left'
    }
});