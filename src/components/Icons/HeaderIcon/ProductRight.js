

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, StyleSheet, AsyncStorage } from 'react-native';
import { COLORS } from '../../../common';
import { CartIcon } from '../index';
import { ShareIcon } from '../ShareIcon';



class ProductRight extends Component {
    render() {
        const {navigation,product} = this.props;
        return (
            <View style={styles.container} >
                <CartIcon navigation={navigation} color={COLORS.header_titles_icons} />
                <ShareIcon url={product.url} message={product.share_Message} title={product.name}
                    color={COLORS.header_titles_icons} />
            </View>
        );
    }
}


const mapStateToProps = state=>{
    return{
        product : state.product.product
    }
}   

export default connect(mapStateToProps)(ProductRight); 


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})