import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppText, Button } from '../../components';
import { COLORS } from '../../common';


class EmptyScreen extends Component {
    render() {
        const { name, message, navigation, onPress,title } = this.props
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center' }}>
                    <Icon name={name} size={200} color={COLORS.light_gray} />
                    <AppText style={{ color: COLORS.disabled_text, alignSelf: 'center' }}>{message}</AppText>
                </View>
                
              { title && <Button title={title} style={{ backgroundColor: COLORS.secondary, marginTop: 40 }}
                    onPress={onPress} />}
            </View>
        )
    }
}

export { EmptyScreen }

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})