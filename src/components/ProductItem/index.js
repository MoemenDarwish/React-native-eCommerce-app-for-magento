import React from 'react';
import VerticalItem from './VerticalItem';
import PropTypes from 'prop-types';
import HorizontalItem from './HorizontalItem';
import {productLayouts} from '../../config/layout';

const ProductItem = ({ productLayout, product, navigation ,style})=>{

    switch(productLayout){
        case productLayouts.vertical:
            return <VerticalItem product={product} navigation={navigation} style={style}/>
        case productLayouts.horizontal:
            return <HorizontalItem product={product}  navigation={navigation} />
        default :
            return <HorizontalItem product={product}  navigation={navigation} />
    }
}


ProductItem.propTypes = {
    productLayout : PropTypes.string.isRequired,
    product : PropTypes.object.isRequired
}

export {ProductItem};

