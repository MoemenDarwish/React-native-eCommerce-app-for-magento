
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormInput, Button } from '../../components';
import I18n from "../../i18n"
import { ICONS } from '../../common';
import { isEmpty } from "validator";
import {  authValidation } from '../../utils/validation';
import styles from './styles';
import { registerWithEmail } from '../../redux/actions';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            error: {}
        }
    }

    componentDidMount() {
        // this.firstNameFocus();
    }

    firstNameFocus = () => {
        this.refs.firstname.focus();
    }

    onPressRegister = () => {
        const {firstname, lastname, email, password } = this.state;
        const { cart_ids, wishlist_ids, registerWithEmail, navigation } = this.props;
        const valid_form = authValidation({ email, password });
        if (!valid_form.valid) {
            this.setState({ error: valid_form.error })
        } else {
            const data = {firstname, lastname, email, password, cart_ids, wishlist_ids };
            registerWithEmail(data, navigation)
        }
    }
    render() {
        const { error, email, password, firstname, lastname } = this.state;
        const disabledButton = [firstname, lastname, email, password].some(i => isEmpty(i, { ignore_whitespace: true }))
        return (
            <View>
                <FormInput
                    ref={"firstname"}
                    title={I18n.t("firstName")}
                    iconName={ICONS.profile}
                    value={firstname}
                    onChangeText={firstname => this.setState({ firstname })}
                    error={error && error.firstname}
                    returnKeyType={"next"}
                    onSubmitEditing={() => this.refs.lastname.focus()}
                    enablesReturnKeyAutomatically
                    maxLength={20}
                />

                <FormInput
                    ref={"lastname"}
                    title={I18n.t("lastName")}
                    iconName={ICONS.profile}
                    value={lastname}
                    onChangeText={lastname => this.setState({ lastname })}
                    error={error && error.lastname}
                    returnKeyType={"next"}
                    onSubmitEditing={() => this.refs.email.focus()}
                    enablesReturnKeyAutomatically
                    maxLength={20}
                />
                <FormInput
                    ref={"email"}
                    title={I18n.t("email")}
                    iconName={ICONS.email}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    error={error && error.email}
                    keyboardType={"email-address"}
                    returnKeyType={"next"}
                    onSubmitEditing={() => this.refs.password.focus()}
                    enablesReturnKeyAutomatically
                />

                <FormInput
                    ref={"password"}
                    title={I18n.t("password")}
                    iconName={ICONS.lock}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    error={error && error.password}
                    secureTextEntry={true}
                    maxLength={40}
                    returnKeyType={"done"}
                    onSubmitEditing={disabledButton ? null : this.onPressRegister}
                    enablesReturnKeyAutomatically

                />
                <Button
                    disabled={disabledButton}
                    title={I18n.t("register").toUpperCase()}
                    style={[styles.buttonStyle, { marginTop: 10 }]}
                    titleStyle={styles.buttonText}
                    onPress={this.onPressRegister}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart_ids: state.cart.cart_ids,
        wishlist_ids: state.wishlist.wishlist_ids
    }
}
const mapDitpatchToProps = dispatch => {
    return bindActionCreators({
        registerWithEmail
    }, dispatch)
}

export default connect(mapStateToProps, mapDitpatchToProps)(Register)
