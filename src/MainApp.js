import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import OneSignal from 'react-native-onesignal';
import Navigation from './navigation';
import NetStatus from './components/NetStatus';
import Toast from './components/Toast';
import {showToast} from './redux/actions';
import { LoadingModal } from './components';
import { COLORS } from './common';
import { one_signal_key } from './Configuration';


class MainApp extends Component {
    // constructor(properties) {
    //     super(properties);
    //     OneSignal.init(one_signal_key);
    
    //     OneSignal.addEventListener('received', this.onReceived);
    //     OneSignal.addEventListener('opened', this.onOpened);
    //     OneSignal.addEventListener('ids', this.onIds);
    //   }
    
    //   componentWillUnmount() {
    //     OneSignal.removeEventListener('received', this.onReceived);
    //     OneSignal.removeEventListener('opened', this.onOpened);
    //     OneSignal.removeEventListener('ids', this.onIds);
    //   }
    
    //   onReceived(notification) {
    //     console.log("Notification received: ", notification);
    //   }
    
    //   onOpened(openResult) {
    //     console.log('Message: ', openResult.notification.payload.body);
    //     console.log('Data: ', openResult.notification.payload.additionalData);
    //     console.log('isActive: ', openResult.notification.isAppInFocus);
    //     console.log('openResult: ', openResult);
    //   }
    
    //   onIds(device) {
    //     console.log('Device info: ', device);
    //   }
    

  


    render() {
        const {showToast, loading} = this.props;
        return (
            // <SafeAreaView style={{ flex: 1, }}   forceInset={{bottom : "never"}} >
                <View style={{ flex: 1 }} >
                    
                    <StatusBar barStyle="light-content"   backgroundColor={COLORS.main} />
                    <Navigation  screenProps={{ toast : (message)=> showToast(message) }} />
                    <Toast  />
                    <NetStatus />
                    <LoadingModal visible={loading} />
                </View>
            //  </SafeAreaView>
        )

    }
}

const mapStateToProps = state=>{
    return{
        message : state.toast.message,
        loading : state.loading.overlay_loading  ,
        user : state.auth.user
    }
}

const mapDispatchToProps = dispatch=>{
    return bindActionCreators({
        showToast
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);