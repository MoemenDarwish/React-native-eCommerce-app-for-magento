import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { ProductPrice } from "../ProductPrice";
import { ProductName } from "../ProductName";
import { CartPlusIcon, PressedIcon } from "../Icons";
import { ICONS } from "../../common";
import {navigateToProduct} from "../../navigation/Navigator";
import styles from './styles'
class WishListItem extends Component {

    render() {
        const { product, navigation, removeItem } = this.props;
        const { sale, name, price, id } = product;
        let isSale = sale ? sale.active == 'true' : false;
        return (

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.container}
                onPress={() => navigateToProduct(navigation, { name, id })}
            >

                {/* section for Product Details */}
                <View style={styles.prodcutDetails}>

                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: product.image }}
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
                            {/* <View style={styles.iconsContainer}> */}

                                    <CartPlusIcon
                                        style={styles.icon}
                                        product={product}
                                        navigation={navigation}
                                    />
                                    <PressedIcon
                                        activeOpacity={0.1}
                                        name={ICONS.delete}
                                        style={[styles.controlBarIcon]}
                                        onPress={() => removeItem()}
                                    />
                            {/* </View> */}

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

export { WishListItem };

