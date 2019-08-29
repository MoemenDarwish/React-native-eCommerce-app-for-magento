import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import {  OrderProduct, EmptyScreen } from '../../components'
import styles from "./styles"
import { OrderCard } from '../../components/Orders/OrderCard'
import I18n from '../../i18n'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { order_list } from '../../redux/actions'
import { ICONS } from '../../common/Icons'



class Orders extends Component {
  static navigationOptions = () => {
    return {
      title: I18n.t("myOrders"),

    }
  }

  componentDidMount() {
    this.fetchOrders()
  }

  fetchOrders = () => {
    const { user, order_list } = this.props;
    order_list(user.id)
  }

  renderOrderItem = ({ item }) => {
    return <OrderCard navigation={this.props.navigation} order={item} />
  }

  renderProductItem = ({ item }) => {
    return <OrderProduct product={item} navigation={this.props.navigation} />
  }

  render() {
    const { navigation, orders } = this.props
    if (orders.length === 0) {
      return <EmptyScreen name={ICONS.order} message={I18n.t("emptyOrdersMessage")}
        navigation={navigation}
        title={I18n.t("continueShopping")}
        onPress={() => navigation.navigate("HomeScreen")} />

    } else {
      return (
        <View style={styles.container}>
          <View style={styles.ordersList}>
            <FlatList
              contentContainerStyle={{ paddingVertical: 10 }}
              data={orders}
              renderItem={this.renderOrderItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => JSON.stringify(item.id)}
            />
          </View>

        </View>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    orders: state.order.orders,
    isFetching: state.addresses.isFetching,

  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    order_list
  }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
