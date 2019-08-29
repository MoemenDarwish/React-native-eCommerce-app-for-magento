

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ICONS, COLORS } from '../../../common';
import { PressedIcon, CartIcon } from '../index';
import { navigateToSearch } from '../../../navigation/Navigator';


const MainRight = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <PressedIcon
                onPress={() => navigateToSearch(navigation)}
                name={ICONS.search}
                color={COLORS.header_titles_icons}
                size={27} />
            <CartIcon navigation={navigation} color={COLORS.header_titles_icons} />

        </View>
    );
}


export default MainRight;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})