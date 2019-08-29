import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText, AppIcon } from '../../components';
import { COLORS, ICONS } from '../../common';



class ParentMenuItem extends Component {
    render() {
        const { item, disabled, selected, onPress, has_child, style, textStyle } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.7} disabled={disabled} style={[styles.container, style]} onPress={() => onPress()} >
                <View style={{flexDirection:"row", alignItems:"center"}} >
                { item.icon && <AppIcon name={item.icon} color={"#555"} style={styles.icon} size={22} />}
                <AppText style={[styles.nameText, textStyle]} >{item.name}</AppText>
                </View>
                {has_child && <AppIcon name={selected ? ICONS.up : ICONS.down} color={"#222"} />}
            </TouchableOpacity>
        );
    }
}



export default ParentMenuItem;


const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: COLORS.menu_level1,
    },
    nameText: {
        fontWeight: "500",
        color: COLORS.main_text
    },
    icon: {
        margin: 0,
        marginRight: 5
    }
})