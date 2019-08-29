import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from "react-native-swiper";
import PropTypes from 'prop-types';
import { SCREEN } from '../../common';


class AppSwiper extends Component {
    constructor(props) {
        super(props);
    }
    renderSwiper() {
        const { data, onPressItem } = this.props;
        return data.map((item, index) => {
            return <TouchableOpacity
                onPress={() => onPressItem(index)}
                activeOpacity={0.8} key={item.id} >
                <Image source={{ uri: item.url }} style={styles.swiperImage} resizeMode="contain" />
            </TouchableOpacity>
        });

    }

    render() {
        const { data, style } = this.props;
        return (
            <View style={[styles.swiperContainer, style]} >
                {data && <Swiper
                    height={SCREEN.HEIGHT / 3}
                    key={data.length}
                    autoplay={true}
                    loop
                    bounces={false}
                    {...this.props}
                    showsVerticalScrollIndicator={false}
                >
                    {this.renderSwiper()}

                </Swiper>}
            </View>
        );
    }
}

AppSwiper.propTypes = {
    data: PropTypes.any.isRequired,
    onPressItem: PropTypes.func
}

export { AppSwiper as Swiper };


const styles = StyleSheet.create({
    swiperContainer: {
        width: "100%",
        marginBottom: 10
    },
    swiperImage: {
        width: "100%",
        height: "100%"
    }
})