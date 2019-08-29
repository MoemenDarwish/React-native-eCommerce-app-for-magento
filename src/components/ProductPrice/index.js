import React from 'react';
import { View ,StyleSheet} from 'react-native';
import { AppText } from '../AppText';
import I18n from '../../i18n'
import PropTypes from 'prop-types';
import { COLORS } from '../../common';

const ProductPrice = ({totalPrice,sale ,style , textStyle}) => {
    const isSale = sale ? sale.active : false;
    let price =isSale ? sale.price  : totalPrice ;
    return (
        <View style={[styles.container,style]}>
            <AppText style={[styles.price, textStyle ?  textStyle[0] : null]} >{price}</AppText>
            {
                 isSale  && 
            <AppText style={[styles.oldPrice, textStyle ?  textStyle[1] : null]} >{totalPrice}</AppText>
            }
        </View>
    );
}

ProductPrice.propTypes = {
    totalPrice : PropTypes.string.isRequired,
    sale : PropTypes.object
}
export { ProductPrice };

const styles = StyleSheet.create({

container:{
    paddingHorizontal : 5,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
},
price:{
    fontSize:15,
    fontWeight:'bold',
    textAlign:'left',

    color:COLORS.main
},
oldPrice:{
    textDecorationLine : 'line-through',
    fontSize:11.5,
    color:"#777",
    textAlign:'left',
}
});