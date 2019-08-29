import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText } from '../AppText';
import { ImagePlaceholder } from '../ImagePlaceholder';
import { COLORS, SCREEN } from '../../common';
import { navigateToProduct } from "../../navigation/Navigator"

class OrderProduct extends React.Component {
    render() {
        const { product, navigation } = this.props;
        return <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={() => navigateToProduct(navigation, product)}
        >
            <ImagePlaceholder source={{ uri: product.image }} style={{ flex: 1 }} resizeMode={"contain"} />
            <View style={styles.nameContainer}>
                <AppText numberOfLines={1} style={styles.nameText}>{product.name}</AppText>
            </View>
        </TouchableOpacity>

    }
}

export { OrderProduct };

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: SCREEN.WIDTH / 3,
        backgroundColor: COLORS.border,
        shadowColor: COLORS.shadow,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        elevation: 1,
        marginRight: 10
    },
    nameContainer: {
        position: "absolute",
        backgroundColor: 'rgba(0,0,0,0.6)',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',

    },
    nameText: {
        color: COLORS.text_light,
        padding: 5
    }

})