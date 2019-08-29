import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { AppText, AppIcon } from '../../components';
import { ICONS, SCREEN } from '../../common';

const sortingAtrbuites = ["Best Match", "Price:Low to High", "Price:High to Low", "Poularity", "Top Rated"]

class ModalPicker extends Component {

constructor(props){
    super(props);
    this.state = {
        visible: false,
        selectedValue: this.props.initialValue || null
    }
}

    _toggleModal = () => {
        this.setState({ visible: !this.state.visible })
    }

    onSelectItem = (item,index) => {
        this.setState({ selectedValue: item });
        this.props.onPress(item,index);
        this._toggleModal()
    }

    renderItem = ({ item,index }) => {
        const checked =  this.state.selectedValue == item;
        return (<TouchableOpacity style={styles.itemContainer} activeOpacity={0.7} onPress={() => this.onSelectItem(item,index)}>
            <AppText>{item}</AppText>
            <AppIcon name={ICONS.checked} color={checked ? 'green' : '#ddd'} />
        </TouchableOpacity>
        )
    }


    render() {
        const { data, label, required, headerTitle } = this.props;
        const { selectedValue, visible } = this.state;
        const placeholder = label ? (required ? `${label} * ` : label) : 'Please Select';
        const value = selectedValue ? selectedValue : placeholder;
        return (
            <View >
                <TouchableOpacity style={styles.box} onPress={this._toggleModal} activeOpacity={0.5} >

                    <Text style={[styles.labelText, { color: selectedValue ? null : '#bbb' }]} >{value}</Text>
                    <AppIcon name={ICONS.down} size={25} />
                </TouchableOpacity>

                <Modal
                    isVisible={visible}
                    backdropOpacity={0.3}
                    onBackButtonPress={this._toggleModal}
                    onSwipe={this._toggleModal}
                    onBackdropPress={this._toggleModal}
                    style={styles.modal}
                    swipeDirection={"down"}
                >
                    <View style={styles.pickerContainer} >
                        <View style={styles.pickerHeader}>
                            <AppText style={styles.sortHeaderText}>{headerTitle}</AppText>
                        </View>

                        <FlatList
                            data={data}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => `item--${index}`}
                        />
                    </View>
                </Modal>
            </View>
        );
    }
}

ModalPicker.proptypes = {
    data: PropTypes.array.isRequired,
    headerTitle: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    initialValue : PropTypes.bool,
    onPress: PropTypes.func.isRequired

}

export { ModalPicker };


const styles = StyleSheet.create({

    box: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
        height: 35,
        marginBottom: 10,
    },
    labelText: {
        paddingHorizontal: 5,
        textAlign:'left',
        width: "89%"
    },
    modal: {
        margin: null,
        justifyContent: 'flex-end',
    },
    pickerContainer: {
        backgroundColor: '#fff',
        maxHeight: SCREEN.HEIGHT * 0.7
    },
    itemContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 5,
        alignItems: 'center'
    },
    pickerHeader: {
        height: 40,
        paddingHorizontal: 5,
        justifyContent: 'center',
        backgroundColor: '#ccc'

    },
    sortHeaderText: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})