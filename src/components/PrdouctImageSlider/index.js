import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Swiper } from '../Swiper';
import { SaleRate } from '../SaleRate';
import { WishListIcon} from '../Icons';
import PropTypes from 'prop-types';
import {  SCREEN } from '../../common';

class ProductImageSlider extends Component {
    render() {
        const{sale, onPressItem, data, product, navigation,nextScreen}=this.props;
        let isSale = sale? sale.exist :false;
        return (
            <View>
                <Swiper 
                    dotColor={"#bbb"}
                    activeDotColor={"#777"}
                    style={styles.swiperStyle}
                    paginationStyle={ styles.paginationStyle }
                    data={data}
                    autoplay={false}
                    loop={false}                    
                    onPressItem={onPressItem}
                    height={SCREEN.HEIGHT/2}
                    />
                {isSale && <SaleRate value={sale.value}  style={styles.saleRate} />}
                <WishListIcon 
                    product={product}
                    style={styles.wishListIcon}
                    navigation={navigation}
                    nextScreen={nextScreen}
                    favorite 
                    />
            </View>
        );
    }
  
}
ProductImageSlider.propTypes = {
    style:PropTypes.object,
    sale:PropTypes.object.isRequired,
    data : PropTypes.array.isRequired,
    onPressItem : PropTypes.func.isRequired
    
    

}
export {ProductImageSlider};


const styles = StyleSheet.create({
    saleRate: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wishListIcon: {
        position: 'absolute',
        top: 20,
        right: 10,
        backgroundColor:'rgba(255,255,255,0.3)'
    },
    cartIcon: {
        position: 'absolute',
        bottom: 30,
        right: 10,
        backgroundColor:'rgba(255,255,255,0.3)'

    },
    swiperStyle:{
        paddingBottom:15,
        marginBottom:0,
        //  borderBottomWidth:1,
        backgroundColor : "#fff",
        borderColor:'#ddd'

    },
    paginationStyle:{
        // backgroundColor: COLORS.main,
        position:'absolute',
        height:20,
        bottom:-15
        
    }

})