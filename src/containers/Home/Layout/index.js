import React, { Component } from 'react';
import { } from 'react-native';
import Banner from './Banner';
import Grid2 from './Grid2';
import Grid3 from './Grid3';
import CategorySlider from './CategorySlider';
import Swiper from './Swiper';
import ProductSlider from '../../../components/ProductSlider';



const Layout = ({ row, navigation }) => {
    switch (row.rowType) {
        case "banner":
            return <Banner row={row} navigation={navigation} />;
        case "image_grid_2":
            return <Grid2 row={row} navigation={navigation} />;
        case "image_grid_3":
            return <Grid3 row={row} navigation={navigation} />;
        case "mini_swiper":
            return <CategorySlider row={row} navigation={navigation} />;
        case "swiper":
            return <Swiper row={row}  navigation={navigation} />;
        case "products":
        case "category_products":
            return <ProductSlider row={row} navigation={navigation} />
        default:
            return null;
    }


}

export default Layout;