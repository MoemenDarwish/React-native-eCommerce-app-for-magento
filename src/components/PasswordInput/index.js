import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import I18n from '../../i18n';
import { ICONS, COLORS } from '../../common';
import { PressedIcon } from '../Icons';
import { TextInput } from '../Input';

class PasswordInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            securityPassword: false
        };
        this.onPressEye = this.onPressEye.bind(this)
        this.focus = this.focus.bind(this);
    }


    focus() {
        this.refs.password.focus();
    }
    onPressEye() {
        this.setState({ securityPassword: !this.state.securityPassword })
    }
    render() {
        const {securityPassword} = this.state;
        let showPasswordIcon = this.state.securityPassword ? ICONS.eye : ICONS.eyeOff;
        const {required} = this.props;
        return (
            <View style={[styles.container,{borderBottomColor : required ? 'red' : COLORS.border}]}>
                <TextInput
                    ref={"password"} 
                    inputStyle={styles.inputStyle}
                    inputContainer={styles.inputContainer}
                    secureTextEntry={!this.state.securityPassword}
                    placeholder={I18n.t('password')} 
                    maxLength={25}
                    {...this.props}
                    />
                <View style={styles.eyeContainer} >
                <PressedIcon
                    size={20}
                    underlayColor={COLORS.transparent}
                    color={securityPassword?  '#777' : COLORS.disabled_icon}
                    name={showPasswordIcon}
                    onPress={() => this.onPressEye()} 
                    />
                </View>
            </View>
        );
    }
}
export { PasswordInput };

const styles = StyleSheet.create({
    container:{
        height:51,
        width : "100%",
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'flex-end',
        borderBottomWidth:1
    },
    inputContainer:{
        height:51,
        // width:"80%",
        marginBottom:0
    },
    inputStyle:{
        borderBottomWidth:0,
        height:34
    },
    eyeContainer:{
        position:"absolute",
        right:-10,
        // top:7,
        bottom:0,
        // width:"20%",
        height:34,
    
        }
});

