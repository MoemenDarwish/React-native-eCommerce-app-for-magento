import React, { Component } from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AppText } from '../AppText'
import I18n from '../../i18n'
import { COLORS } from '../../common';
import {navigateToProduct} from "../../navigation/Navigator"
class OrderProductCard extends Component {
  render() {
    const { product, navigation } = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={() => navigateToProduct(navigation, product)}
      >
        <View style={styles.body}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{ uri: product.image }}
          />
          <View style={styles.details}>
            <AppText numberOfLines={2} style={styles.name}>{product.name}</AppText>
            <View style={styles.qtySku}>
              <AppText style={styles.qty}>{I18n.t("quantity")} {product.quantity}</AppText>
              <View style={styles.totalPrice}>
                <AppText>{I18n.t("totalPrice")}</AppText>
                <AppText style={styles.price}>{product.total}</AppText>
              </View>
            </View>
          </View>
        </View>

      </TouchableOpacity>
    )
  }
}

export { OrderProductCard }

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingVertical:10,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: COLORS.background,
    shadowOpacity: 0.1,
    borderWidth: 0.5,
    borderColor: COLORS.border
  },
  body: {
    flexDirection: 'row'
  },

  image: {
    width: 90,
    height: 75,
  },
  details: {
    flex: 1,
    justifyContent: 'center'
  },

  name: {
    fontWeight: '500',
    fontSize: 15,
    color: COLORS.main_text,
    paddingHorizontal:10,
    paddingVertical:5
  },
  totalPrice: {
flexDirection:'row',
  },
  price: {
    fontWeight: 'bold',
    color: COLORS.main_text,
    marginLeft:10
  },
  qtySku: {
    marginHorizontal: 10,

  },
  qty: {
    fontWeight: '400',
    marginBottom: 5,
    textAlign: "left"
  }

})
