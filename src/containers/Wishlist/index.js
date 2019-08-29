import React, { Component } from 'react';
import { View, FlatList,  RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    list_wishlist, empty_wishlist, remove_from_wishlist, handle_local_wishlist,
} from '../../redux/actions'
import { WishListItem, Button, EmptyScreen } from '../../components';
import I18n from '../../i18n';
import styles from "./styles";
import { ICONS } from '../../common';


class WishList extends Component {

    constructor(props) {
        super(props);
        this.listWishlist = this.listWishlist.bind(this);
        this.removeFromWishlist = this.removeFromWishlist.bind(this);
        this.state = {
            refreshing: false
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: I18n.t('myWishlist'),
        }
    }

    componentDidMount() {
        this.listWishlist();
    }

    listWishlist = (refreshing) => {
        const { user } = this.props;
        if (user) {
            this.props.list_wishlist(user.id, refreshing);
        }

    }

    removeFromWishlist = (item) => {
        const { user, remove_from_wishlist, handle_local_wishlist } = this.props;
        if (user) {
            remove_from_wishlist({ customer_id: user.id, product_id: item.id });
        } else {
            handle_local_wishlist({ product: item, action: "remove" })
        }
    }


    renderItem = ({ item }) => {
        const { navigation } = this.props;
        return <WishListItem
            product={item}
            navigation={navigation}
            removeItem={() => this.removeFromWishlist(item)}
        />
    }


    emptyWishlist = () => {
        const { user, handle_local_wishlist, empty_wishlist } = this.props;
        if (user) {
            empty_wishlist(user.id);
        } else {
            handle_local_wishlist({ action: "empty" })
        }

    }
    render() {
        const { wishlist, isFetching, user, navigation } = this.props;
        if (wishlist.length === 0) {
            return <EmptyScreen name={ICONS.heart_filled} message={I18n.t("emptyWishlistMessage")} navigation={navigation} title={I18n.t("continueShopping")} onPress={() => navigation.navigate("HomeScreen")} />

        }
        else {
            return (
                <View style={styles.container} >
                    <FlatList
                        contentContainerStyle={styles.listStyle}
                        showsVerticalScrollIndicator={false}
                        data={wishlist}
                        renderItem={this.renderItem}
                        keyExtractor={item => JSON.stringify(item.id)}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={() => this.listWishlist(true)}
                            />
                        }
                    />
                    {
                        wishlist.length > 0 &&
                        <View style={styles.emptyAllContainer} >
                            <Button
                                style={styles.emptyButton}
                                titleStyle={styles.emptyButtonText}
                                title={I18n.t('emptyWishlist')}
                                onPress={() => this.emptyWishlist()}
                            />
                        </View>
                    }
                    {/* <LoadingModal visible={isFetching} /> */}
                </View>
            );

        }
    }
}

const mapStateToProps = state => {
    const cartFetching = state.cart.isFetching;
    const wishlistFetching = state.wishlist.isFetching;
    return {
        wishlist: state.wishlist.wishlist,
        isFetching: cartFetching || wishlistFetching,
        user: state.auth.user
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        list_wishlist,
        remove_from_wishlist,
        handle_local_wishlist,
        empty_wishlist
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);