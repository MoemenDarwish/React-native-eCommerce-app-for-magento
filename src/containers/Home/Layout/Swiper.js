import React, { Component } from 'react';
import { View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import Swiper from "react-native-swiper";
import { navigateToProduct, navigateToCategory } from '../../../navigation/Navigator';
import { COLORS, SCREEN } from '../../../common';
import { base_url } from '../../../Configuration';


class HomeSwiper extends Component {

    constructor(props) {
        super(props);
        this.onPressItem = this.onPressItem;

    }

    onPressItem = (item) => {
        const { navigation } = this.props;
        if (item.navigation_type === 'product') {
            navigateToProduct(navigation, { id : item.navigation_id, name:item.navigation_name });
        } else if (item.navigation_type === 'category') {
            navigateToCategory(navigation, { id : item.navigation_id, name:item.navigation_name })
        }
    }

    renderSwiper() {
        const { row } = this.props;


        return row.data.map((item,index) => {
            if (item.image_path && item.image_path.length > 0) {
                const image = `${base_url}/media/${item.image_path}`;
                return <TouchableOpacity
                    key={`item--${item.id}--${index}`}
                    onPress={item.clickable ? ()=> this.onPressItem(item) : ()=>{} }
                    activeOpacity={item.clickable ? 0.7 : 1}  >
                    <Image 
                        source={{ uri: image  }}
                        style={styles.swiperImage}
                        resizeMode="contain"
                        />
                </TouchableOpacity>
            }
        });

    }


    render() {
        const { row } = this.props;
        return (
            <View style={[styles.swiperContainer]} >
                {row && <Swiper
                    index={0}
                    key={row.data.length}
                    autoplay={true}
                    height={SCREEN.WIDTH * 0.4}
                    loop = {false}
                    bounces={false}
                    paginationStyle={styles.paginationStyle}
                    dotColor={COLORS.white}
                    activeDotColor={COLORS.main}
                    {...this.props}
                >
                    {this.renderSwiper()}

                </Swiper>}
            </View>
        );
    }
}

export default HomeSwiper;


const styles = StyleSheet.create({
    swiperContainer: {
       marginBottom:10
    },
    swiperImage: {
        width: SCREEN.WIDTH,
        height: SCREEN.WIDTH*0.4 ,
    },
    paginationStyle:{
        position:"absolute",
        bottom:15,
    }
})