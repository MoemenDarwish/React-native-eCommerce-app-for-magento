import React, { Component } from 'react'
import { View, FlatList,  RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { list_cart, empty_cart, on_press_checkout, handle_local_cart } from '../../../redux/actions'
import I18n from '../../../i18n'
import {  Button, EmptyScreen } from '../../../components'
import CartItem from '../../../components/CartItem'
import styles from "./styles";
import { ICONS } from '../../../common';
import { navigateToLogin } from '../../../navigation/Navigator';

class MyCart extends Component {
  state = {
    refreshing: false
  }
  static navigationOptions = ({ navigation }) => {

    return {
      title: I18n.t("AHMED"),
      header: null
    }
  }

  componentDidMount() {
    this.listCart()
  }

  listCart = (refreshing) => {
    const { user } = this.props;
    if (user) {
      this.props.list_cart({ customer_id: user.id, refreshing })

    }
  }


  emptyCart = () => {
    const { user, empty_cart, handle_local_cart } = this.props;
    if (user) {
      empty_cart({ customer_id: user.id })
    } else {
      handle_local_cart({ action: "empty" })
    }
  }

  checkout = () => {
    const { user, on_press_checkout, navigation } = this.props;
    if (user) {
      on_press_checkout({ customer_id: user.id }, navigation)
    } else {
      navigateToLogin(navigation)
    }

  }

  renderItem = ({ item }) => {
    return (
      <CartItem
        navigation={this.props.navigation}
        item={item}
      />
    )
  }
  render() {
    const {  navigation, cart_items, overlay_loading } = this.props;
    if (overlay_loading && cart_items.length === 0) {
      return null;
    } else if (cart_items.length === 0) {
      return <EmptyScreen
        name={ICONS.cart}
        message={I18n.t("emptyCartMessage")}
        navigation={navigation}
        title={I18n.t("continueShopping")}
        onPress={() => navigation.navigate("HomeScreen")}
      />

    } else {
      return (
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.listStyle}
            data={cart_items}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => `item--${item.product.id}--${index}`}
            extraData={cart_items}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.listCart(true)}
              />}

          />
          <View style={styles.bottomArea}>
            {/* <View style={styles.subTotalArea}>
              <AppText style={styles.subTotalText} >{`${I18n.t('subTotal')} : `}</AppText>
              <AppText style={styles.subTotalPrice} >{`100000 ${I18n.t('currency')}`}</AppText>
            </View> */}

            <View style={styles.buttonsArea} >

              {/* <Button
                title={I18n.t('emptyCart')}
                style={[styles.buttonStyle, { backgroundColor:"#ff4765", flex:0.35 }]}
                titleStyle={styles.buttonText}
                onPress={() => this.emptyCart()}
              /> */}
              <Button
                title={I18n.t('completeOrder')}
                style={styles.buttonStyle}
                titleStyle={styles.buttonText}
                onPress={() => this.checkout()}
              />

            </View>


          </View>
        </View>

      )
    }
  }
}

const mapStateToProps = state => {
  return {
    cart_items: state.cart.cart_items,
    count: state.cart.count,
    overlay_loading: state.loading.overlay_loading,
    isFetching: state.cart.isFetching,
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      list_cart,
      on_press_checkout,
      empty_cart,
      handle_local_cart
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart)
