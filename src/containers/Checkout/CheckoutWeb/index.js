import React, { Component } from 'react';
import { View } from 'react-native';
import {  LoadingModal } from '../../../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkout_title, order_finish, cancel_checkout } from '../../../redux/actions';
import CheckoutHeader from './Header';
import { WebView } from 'react-native-webview';




class CheckoutWeb extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            // headerLeft: <Back navigation={navigation} />,
            // headerTitle : <CheckoutTitle />,
            header: null
        }
    }

    state = {
        title: "",
        canGoBack: false,
        loading: false
    }



    onMessage = (message) => {
        this.props.order_finish(message, this.props.navigation);
    }

    onNavigationStateChange = (state) => {
        if (state.title !== this.state.title  ) {
            setTimeout(() => {                
                this.setState({ title: state.title, canGoBack: state.canGoBack, loading: false })
            }, 1000);
        }
    }

    onPressBack = () => {
        const { user, navigation, cancel_checkout } = this.props;

        if (this.state.canGoBack) {
                this.setState({ loading: true });
                this.myWebView.goBack();
        } else {
            cancel_checkout({ customer_id: user.id }, navigation)
        }
    }


    render() {
        const { title, loading } = this.state;
        console.log(this.state);
        return (
            <View style={{ flex: 1 }}  >
                <CheckoutHeader title={title} onPressBack={this.onPressBack} />
                <WebView
                    ref={(webview) => {
                        this.myWebView = webview;
                    }}
                    source={{ uri: this.props.checkout_url }}
                    onMessage={(event) => this.onMessage(event.nativeEvent)}
                    //injectedJavaScript="window.postMessage = String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');"
                    automaticallyAdjustContentInsets={true}
                    // renderLoading={() => <Spinner />}
                    onNavigationStateChange={this.onNavigationStateChange}
                    scalesPageToFit={true}
                    startInLoadingState={true}
                    javaScriptEnabled={true}
                    bounces={false}



                />

                <LoadingModal visible={loading} />


            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        checkout_url: state.cart.checkout_url,
        user: state.auth.user,
        title: state.cart.title,
        canGoBack: state.cart.canGoBack,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        checkout_title,
        order_finish,
        cancel_checkout
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutWeb);