import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { AppText, AppIcon } from '../../components';
import { COLORS } from '../../common';



class RootMenuItem extends Component {

    onPressItem = () => {
        const { onPress } = this.props.item;
        if (onPress) {
            onPress();
        }
    }

    render() {
        const { item, style,textStyle ,disabled } = this.props;
        return (
            <TouchableOpacity disabled={disabled} activeOpacity={0.7} style={[styles.container, style]} onPress={() => this.onPressItem()} >
                <AppIcon name={item.icon} color={"#555"} size={22} style={styles.icon} />
                <AppText style={[styles.nameText,textStyle]} >{item.name}</AppText>
                {(item.count > 0) &&
                    <View style={styles.numberContainer}>
                        <AppText style={styles.numberText}>{JSON.stringify(item.count)}</AppText>
                    </View>}
            </TouchableOpacity>
        )
    }
}


export default RootMenuItem;


const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: "#FFF",
        borderBottomWidth:1,
        borderBottomColor:"#f0f0f0"
    },
    numberContainer: {
        width: 18,
        height: 18,
        backgroundColor: COLORS.favorite,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 7
    },
    numberText: {
        color: COLORS.text_light,
        fontWeight:"bold",
        fontSize: 12
    },
    nameText: {
        fontWeight: "600",
        color: COLORS.main_text
    },
    icon: {
        margin: 0,
        marginRight: 10
    }
})