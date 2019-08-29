import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSortingModal, on_sort } from "../../redux/actions"
import Modal from 'react-native-modal';
import { AppText, AppIcon } from '../../components'
import { ICONS, COLORS, SCREEN } from '../../common';
import I18n from '../../i18n'


class SortingModal extends Component {
    
    
    _toggleModal = () => {
        this.props.toggleSortingModal()
    }
    
    
    onPressSorting = (sort)=>{
        const {on_sort,category_id,selected_options} = this.props;
        this._toggleModal();
        on_sort({category_id,sort,filtering_attributes : selected_options})
    }
    
    renderItem = ({ item }) => {
        let checked = (item.code === this.props.sort);
        return (<TouchableOpacity style={styles.sortingItem} activeOpacity={0.7} onPress={() => this.onPressSorting(item.code)}>
            <AppText style={styles.optionText} >{item.name}</AppText>
            <AppIcon name={ICONS.checked} color={checked ? COLORS.main : null} />
        </TouchableOpacity>
        )
    }
    sortHeader = () => {
        return <View style={styles.sortHeader}><AppText style={styles.sortHeaderText}>{I18n.t("sortedBy")}</AppText></View>
        
    }
    
    render() {
        const sortingAtrbuites = [
            { code: 'position', name: I18n.t('bestMatch') },
            { code: 'name_asc', name: I18n.t('a_z') },
            { code: 'name_desc', name: I18n.t('z_a') },
            { code: 'price_asc', name: I18n.t('low_high') },
            { code: 'price_desc', name: I18n.t('high_low') }
        ];
        return (
            <Modal
                isVisible={this.props.sortingModal}
                backdropOpacity={0.3}
                onBackButtonPress={this._toggleModal}
                onSwipe={this._toggleModal}
                onBackdropPress={this._toggleModal}
                style={styles.modal}
                swipeDirection={"down"}
            >
                <View style={styles.modalContent}>
                    <View style={styles.sortContainer} >
                        <FlatList
                            data={sortingAtrbuites}
                            renderItem={this.renderItem}
                            ListHeaderComponent={this.sortHeader}
                            keyExtractor={ (item,index)=> `item--${index}--${item.code}` }
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}
const mapStateToProps = state => {
    return {
        sortingModal: state.category.sortingModal,
        selected_options: state.category.selected_options,
        sort : state.category.sort
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ toggleSortingModal, on_sort }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SortingModal);


const styles = StyleSheet.create({
    modal: {
        margin: null,
        justifyContent: 'flex-end',
    },
    modalContent: {

    },
    sortContainer: {
        backgroundColor: '#fff',
        minHeight: SCREEN.HEIGHT / 3
    },
    sortingItem: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 5,
        alignItems: 'center'
    },
    sortHeader: {
        paddingHorizontal: 10,
        marginBottom: 5,
        height: 60,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    sortHeaderText: {
        color: COLORS.main_text,
        fontWeight: "bold",
        fontSize: 18,
        textAlign:'left'
    },
    optionText:{
        color:COLORS.text_dark,
        fontSize: 16
    }
})