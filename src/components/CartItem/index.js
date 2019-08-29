import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import styles from './styles'
import {
  SaleRate,
  ProductName,
  ProductPrice,
} from '../index'
import UIStepper from 'react-native-ui-stepper'

import { PressedIcon } from '../Icons'
import { ICONS, COLORS, IMAGES } from '../../common'
import { add_to_cart, remove_from_cart, delete_from_cart, handle_local_cart } from '../../redux/actions';
import {navigateToProduct} from '../../navigation/Navigator';
class CartItem extends Component {



  onIncrement = () => {
    const { product } = this.props.item;
    const { user, handle_local_cart, cart_items, add_to_cart } = this.props;
    if (user) {
      add_to_cart({ customer_id: user.id, product_id: product.id })
    } else {
      handle_local_cart({ product, cart_items, action: 'increase' })
    }
  }


  onDecrement = () => {
    const { product, qty } = this.props.item;
    const { user, remove_from_cart, handle_local_cart, cart_items } = this.props;
    if (user) {
      remove_from_cart({ customer_id: user.id, product_id: product.id })
    } else {
      if (qty == 1) {
        handle_local_cart({ product, cart_items, action: "delete" })
      } else {
        handle_local_cart({ product, cart_items, action: "decrease" })
      }
    }
  }

  onDelete = () => {
    const { product } = this.props.item;
    const { user, delete_from_cart, cart_items, handle_local_cart } = this.props;
    if (user) {
      delete_from_cart({ customer_id: user.id, product_id: product.id })
    } else {
      handle_local_cart({ product, cart_items, action: "delete" })

    }
  }

  onMaxReached = (count) => {
    alert('Maximum quantity allowed is ' + count);
    }
  render() {
    const { item, navigation } = this.props;
    const { sale, name, price, id, image, max_sale_qty } = item.product;
    let isSale = sale ? sale.active : false
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={() => navigateToProduct(navigation, {id,name})}
      >

        {/* section for Product Details */}
        <View style={styles.prodcutDetails}>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: image }}
              resizeMode={'contain'}
            />
            {isSale && <SaleRate value={sale.value} style={styles.saleRate} />}
          </View>

          <View style={styles.detialsProduct}>
            <ProductName
              style={styles.productname}
              textStyle={styles.nameText}
              name={name}
            />
            <ProductPrice
              style={styles.productPrice}
              totalPrice={price}
              sale={sale}
            />

            {/* section for controlBar */}
            <View style={styles.controlBar}>
              <View style={styles.counterContainer}>
                <UIStepper
                  key={`item--${item.product.id}`}
                  initialValue={item.qty}
                  value={item.qty}
                  onDecrement={() => this.onDecrement()}
                  onIncrement={() => this.onIncrement()}
                  maximumValue={max_sale_qty}
                  onMaximumReached={(count) => this.onMaxReached(count - 1)}
                  displayValue={true}
                  width={100}
                  height={25}
                  borderRadius={30}
                  borderWidth={0.3}
                  borderColor={"#aaa"}
                  textColor={"#333"}
                  tintColor={"#333"}
                  fontSize={16}
                  decrementImage={IMAGES.min}
                  incrementImage={IMAGES.plus}
                />
              </View>
              <View style={styles.iconsContainer}>
                <PressedIcon
                  activeOpacity={0.1}
                  name={ICONS.delete}
                  style={[styles.controlBarIcon]}
                  onPress={() => this.onDelete()}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>


    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    cart_items: state.cart.cart_items
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    add_to_cart,
    handle_local_cart,
    remove_from_cart,
    delete_from_cart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
