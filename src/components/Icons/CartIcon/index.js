import React, { Component } from 'react';
import { StyleSheet,  TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ICONS, COLORS } from '../../../common';
import PropTypes from 'prop-types';
import { navigateToCart } from '../../../navigation/Navigator';
import { IconWithBadge } from '../IconWithBadge';

class CartIcon extends Component {
    moveToCart = () => {
        const { navigation } = this.props;
        navigateToCart(navigation);
    }
    render() {
        const { count, disabled, color } = this.props;
        return <TouchableOpacity onPress={this.moveToCart} disabled={disabled} >
            <IconWithBadge badgeCount={count} name={ICONS.cart} size={25} color={color} />
        </TouchableOpacity>
    }

}

CartIcon.proptypes = {
    style: PropTypes.any,
    navigation: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        count: state.cart.count
    }
}

const CartIconContainer = connect(mapStateToProps)(CartIcon);

export { CartIconContainer as CartIcon };
const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notification: {
        position: 'absolute',
        right: 5,
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        width: 18,
        height: 18,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 0, 0,0.8)'
    },
    notificationText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: COLORS.text_light
    }
})