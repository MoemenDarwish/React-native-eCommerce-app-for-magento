import React, { Component } from 'react';
import { View } from 'react-native';
import Gallery from '../../../components/ImageGallery';
import styles from "./styles";

class ImageGallery extends Component {
    render() {
        const { navigation } = this.props;
        const images = navigation.getParam('images', []);
        const pressedIndex = navigation.getParam('pressedIndex', 0);

        let imagesSources = images.map(image => {
            return { source: { uri: image.url } }
        });


        return (
            <View style={styles.container} >
                <Gallery
                    key={imagesSources.length}
                    flatListProps={{
                        keyExtractor: (i, idx) => String(idx),
                        extraDate: pressedIndex,

                    }}
                    images={imagesSources}
                    initialPage={pressedIndex}
                    style={styles.gallery}
                />
            </View>
        );
    }
}


export default ImageGallery;