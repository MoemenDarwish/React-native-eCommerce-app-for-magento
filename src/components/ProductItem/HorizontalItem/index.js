import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
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
import {navigateToProduct} from '../../../navigation/Navigator';


class HorizontalItem extends Component {
    render() {
        const { product, navigation } = this.props;
        const { sale, name, rating, price } = product;
        let isSale = sale ? sale.active == 'true' : false;
        let isRated = rating ? rating.active : false;
        return (
            <TouchableOpacity 
                activeOpacity={0.8}
                style={styles.container}
                onPress={ ()=> navigateToProduct(navigation,product) }>

                    <View style={styles.imageContainer} >
                        <Image
                            style={styles.image}
                            source={{ uri: product.image }}
                            resizeMode={"contain"} />
                        {isSale && <SaleRate value={sale.value} style={styles.saleRate} />}
                    </View>
                {/* section for Product Details */}
                <View style={styles.prodcutDetails} >

                    <View style={styles.detialsProduct}>
                        <ProductName style={styles.productname} textStyle={styles.nameText} name={name} />
                         <RateViewer style={styles.rateViewer} rate={ isRated  ? rating : null} />
                        <ProductPrice
                            style={styles.productPrice}
                            totalPrice={price} sale={sale} 
                            textStyle = {[styles.priceText, styles.discountPriceText]}
                            />
                    </View>

                    <View style={styles.controlBar}>
                    <ShareIcon
                        style={styles.controlBarIcon}
                        message={product.share_Message}
                        url={product.url}
                        title={name} />

                    <WishListIcon 
                        style={styles.controlBarIcon} 
                        product={product}
                        navigation={navigation}
                        favorite={product.isWishlist || false} 
                    />
                                        <CartPlusIcon 
                        style={styles.controlBarIcon}
                        product={product}
                        navigation={navigation}
                        />
                </View>

                </View>

                {/* section for controlBar */}
            
               
            </TouchableOpacity>

        );
    }
}

export default HorizontalItem;