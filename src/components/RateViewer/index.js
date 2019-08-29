import React from 'react';
import {View, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating';
import { AppText } from '../AppText';
import { COLORS } from '../../common';
import PropTypes from 'prop-types';

const RateViewer = ({rate, size, style})=>{
    return(
        <View style={[styles.container, style]} >
            <StarRating 
                disabled={true}
                maxStars={5}
                rating={ rate &&  rate.average}
                containerStyle={styles.starsStyle}
                starSize={size || 15 }
                fullStarColor={COLORS.filledStar}
            />
            <AppText style={styles.usersNumber} >
                {`(${ (rate && rate.count) || 0 })`}
            </AppText>

        </View>
    );
}

RateViewer.propTypes = {
    rate : PropTypes.object,
    size : PropTypes.number,
    style : PropTypes.any
}

export {RateViewer};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal : 5,
        flexDirection:'row',
        alignItems:'center',
    },
    starsStyle:{
        marginRight : 10
    },
    usersNumber:{
        color:'#333',
        fontSize:12
    },
  
});