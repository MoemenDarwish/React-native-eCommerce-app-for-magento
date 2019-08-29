import React, { Component } from 'react'
import { View, StyleSheet, I18nManager, TouchableOpacity } from 'react-native'
import { navigateToOrderDetails } from '../../navigation/Navigator'
import I18n from '../../i18n'
import { AppText } from '../AppText';
import { COLORS, ICONS } from '../../common';
import { AppIcon } from '../Icons';


class OrderCard extends Component {
  render() {
    const { navigation, order } = this.props
    return (
      <TouchableOpacity
        onPress={() => navigateToOrderDetails(navigation,order.id)}
        activeOpacity={0.7}
        style={styles.container}>
        <View style={styles.header}>
          <View style={styles.orderNo}>
            <AppText style={styles.headerText}>{I18n.t('orderNo')}{order.order_no}</AppText>
            <AppText style={styles.price}>{order.total_price}</AppText>
          </View>
          {/* <AppText style={styles.status}>{order.status}</AppText> */}
        </View>
        <View style={styles.body}>
          <View style={styles.dateTime}>
            <AppText>{I18n.t("date")}{order.created_at}</AppText>
          </View>

          <View style={{ width: '100%', justifyContent: 'center' }}>

            <AppText style={styles.qty}>{I18n.t("quantity")}{order.qty}</AppText>
          </View>
          <AppText style={styles.paymentMethod}>{I18n.t("paymentMethod")}{order.payment_method}</AppText>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <AppText style={{ color: COLORS.main, fontWeight: 'bold' }}>
            {I18n.t('viewOrderDetails')}
          </AppText>
          <AppIcon name={ICONS.RightArrow} color={COLORS.main} size={20} />
        </View>
      </TouchableOpacity>
    )
  }
}
export { OrderCard }

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: COLORS.background,
    marginBottom: 10,
    padding: 15,
  },

  header: {
    width: '100%',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderBottomColor: COLORS.border,
    paddingBottom: 10,
    marginBottom: 10
  },
  orderNo: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,

  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.main

  },
  paymentMethod: {
    textAlign: I18nManager.isRTL ? "left" : null
  },
  qty: {
    textAlign: I18nManager.isRTL ? "left" : null
  },
  status: {
    textAlign: I18nManager.isRTL ? "left" : null
  },


  body: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
  },
  orderDetailsBt: {
    width: null,
    height: null,
    backgroundColor: null,
    alignSelf: 'flex-start'
  },

})
