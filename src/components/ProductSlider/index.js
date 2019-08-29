import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { AppText } from '../AppText';
import I18n from '../../i18n';
import { navigateToCategory } from '../../navigation/Navigator';
import { COLORS, SCREEN } from '../../common';
import { ProductItem } from '../ProductItem';
import { productLayouts } from '../../config/layout';



class ProductSlider extends Component {
    constructor(props) {
        super(props);
        this.onPressShowAll = this.onPressShowAll.bind(this);
    }

    onPressShowAll() {
        const { rowName, category_id } = this.props.row;
        const { navigation } = this.props;
        navigateToCategory(navigation, { id: category_id, name: rowName });
    }


    renderItem = ({ item }) => {
        const { navigation } = this.props;

        return <ProductItem
            productLayout={productLayouts.vertical}
            product={item}
            navigation={navigation} style={styles.itemStyle} />
    }

    render() {
        const { row } = this.props;
        return (
            <View style={styles.container}>
                {row && row.category_id && <View style={styles.header} >
                    <TouchableOpacity disabled onPress={() => this.onPressShowAll()} style={styles.name} >
                        <AppText style={styles.categoryText} numberOfLines={1} >{row.rowName || I18n.t('relatedProducts')}</AppText>
                    </TouchableOpacity   >
                    <TouchableOpacity onPress={() => this.onPressShowAll()} style={styles.showAll}>
                        <AppText style={styles.showAllText} >{I18n.t('showAll')}</AppText>
                    </TouchableOpacity>
                </View>}
                <FlatList
                    contentContainerStyle={{ paddingHorizontal: 5 }}
                    data={row.data}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}


export default ProductSlider;


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 5,
    },
    header: {
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: "space-between",
        height: 30,
    },
    categoryText: {
        fontSize: 15,
        textTransform: "uppercase",
        fontWeight: 'bold',
        color: COLORS.main_text,
        textAlign: 'left'
    },
    showAllText: {
        fontSize: 14,
        color: COLORS.main,
        textAlign: 'right',
        fontWeight: 'bold',

    },

    showAll: {
        width: "25%"
    },
    itemStyle:{
        width:(SCREEN.WIDTH-40) / 2,
        marginHorizontal:5,
        borderRadius:5
    }
});