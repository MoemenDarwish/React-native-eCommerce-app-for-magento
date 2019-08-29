import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from './styles';
import navStyle from "../../../navigation/styles"
import { ICONS } from '../../../common';
import I18n from "../../../i18n";
import { FormInput, Button, AppText } from '../../../components';
import { isEmail, isEmpty } from "validator";
import { forget_password } from '../../../redux/actions';

export class ForgetPassword extends Component {

    static navigationOptions = {
        headerTitle: null,
        headerRight: null,
        title: I18n.t("resetPassword"),
        headerStyle: [navStyle.authHeader, { backgroundColor: "#eee" }],
        headerTintColor: "#333"
    }

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            error: null
        }
    }

    onPressSendEmail = () => {
        const { email } = this.state;
        const { forget_password, navigation } = this.props;
        if (!isEmail(email)) {
            this.setState({ error: I18n.t("invalidMail") })
        } else {
            forget_password(email,navigation);
        }
    }


    render() {
        const { email } = this.state;
        const disabledButton = isEmpty(email, { ignore_whitespace: true })
        return (
            <LinearGradient style={styles.container} colors={["#eee", "#fff"]} >
                <StatusBar barStyle={"dark-content"} />
                <AppText style={styles.resetPassText} >{I18n.t("resetPasswordInfo")}</AppText>
                <FormInput
                    ref={"email"}
                    title={I18n.t("email")}
                    iconName={ICONS.email}
                    value={email}
                    onChangeText={email => this.setState({ email })}
                    error={this.state.error}
                    keyboardType={"email-address"}
                    returnKeyType={"next"}
                    onSubmitEditing={disabledButton ? null : this.onPressSendEmail}
                    enablesReturnKeyAutomatically
                />
                <Button
                    disabled={disabledButton}
                    title={I18n.t("sendEmail")}
                    style={styles.forgetButton}
                    onPress={this.onPressSendEmail}
                />
            </LinearGradient>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        forget_password
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(ForgetPassword)
