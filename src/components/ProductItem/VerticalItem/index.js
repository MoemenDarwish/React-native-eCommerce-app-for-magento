import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import {
    ImagePlaceholder,
    SaleRate,
    WishListIcon,
    ProductName,
    RateViewer,
    ProductPrice,
    ShareIcon,
    CartPlusIcon
} from '../../index';
import { navigateToProduct } from '../../../navigation/Navigator';


class VerticalItem extends Component {
    render() {
        const { product, style, navigation } = this.props;
        const { sale, name, rating, price } = product;
        let isSale = sale ? sale.active == 'true' : false;
        let isRated = rating ? rating.active : false;
        return (
            <TouchableOpacity
                style={[styles.container, style]} activeOpacity={0.6}
                onPress={() => navigateToProduct(navigation, product)}
            >
                <WishListIcon
                    style={styles.wishlist}
                    product={product}
                    navigation={navigation}
                />
                <View style={styles.imageContainer} >
                    <Image
                        style={styles.image}
                        source={{ uri: product.image }}
                        resizeMode={"contain"}
                    >
                    </Image>
                    {isSale && <SaleRate value={sale.value} style={styles.saleRate} />}

                </View>

                <ProductName style={styles.productname} name={name} />
                <RateViewer style={styles.rateViewer} rate={isRated ? rating : null} />
                <ProductPrice style={styles.productPrice} totalPrice={price} sale={sale} />
                <View style={styles.controlBar}>
                    <ShareIcon
                        style={styles.controlBarIcon}
                        message={product.share_Message}
                        url={product.url}
                        title={name} />
                    <CartPlusIcon
                        style={styles.controlBarIcon}
                        product={product}
                        navigation={navigation}
                    />

                </View>

            </TouchableOpacity>
        );
    }
}


export default VerticalItem;