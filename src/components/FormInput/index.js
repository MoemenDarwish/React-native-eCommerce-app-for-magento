
import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { AppText } from '../AppText';
import { SCREEN, FONTS } from '../../common';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


class FormInput extends Component {


    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }


    focus() {
        this.refs.textInput.focus();
    }

    render() {
        const { title, error, iconName, style, containerStyle } = this.props;
        console.log(error);
        return (
            <View style={[styles.container, containerStyle]}>
                <AppText style={styles.titleStyle} >{title}</AppText>
                <View style={[styles.inputContainer, { borderBottomColor: error ? "red" : COLORS.input_border }]}>
                    <TextInput
                        ref={"textInput"}
                        underlineColorAndroid={"transparent"}
                        {...this.props}
                        style={[styles.inputStyle, style]}
                    />
                    {iconName && <View style={styles.iconStyle}>
                        <Icon name={iconName} size={25} color={COLORS.main} style={{ textAlign: "left" }} />
                    </View>}

                </View>
                {error && <AppText style={styles.errorText} >{error}</AppText>}
            </View>
        );
    }
}


export { FormInput };

const styles = StyleSheet.create({
    container: {
        width: SCREEN.WIDTH * 0.9,
        alignSelf: "center",
        marginBottom: 10,
    },
    titleStyle: {
        color: COLORS.textColor,
        fontSize: 13,

    },
    inputContainer: {
        height: 35,
        borderBottomWidth: 1,
        borderColor: "gray",
        flexDirection: "row",
        alignItems: "center",
    },
    inputStyle: {
        flex: 1,
        height: "100%",
        ...FONTS.regular,
        fontSize: 16,
        textAlign: "left",
        color: COLORS.text_input,
        textAlignVertical: "center",
        marginRight: 10,
        paddingVertical: 5
    },
    iconStyle: {
        height: "100%",
        width: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    errorText: {
        color: "red",
        fontSize: 10,
        // textAlign: "right"
    }

})