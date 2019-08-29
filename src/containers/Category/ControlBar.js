import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSortingModal, changeLayout } from '../../redux/actions';
import { COLORS, ICONS } from '../../common';
import { listLayouts } from '../../config/layout';
import { navigateToFilter } from '../../navigation/Navigator';
import { PressedIcon } from '../../components';


class ContolBar extends Component {
    render() {
        const { layout, changeLayout, navigation, toggleSortingModal, category_id } = this.props;
        let isGrid = layout == listLayouts.grid;

        return <View style={styles.container} >
            <View style={styles.actionsContaniner} >
                <PressedIcon
                    name={ICONS.filter}
                    style={styles.iconStyle}
                    size={30}
                    underlayColor={COLORS.transparent}
                    onPress={() => navigateToFilter(navigation, { category_id })}
                    color={COLORS.iconActive}
                />
                <PressedIcon
                    size={30}
                    name={ICONS.sorting}
                    style={styles.iconStyle}
                    underlayColor={COLORS.transparent}
                    onPress={() => toggleSortingModal()}
                    color={COLORS.iconActive}
                />

            </View>
            <View style={styles.layoutContainer} >
                <PressedIcon
                    size={30}
                    name={ICONS.listMode}
                    style={styles.iconStyle}

                    underlayColor={COLORS.transparent}
                    onPress={() => changeLayout(listLayouts.list)}
                    color={!isGrid ? COLORS.iconActive : null}
                />
                <PressedIcon
                    name={ICONS.gridMode}
                    size={30}
                    style={styles.iconStyle}
                    underlayColor={COLORS.transparent}
                    onPress={() => changeLayout(listLayouts.grid)}
                    color={isGrid ? COLORS.iconActive : null}
                />
            </View>
        </View>
    }
}




const mapStateToProps = state => {
    return {
        sortingModal: state.category.sortingModal,
        layout: state.category.layout,

    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleSortingModal,
        changeLayout
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(ContolBar);


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        paddingVertical: 10,
        // paddingVertical:15,
        paddingHorizontal: 5,
        alignItems: "center",
        width: "100%",
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    layoutContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    actionsContaniner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    iconStyle: {
        margin: 0,
        // backgroundColor:"red"
    }
})

