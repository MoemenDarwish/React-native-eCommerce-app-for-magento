import React, { Component } from 'react';
import { View, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  applyFilter, reset_filter } from '../../redux/actions';
import { AppText, AppIcon, Button, HeaderIcon } from '../../components';
import I18n from '../../i18n';
import { COLORS, ICONS } from '../../common';
import _ from 'lodash';



class Filtering extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected_attribute: null,
            selected_options: [],
        }
    }

    static navigationOptions = ({ navigation }) => {
        let category_id = navigation.getParam('category_id', null);
        return {
            title: I18n.t('filterBy'),
            headerRight : <HeaderIcon name={"reset_filter"} navigation={navigation} category_id={category_id} />
        }
    }






    reshapeAttributes = (attributes = []) => {
        let reshaped_attributes = [];

        attributes.forEach((item, index) => {
            if (item && item.options) {
                let option = { title: item.title, code: item.code, data: item.options, index };
                reshaped_attributes = [...reshaped_attributes, option];
            }
        });
        return reshaped_attributes;

    }

    onPressOption = async ({ item, section }) => {
        const { selected_options,sort } = this.props;
        let id = this.props.navigation.getParam('category_id', null);
        let code = section.code;
        let value = item.value;
        let selected_attributes = [];
        const section_exist = selected_options.findIndex(s => s.value == value);
        if (section_exist != -1) {
            selected_attributes = await selected_options.filter(x => x.value !== value);
        } else {
            selected_attributes = await [...selected_options, { code, value }];
        }
        this.props.applyFilter({ id, filtering_attributes: selected_attributes, sort });
    }


    resetFilter = () =>{
        const {navigation}= this.props;
        let id = this.props.navigation.getParam('category_id', null);
        this.props.reset_filter({category_id : id},navigation);
    }

    renderItem = ({ item, section }) => {
        const { selected_options } = this.props;
        const { selected_attribute } = this.state;
        if (section.index == selected_attribute) {
            const selected = (selected_options.findIndex(o => o.value == item.value) !== -1)
            return <TouchableOpacity style={styles.optionStyle} onPress={() => this.onPressOption({ item, section })} >
                <View style={{ flexDirection: "row", width: "90%" }} >
                    <AppText style={styles.optionText} >{`${item.label}`}</AppText>

                    <AppText style={[styles.optionText, { width: "100%", color :COLORS.icon }]} >{`(${item.count})`}</AppText>
                </View>

                <AppIcon name={ICONS.checked} size={21} color={selected ? COLORS.main : null} />
            </TouchableOpacity>
        } else {
            return <View />
        }

    }

    renderSectionHeader = ({ section: { title, index } }) => {
        const { selected_attribute } = this.state;
        const selected = selected_attribute == index;
        return <TouchableOpacity style={styles.sectionHeader} onPress={() => {
            if (selected) {
                this.setState({ selected_attribute: null })
            } else {
                this.setState({ selected_attribute: index })
            }
        }} >
            <AppText style={styles.headerText} >{title}</AppText>
            <AppIcon name={selected ? ICONS.up : ICONS.down} color={"#222"} />
        </TouchableOpacity>
    }
    render() {
        const { filter_attributes, navigation,selected_options } = this.props;
        let attributes = this.reshapeAttributes(filter_attributes);
        let  disable = selected_options.length == 0;
        return (
            <View style={{ flex: 1 }} >
                <SectionList
                    style={styles.container}
                    sections={attributes}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    keyExtractor={(item, index) => `${item} + ${index}`}
                />
                <View style={styles.buttonContainer} >

                    <Button
                        titleStyle={styles.buttonTitle}
                        title={I18n.t('reset')}
                        style={styles.resetButton}
                        onPress={() => this.resetFilter()}
                        disabled={disable}

                    />

                    <Button
                        titleStyle={styles.buttonTitle}
                        title={I18n.t('apply')}
                        style={styles.okButton}
                        onPress={() => navigation.goBack()}
                    />


                </View>


            </View>


        );
    }
}


const mapStateToProps = state => {
    return {
        filter_attributes: state.category.filter_attributes,
        selected_options: state.category.selected_options,
        sort: state.category.sort
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        applyFilter,
        reset_filter
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtering);



const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },
    sectionHeader: {
        paddingLeft: 15,
        paddingRight:0,
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "#aaa",
    },
    headerText: {
        width: "90%",
        color: COLORS.main_text,
        textAlign:"left",
        fontWeight: "bold",
        fontSize: 17
    },
    optionStyle: {
        height: 45,
        backgroundColor: COLORS.menu_level3,
        paddingLeft:15,
        flexDirection: "row",
        alignItems: "center",
    },
    optionText: {
        minWidth: "80%",
        color:COLORS.text_dark,
        textAlign:"left",
        fontSize: 16
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%"
    },
    resetButton: {
        height:55,
        backgroundColor: "#ff4765",
        flex: 0.35

    },
    okButton: {
        height:55,
        flex: 0.65

    },
    buttonTitle: {
        fontWeight: "bold",
        fontSize: 17
    },
})