import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { AppText } from "../AppText";
import { PressedIcon } from "../Icons";
import { COLORS, SCREEN } from "../../common";

const MyAccount = ({ name, text }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <PressedIcon
                    name={name}
                    size={50}
                    underlayColor={COLORS.transparent}
                    color={COLORS.iconActive}
                    style={styles.icon}
                />
                <AppText style={styles.text}>{text}</AppText>
            </TouchableOpacity>

        </View>

    );

}

export { MyAccount };

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: COLORS.border,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: SCREEN.HEIGHT * 0.18,
        marginVertical: 5,
        shadowOpacity: 0.5,
        backgroundColor: COLORS.background
    },
    icon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        marginLeft: 15
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
})