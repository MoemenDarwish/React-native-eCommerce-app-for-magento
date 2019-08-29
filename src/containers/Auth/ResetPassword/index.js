import React, { Component } from 'react';
import { View } from 'react-native';
import { AppText, Button, PasswordInput } from '../../../components';
import I18n from '../../../i18n';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset_password } from '../../../redux/actions'
import { toast } from '../../../utils/Toast';
import { resetValidation } from '../../../utils/validation';
import { COLORS } from '../../../common';
import LinearGradient from 'react-native-linear-gradient';

class ResetPassword extends Component {
    state = {
        oldPass: '',
        newPass: '',
        confirmPass: '',
        submitted: false
    }
    static navigationOptions = () => {
        return {
            title: I18n.t('resetPassword'),
        }
    }

    onPressResetPass = () => {
        const { oldPass, newPass, confirmPass } = this.state;
        const { user, navigation } = this.props
        const valid = resetValidation({ oldPass, newPass, confirmPass })
        if (valid.status == "valid") {

            this.props.reset_password({ oldPass, newPass, confirmPass, email: user.email, navigation })
        } else {
            toast(valid.msg)
        }
    }

    render() {
        const { oldPass, newPass, confirmPass, submitted } = this.state;
        return (
            <LinearGradient

                // start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                colors={COLORS.secondGradient} style={{ flex: 1 }} >

                <View style={styles.logo} >
                    <AppText style={styles.loginText} >{I18n.t("resetPassword")}</AppText>
                </View>

                <View style={styles.inputContainer}>
                    <PasswordInput
                        ref='oldPass'
                        required={submitted && oldPass.length == 0}
                        placeholder={I18n.t('oldPassword')}
                        value={oldPass}
                        onChangeText={oldPass => this.setState({ oldPass })}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.refs.newPass.focus(); }}
                    />
                    <PasswordInput
                        ref='newPass'
                        required={submitted && newPass.length == 0}
                        placeholder={I18n.t('newPassword')}
                        value={newPass}
                        onChangeText={newPass => this.setState({ newPass })}
                        returnKeyType="next"
                        onSubmitEditing={() => { this.refs.confirmPass.focus(); }}
                    />
                    <PasswordInput
                        ref='confirmPass'
                        required={submitted && confirmPass.length == 0}
                        placeholder={I18n.t('confirmPassword')}
                        value={confirmPass}
                        onChangeText={confirmPass => this.setState({ confirmPass })}
                        returnKeyType="done"
                        onSubmitEditing={() => this.onPressResetPass()}
                    />

                    <View style={styles.forgetButtonContainer}>

                        <Button style={styles.forgetPassButton}
                            onPress={() => this.onPressResetPass()}
                            titleStyle={styles.titleStyle}
                            title={I18n.t("resetPassword")}
                        />
                    </View>
                </View>



            </LinearGradient>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        reset_password
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);