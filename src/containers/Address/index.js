import React, { Component } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { AddressCard, PressedIcon, EmptyScreen } from '../../components';
import { ICONS } from '../../common';
import { fetchAddresses, removeAddress } from '../../redux/actions';
import { navigateToNewAddress } from '../../navigation/Navigator';
import I18n from '../../i18n';
import styles from "./styles";



class Address extends Component {

    
    static navigationOptions = () => {
        return {
            title: I18n.t('myAddress')
        }
    }

    state = {
        refreshing: false
    }

    componentDidMount() {
        this.listAddress()
    }

    listAddress = (refreshing) => {
        const { id } = this.props.user;
        this.props.fetchAddresses(id, refreshing)
    }

    _removeAddress = (address_id) => {
        const { id } = this.props.user
        this.props.removeAddress({ address_id, customer_id: id })
    }

    _editAddress = (address) => {
        navigateToNewAddress(this.props.navigation, { ...address, edit: true });
    }
    renderItem = ({ item, index }) => {
        return <AddressCard
            address={item}
            number={index + 1}
            removeAddress={() => this._removeAddress(item.id)}
            editAddress={() => this._editAddress(item)}
        />
    }
    _onRefresh = () => {
        this.listAddress(true)
    }
    render() {
        const { navigation, user, addresses } = this.props;
        if (addresses.length === 0) {
            return <EmptyScreen
                name={ICONS.addAddress}
                message={I18n.t("emptyAddressMessage")}
                navigation={navigation}
                title={I18n.t("addNewAddreess")}
                onPress={() => navigateToNewAddress(navigation, user)}
            />

        } else {
            return (
                <View style={styles.fill} >
                    <FlatList
                        style={{ flex: 1 }}
                        contentContainerStyle={styles.container}
                        data={this.props.addresses}
                        renderItem={this.renderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={address => JSON.stringify(address.id)}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh} />
                        }
                    />
                    <PressedIcon
                        style={styles.addAddress}
                        size={30} color={"#fff"}
                        name={ICONS.addAddress}
                        onPress={() => navigateToNewAddress(navigation, user)}
                    />
                </View>
            );
        }
    }

}

const mapStateToProps = state => {
    return {
        addresses: state.addresses.addresses,
        isFetching: state.addresses.isFetching,
        user: state.auth.user

    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchAddresses,
        removeAddress
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Address);