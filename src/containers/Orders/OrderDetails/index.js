import React, { Component } from 'react'
import {
  View,
  ScrollView,
  FlatList,
} from 'react-native'
import styles from "./styles";
import { AppText,  OrderStatus ,Row} from '../../../components'
import { OrderProductCard } from '../../../components/Orders/OrderProductCard'
import I18n from '../../../i18n';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { order_details } from '../../../redux/actions'


class OrderDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
  }

  static navigationOptions = () => {
    return {
      title: I18n.t("orderDetails"),

    }
  }

  componentDidMount() {
    this.fetchOrderDetails()
  }

  fetchOrderDetails = () => {
    const { user, order_details } = this.props;
    const order_id = this.props.navigation.getParam('id',null)
    if(order_id){
      order_details(order_id);
    }
  }


  renderOrderProductCard = ({ item }) => {
    return <OrderProductCard product={item} navigation={this.props.navigation} />
  }
  render() {
    const {orderDetails} = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <AppText style={styles.orderNoText} >#{orderDetails.order_no}</AppText>
        <OrderStatus currentStatus={2} style={{  marginTop: 15 }} navigation={this.props.navigation} orderStatus={orderDetails.status} />
        <View style={styles.details}>
          <View style={styles.rows} >
            <Row rowKey={I18n.t("orderNo")} value={orderDetails.order_no} />
            {/* <Row rowKey={I18n.t("status")} value={orderDetails.status} /> */}
            <Row rowKey={I18n.t("orderPrice")} value={orderDetails.total} />
            <Row rowKey={I18n.t("date")} value={orderDetails.created_at} />
          </View>
          <View  >
            <View style={styles.rows} >
              <Row rowKey={I18n.t("total")} value={orderDetails.total_price} />
              <Row rowKey={I18n.t("paymentMethod")} value={orderDetails.payment_method} />
            </View>
            <View>
              <View style={styles.shipInfoView} >
                <AppText style={styles.shipInfoText} >{I18n.t('shippingInfo')}</AppText>
                <AppText numberOfLines={3} style={styles.shipInfo}><AppText style={styles.shipInfoText} >{I18n.t('ad')}</AppText> {orderDetails.shipping_address}</AppText>
                <AppText numberOfLines={3} style={styles.shipInfo}><AppText style={styles.shipInfoText} >{I18n.t('tl')}</AppText> {orderDetails.telephone}</AppText>

              </View>
            </View>
          </View>


        </View>

        <AppText style={styles.itemsDetails}>{I18n.t('itemsDetails')}</AppText>

        <FlatList
          contentContainerStyle={{ paddingTop: 10, alignItems: 'center' }}
          data={orderDetails.line_items}
          renderItem={this.renderOrderProductCard}
          keyExtractor={item => JSON.stringify(item)}
        />

        {/* <Button
          title={"Cancel Order"} titleStyle={styles.cancelText}
          style={styles.cancelButton}
          onPress={() => alert('Remove It')}
        /> */}
      </ScrollView>

    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    orderDetails: state.order.orderDetails,
    isFetching: state.addresses.isFetching,

  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    order_details,
  }, dispatch)

}
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
