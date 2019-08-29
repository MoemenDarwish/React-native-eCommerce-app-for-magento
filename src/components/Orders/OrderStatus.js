
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ICONS, COLORS } from '../../common';
import { AppIcon } from '../Icons';
import I18n from '../../i18n'
import { AppText } from '../AppText';

const secondIndicatorStyles = {
    stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: COLORS.main,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: COLORS.main,
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: COLORS.main,
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: COLORS.main,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: COLORS.main
}


// const getStepIndicatorIconConfig = ({ position, stepStatus }) => {
//     const iconConfig = {
//         name: 'feed',
//         color: stepStatus === 'finished' ? '#666' : '#fff',
//         size: 15,
//     };
//     switch (position) {
//         case 0: {
//             iconConfig.name = ICONS.approved;
//             break;
//         }
//         case 1: {
//             iconConfig.name = ICONS.Processing;
//             break;
//         }
//         case 2: {
//             iconConfig.name = ICONS.Shipping;
//             break;
//         }
//         case 3: {
//             iconConfig.name = ICONS.delivered;
//             break;
//         }
//         default: {
//             break;
//         }
//     }
//     return iconConfig;
// };
class OrderStatus extends Component {

    render() {
        const { style, orderStatus } = this.props
        console.log('Status: ' + JSON.stringify(this.props));
        if(orderStatus == 5){
            return (
                <View style={[styles.container, style]}>
                    <AppText style={{color:COLORS.google, textAlign:"center", fontWeight:"bold", fontSize:17}}>
                        {I18n.t("canceled")}
                    </AppText>
                </View>
            );
        }
        else{
            return (
                <View style={[styles.container, style]}>
                    <View style={styles.stepIndicator}>
                        <StepIndicator
                            stepCount={4}
                            //renderStepIndicator={this.renderStepIndicator}
                            customStyles={secondIndicatorStyles}
                            currentPosition={this.props.orderStatus}
                            labels={[I18n.t("pending"), I18n.t("processing"), I18n.t("shipping"), I18n.t("delivered")]}
                        />
                    </View>
                </View>
            );
        }
        
    }


    // renderStepIndicator = params => (
    //     <Icon {...getStepIndicatorIconConfig(params)} />
    // );
}


export { OrderStatus };

const styles = StyleSheet.create({
    container: {
    },
    stepIndicator: {
    },

});