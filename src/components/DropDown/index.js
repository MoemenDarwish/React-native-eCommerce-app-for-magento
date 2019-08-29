import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../AppText';
import ModalDropdown from 'react-native-modal-dropdown';
import PropTypes from 'prop-types';
import { COLORS, SCREEN } from '../../common';
class DropDown extends Component {




    renderRow = (option, index, isSelected) => {
        return <AppText style={styles.dropdownTextStyle} >{option.name}</AppText>
    }


    renderButtonText = (rowData) => {
        return rowData.name;
    }
    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <ModalDropdown
                    options={data}
                    renderRow={this.renderRow}
                    renderButtonText={this.renderButtonText}
                    style={styles.dropDownContainer}
                    dropdownStyle={styles.dropdownStyle}
                    textStyle={styles.textStyle}
                    dropdownTextStyle={styles.dropdownTextStyle}
                    animated={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}


DropDown.proptypes = {
    data: PropTypes.array.isRequired
}

export { DropDown };

const styles = StyleSheet.create({
    dropDownContainer: {
        width: SCREEN.WIDTH * 0.8,
        borderWidth: 1,
        paddingVertical: 5,
        borderColor: COLORS.border,

    },
    dropdownStyle: {
        width: "60%",
        height: null
    },
    textStyle: {
        fontSize: 15,
        color: COLORS.text_dark,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    dropdownTextStyle: {
        fontSize: 15,
        padding: 5
    }

})