
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FormInput, Button, AppText } from '../../components';
import I18n from "../../i18n"
import { ICONS } from '../../common';
import { navigateToForget } from '../../navigation/Navigator';
import { isEmpty, isEmail } from "validator";
import { loginValidation, authValidation } from '../../utils/validation';
import styles from './styles';
import { loginWithEmail } from '../../redux/actions';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: {}
        }
    }

    componentDidMount() {
        // this.emailFocus();
    }

    emailFocus = () => {
        this.refs.email.focus();
    }

    onPressLogin = () => {
        const { email, password } = this.state;
        const { cart_ids, wishlist_ids, loginWithEmail, navigation } = this.props;
        const valid_form = authValidation({ email, password });
        if (!valid_form.valid) {
            this.setState({ error: valid_form.error })
        } else {
            const data = { email, password, cart_ids, wishlist_ids };
            loginWithEmail(data, navigation)
        }
    }
    render() {
        const { error, email, password } = this.state;
        const disabledButton = isEmpty(email, { ignore_whitespace: true }) || isEmpty(password, { ignore_whitespace: true })
        return (
            <View  >
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
                    containerStyle={{ marginBottom: 0 }}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    error={error && error.password}
                    secureTextEntry={true}
                    maxLength={40}
                    returnKeyType={"done"}
                    onSubmitEditing={disabledButton ? null : this.onPressLogin}
                    enablesReturnKeyAutomatically

                />
                <View style={styles.forgetPassword} >
                    <AppText
                        style={styles.forgetPasswordText}
                        onPress={() => navigateToForget(this.props.navigation)}
                    >{I18n.t("forgetPassword")}</AppText>
                </View>
                <Button
                    disabled={disabledButton}
                    title={I18n.t("login").toUpperCase()}
                    style={styles.buttonStyle}
                    titleStyle={styles.buttonText}
                    onPress={this.onPressLogin}
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
        loginWithEmail
    }, dispatch)
}

export default connect(mapStateToProps, mapDitpatchToProps)(Login)
