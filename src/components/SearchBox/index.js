import React, { Component } from 'react';
import { View, TextInput, StyleSheet, I18nManager } from 'react-native';
import { PressedIcon } from '../Icons';
import { ICONS, COLORS } from '../../common';
import I18n from "../../i18n";

class SearchBox extends Component {
    state = {
        searchText: ""
    }

    _handleOnSearch = () => {
        const { searchText } = this.state;
        const { onSearch, navigation } = this.props;
        if (searchText.trim().length > 0) {
            onSearch(searchText, navigation);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder={I18n.t("search")}
                    style={styles.textInput}
                    maxLength={30}
                    onChangeText={(searchText) => this.setState({ searchText })}
                    value={this.state.searchText}
                    onSubmitEditing={this._handleOnSearch}
                />
                <PressedIcon
                    activeOpacity={0.8}
                    // style={{ backgroundColor: COLORS.secondary, borderRadius: 0, height: 55, width: 70, marginLeft: 0, marginRight: -5 }}
                    name={ICONS.search}
                    size={26}
                    // underlayColor={"#777"}
                    color={"#777"}
                    onPress={this._handleOnSearch}
                />

            </View>
        );
    }
}
export { SearchBox };

const styles = StyleSheet.create({
    container: {
        height: 55,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: "center",
        width: "100%",
        shadowOpacity: 0.3,
        borderBottomWidth: 1,
        borderColor: "#CCC",
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        // shadowOffset: { height: 2, width: 1 },

    },
    textInput: {
        flex: 1,
        padding: 10,
        height: 55,

        fontSize: 15,
        textAlign: I18nManager.isRTL ? 'right' : 'left'
    },

})