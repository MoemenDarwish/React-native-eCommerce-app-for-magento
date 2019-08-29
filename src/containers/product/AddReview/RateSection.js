import React, { Component } from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import StarRating from 'react-native-star-rating';
import { COLORS } from '../../../common';
import { AppText } from '../../../components';




class RateSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: null,
        }
    }

    onPressStar = (rating) => {
        this.setState({ rating });
        this.props.onRate(rating);
    }

    render() {
        const { option, submitted } = this.props;
        const { rating } = this.state;
        const error = submitted && !rating
        return (
            <View style={styles.container} >
                <AppText style={[styles.rateTitle, { color: error ? 'red' : COLORS.text_dark }]}
                >{option.title}</AppText>

                <StarRating
                    rating={rating}
                    disabled={false}
                    fullStarColor={COLORS.filledStar}
                    containerStyle={styles.starsContainer}
                    maxStars={5}
                    reversed={I18nManager.isRTL}
                    starSize={25}
                    selectedStar={rating => this.onPressStar(rating)}
                />
            </View >
        )
    }
}

export { RateSection };


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width:"100%",
        paddingHorizontal:15,
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 10,
  
    },
    starsContainer: {
        alignSelf: 'center'
    },
    rateTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 15,
    }
})