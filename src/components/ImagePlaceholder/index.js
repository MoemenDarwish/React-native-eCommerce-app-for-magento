import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Spinner } from '../Spinner';
import { IMAGES, COLORS } from '../../common';
import ImageLoad from 'react-native-image-placeholder';

import PropTypes from 'prop-types';

class ImagePlaceholder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: false
        }
    }



    render() {
        const { resizeMode, source, children, style } = this.props;
        const { isLoaded, error } = this.state;
        return (
            <ImageLoad
                style={[styles.container, style]}
                loadingStyle={{ size: 'large', color: 'blue' }}
                source={source}
                isShowActivity={false}
            />
        );
    }
}

ImagePlaceholder.proptypes = {
    source: PropTypes.string.isRequired,
    resizeMode: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.any
}


export { ImagePlaceholder };


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});