

import React,{Component} from 'react';
import {View, StyleSheet, Platform, I18nManager} from 'react-native';
import { ICONS, COLORS } from '../../../common';
import { PressedIcon } from '../../../components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { cancel_checkout } from '../../../redux/actions';

class Back extends Component{ 

    render(){
        const {navigation, cancel_checkout, user} = this.props;
        const iconName = I18nManager.isRTL ? ICONS.backRight : ICONS.backLeft ;
        const iconSize = Platform.OS === 'ios' ? 35: 25;
        const iconUnderlay = Platform.OS === 'ios' ? COLORS.transparent : null;


        
        return(
            <View  style={styles.container} >
                    <PressedIcon 
                        onPress={()=> cancel_checkout({customer_id : user.id},navigation) }
                        name={iconName}
                        underlayColor={iconUnderlay}
                        color={COLORS.header_titles_icons}
                        size={iconSize} />
            </View>  
        );
    }

}

const mapStateToProps = state=>{
    return{
        user : state.auth.user,
        canGoBack : state.cart.canGoBack
    }
}

const mapDispatchToProps = dispatch=>{
    return bindActionCreators({
        cancel_checkout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Back);



const styles = StyleSheet.create({
    container:{
        flexDirection : 'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginLeft : Platform.OS == 'ios' ? -5 : 5
    }
})