

import React from 'react';
import { View, StyleSheet} from 'react-native';
import { ICONS, COLORS } from '../../../common';
import { PressedIcon, CartIcon } from '../index';
import { navigateToSearch} from '../../../navigation/Navigator';


const HomeRight = ({ navigation }) => {
    return (
        <View style={styles.container} >
{/* 
            <PressedIcon
                onPress={() => navigation.navigate('AccountScreen')}
                name={ICONS.profile}
                color={COLORS.header_titles_icons}
                size={29}
                iconStyle={{ fontWeight: "bold" }}
                style={{ margin:0}}
            /> */}
            <PressedIcon
                onPress={() => navigateToSearch(navigation)}
                name={ICONS.search}
                color={COLORS.header_titles_icons}
                style={{ margin:0}}
                size={25} />


            <CartIcon navigation={navigation} color={COLORS.header_titles_icons} />





        </View>
    );
}


export default HomeRight;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle:{
        margin:0
    }
})