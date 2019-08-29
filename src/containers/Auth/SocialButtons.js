import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { GraphRequest, GraphRequestManager, AccessToken, LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { socialLogin } from '../../redux/actions';
import I18n from '../../i18n';
import { Button } from '../../components';
import { toast } from '../../utils/Toast';
import { COLORS, FONTS } from '../../common';
let fbPermissionList = ["email", "public_profile", "user_friends"];

class SocialButtons extends Component {

    constructor(props) {
        super(props);
        this.loginWithGoogle = this.loginWithGoogle.bind(this);
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
        this.configureGoogleSignIn = this.configureGoogleSignIn.bind(this);
        this.responseFbInfoCallback = this.responseFbInfoCallback.bind(this);
    }

    componentDidMount() {
        this.configureGoogleSignIn();
    }

    configureGoogleSignIn() {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            // webClientId: "309161037425-eddfjn2niq3qagq2ad02bcdidi3qus03.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: false,

        });
    }

    loginWithGoogle = async () => {
        const { navigation, socialLogin, cart_ids, wishlist_ids } = this.props;
        try {
            GoogleSignin.hasPlayServices();
            await GoogleSignin.signIn().then(data => {
                const userData = {
                    firstname: data.user.givenName,
                    lastname: data.user.familyName,
                    email: data.user.email,
                    avatar: data.user.photo,
                    cart_ids,
                    wishlist_ids
                }
                socialLogin(userData, navigation);
            });
        } catch (error) {
            console.log(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // toast('cancelled', { type: 'error' });
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation in progress already
                // toast('in progress', { type: 'error' });
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // toast('play services not available or outdated', { type: 'error' });
            } else {
                // toast('Something went wrong', error.toString(), { type: 'error' });
            }

        }
    }


    responseFbInfoCallback = async (error, result) => {
        const { navigation, socialLogin, cart_ids, wishlist_ids } = this.props;
        if (error) {
            console.log(error)
        } else {
            const data = {
                firstname: result.first_name,
                lastname: result.last_name,
                email: result.email,
                avatar: (result && result.picture) ? result.picture.data.url : null,
                cart_ids,
                wishlist_ids
            }
            socialLogin(data, navigation);
        }
    }

    loginWithFacebook() {
        LoginManager.logInWithPermissions(fbPermissionList).then(result => {
            if (!result.isCancelled) {
                AccessToken.getCurrentAccessToken().then(data => {
                    const infoRequest = new GraphRequest(
                        '/me',
                        {
                            accessToken: data.accessToken.toString(),
                            parameters: {
                                fields: {
                                    string: 'email,name, first_name, last_name, picture'
                                }
                            }
                        },
                        this.responseFbInfoCallback,
                    );
                    // Start the graph request.
                    new GraphRequestManager().addRequest(infoRequest).start();
                });
            }

        });
    }



    render() {
        return (
            <View style={styles.socialView}>
                <Button
                    title={I18n.t('facebook')}
                    titleStyle={styles.buttonText}
                    style={styles.fbButton}
                    onPress={this.loginWithFacebook}
                />
                <Button
                    title={I18n.t('google')}
                    titleStyle={styles.buttonText}
                    style={styles.googleButton}
                    onPress={this.loginWithGoogle}
                />
            </View>
        );
    }
}


SocialButtons.propTypes = {
    navigation: PropTypes.object.isRequired,
    nextScreen: PropTypes.object
}


const mapStateToProps = state => {
    return {
        auth: state.auth,
        cart_ids: state.cart.cart_ids,
        wishlist_ids: state.wishlist.wishlist_ids
    }
};

mapDispatchToProps = dispatch => {
    return bindActionCreators({
        socialLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialButtons);


const styles = StyleSheet.create({
    socialView: {
        width: '100%',
        alignSelf: 'center',
        marginVertical:20
    },
    fbButton: {
        backgroundColor: COLORS.facebook,
        height: 40,
        borderRadius: 5,
        marginBottom: 10

    },
    googleButton: {
        height: 40,
        borderRadius: 5,
        backgroundColor: COLORS.google,
    },
    buttonText: {
        ...FONTS.semiBold
    }
})