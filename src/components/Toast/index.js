import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { connect } from 'react-redux';
import styles from './styles';



/**
 * toast(message,config);
 * config = {
 *  duration : 1000,
 *  type : 'success' || 'error' ,
 *  style : {}
 * }
 */
class Toaster extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.toaster.message && (this.props.toaster.message !== prevProps.toaster.message)) {
            this.show();
        }
    }

    show = () => {
        const { message } = this.props.toaster
        this.refs.toast.show(message);
    }
    shouldComponentUpdate(nextProps){
        return (
            (nextProps.toaster.message !== this.props.toaster.message) &&
            (nextProps.toaster.message.length > 0)
         );
    }


    getToastType = ()=>{
        const { config } = this.props.toaster;
        if( config && config.type){
            return config.type;
        }else{
            return null;
        }

    }

    render() {

        const { config } = this.props.toaster;
        let toastType = this.getToastType();
        return (
            <Toast
                ref="toast"
                fadeInDuration={500}
                fadeOutDuration={3000}
                textStyle={styles.toastText}
                position={"bottom"}
                positionValue = {150}
                opacity={0.9}
                style={[styles.defultStyle, styles[toastType] ]}
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        toaster: state.toast.toaster
    }
}


export default connect(mapStateToProps)(Toaster);