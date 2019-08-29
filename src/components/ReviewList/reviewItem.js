import React from 'react';

import { View, StyleSheet } from 'react-native';
import StarRating from "react-native-star-rating"
import { COLORS, SCREEN } from '../../common';
import { AppText } from '../AppText'

const ReviewItem = ({ item, style, horizontal }) => {
    return (
        <View style={[styles.reviewCard, style]} >
            {/* view name and rate */}
            <View style={styles.nameRate}>
                <AppText style={styles.username}>{item.name}</AppText>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={item.rating}
                    starSize={15}
                    fullStarColor={COLORS.filledStar}
                    style={styles.starRating}
                />
            </View>
            {/* view comment */}
            <View style={[styles.comment, { minHeight: !horizontal ? 50 : null }]}>
                <AppText numberOfLines={horizontal ? 2 : 4} >{item.comment}</AppText>
            </View>
            {/* view date */}
            <View style={styles.date}>
                <AppText style={styles.dateText}>{item.date}</AppText>
            </View>
        </View>
    )
}

export default ReviewItem;

const styles = StyleSheet.create({
    reviewCard: {
        width: SCREEN.WIDTH * 0.6,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: COLORS.background,
        backgroundColor: COLORS.menu_level2,
        padding: 5

    },
    nameRate: {
        height: 25,
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },
    starRating: {
        marginRight: 10
    },
    username: {
        fontWeight: 'bold'
    },
    comment: {
        padding: 5,
        minHeight: 50
    },
    date: {
        height: 25,
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    dateText: {
        color: COLORS.text,
        textAlign: 'left'
    },


})