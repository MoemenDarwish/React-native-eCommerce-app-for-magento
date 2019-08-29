import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import I18n from '../../i18n';
import { AppText } from '../AppText';
import { COLORS } from '../../common';


class NetStatus extends Component {


    state = {
        isConnected: null
    }

    handleConnectivityChange = (isConnected) => {
        this.setState({ isConnected });
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    render() {
        const { isConnected } = this.state;
        return (
            !isConnected ?
                <View style={styles.container}>
                    <AppText style={styles.statusText} >{I18n.t('internetStatus')}</AppText>
                </View> : null
        );
    }
}




export default NetStatus;


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'red',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
    },
    statusText: {
        color: COLORS.text_light,
        fontWeight: 'bold',
        padding: 5
    },

})