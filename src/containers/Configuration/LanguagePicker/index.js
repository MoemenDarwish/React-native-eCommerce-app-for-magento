import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from '../../../components';
import { SCREEN } from '../../../common';

class LanguagePicker extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        }
    }


    handleIndexChange = (index) => {
        this.setState({ selectedIndex: index });
        this.props.onChooseLang(index)
    }

    render() {
        const { langs } = this.props;
        const languages = langs.map(item => item.name);
        return (
            <View style={styles.container} >

                <View style={styles.tabsContainerStyle} >
                    {
                        languages.map((item, index) => {
                            const borderTabStyle = index == 0 ? styles.leftBorderStyle : styles.rightBorderStyle;
                            const activeTabStyle = index == this.state.selectedIndex ? styles.activeTabStyle : {}
                            const activeTextStyle = index == this.state.selectedIndex ? styles.activeTabTextStyle : styles.tabTextStyle
                            return (
                                <TouchableOpacity
                                    key={`item--${item.id}-${index}`}
                                    activeOpacity={0.7}
                                    style={[styles.tabStyle, borderTabStyle, activeTabStyle]}
                                    onPress={() => this.handleIndexChange(index)}
                                >
                                    <AppText style={[activeTextStyle]} >{item}</AppText>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}

export { LanguagePicker };


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabsContainerStyle: {
        flexDirection: "row",
        backgroundColor: "#fff",
        width: SCREEN.WIDTH * 0.8,
        borderRadius: 10,
        height: 50,
        marginTop: 30,
    },
    tabStyle: {
        backgroundColor: '#EEEFEF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeTabStyle: {
        backgroundColor: '#FFF',
    },
    rightBorderStyle: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    leftBorderStyle: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 1,
        borderColor: '#EEEFEF'
    },
    tabTextStyle: {
        color: '#000'
    },
    activeTabTextStyle: {
        color: '#000',
        fontWeight: "bold"
    },


})