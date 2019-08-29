import React, { Component } from 'react';
import { View, FlatList, LayoutAnimation } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AvatarSection from './AvatarSection';
import { logout } from '../../redux/actions';
import { menu_content } from './mneuContent';
import RootMenuItem from './RootMenuItem';
import ParentMenuItem from './ParentMenuItem';
import { navigateToCategory } from '../../navigation/Navigator';
import { COLORS } from '../../common';


class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.onPressLogout = this.onPressLogout.bind(this)
        this.state = {
            selected_parent_id: null
        }

    }

    onPressLogout = async () => {
        const { navigation } = this.props;
        this.props.logout(navigation)
        navigation.closeDrawer()

    }


    onPressParent = (id) => {
        this.setState({ selected_parent_id: id == this.state.selected_parent_id ? null : id });
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    onPressCategory = (item) => {
        const { navigation } = this.props;
        this.setState({ selected_parent_id: null })
        navigateToCategory(navigation, item)
        navigation.closeDrawer()
    }



    renderSecondLevel = ({ item }) => {
        return <ParentMenuItem
            onPress={() => this.onPressCategory(item)}
            item={item}
            style={{ backgroundColor: "#FFF", borderBottomColor: "#f0f0f0", borderBottomWidth: 1, paddingLeft: 43 }}
        />
    }

    renderFirstLevel = ({ item }) => {
        const { selected_parent_id } = this.state;
        let has_child = (item && item.children && item.children.length > 0);

        if (has_child) {
            return (
                <View >
                    <ParentMenuItem
                        onPress={() => this.onPressParent(item.id)}
                        item={item}
                        style={{ backgroundColor: "#FFF", borderBottomColor: "#f0f0f0", borderBottomWidth: 1 }}
                        selected={item.id == selected_parent_id}
                        has_child={true}

                    />
                    {selected_parent_id == item.id &&
                        <FlatList
                            data={item.children}
                            initialNumToRender={item.children.length}
                            renderItem={this.renderSecondLevel}
                            keyExtractor={item => `item${item.id}`}
                            extraData={this.state.selected_parent_id}
                            showsVerticalScrollIndicator={false}

                        />}
                </View>
            )
        } else {
            return <ParentMenuItem
                onPress={() => this.onPressCategory(item)}
                item={item}
                style={{ backgroundColor: "#FFF", borderBottomColor: "#f0f0f0", borderBottomWidth: 1 }}
            />
        }

    }
    renderParentCategories = ({ item }) => {
        const { selected_parent_id } = this.state;
        let has_child = (item && item.children && item.children.length > 0);
        if (has_child) {
            return (
                <View>
                    <ParentMenuItem
                        disabled={true}
                        item={item}
                        style={{ height: 45, backgroundColor: "#f0f0f0", borderBottomColor: "#f0f0f0" }}
                        textStyle={{ color: COLORS.main_text, fontWeight: "bold", textTransform: "uppercase" }}

                    />
                    <FlatList
                        data={item.children}
                        initialNumToRender={item.children.length}
                        renderItem={this.renderFirstLevel}
                        keyExtractor={item => `item${item.id}`}
                        extraData={this.state.selected_parent_id}
                        showsVerticalScrollIndicator={false}

                    />
                </View>
            )
        } else {
            return <ParentMenuItem
                onPress={() => this.onPressCategory(item)}
                item={item}
                selected={item.id === selected_parent_id}
                style={{ height: 45, backgroundColor: "#fff", borderBottomColor: "#f0f0f0", borderBottomWidth: 1 }}

            />
        }

    }

    renderMenuItem = ({ item, index }) => {
        if (index == 0) {
            if (item.data.length > 0) {
                return <FlatList
                    data={item.data}
                    initialNumToRender={item.data.length}
                    renderItem={this.renderParentCategories}
                    keyExtractor={item => `item${item.id}`}
                    extraData={this.state.selected_parent_id}
                    showsVerticalScrollIndicator={false}
                    extraData={this.state.selected_parent_id}

                />
            }

        }
        else {
            if (item.isHeader) {
                return <ParentMenuItem item={item}
                    disabled={true}
                    style={{ height: 45, backgroundColor: "#f0f0f0", borderBottomColor: "#f0f0f0", borderBottomWidth: 1 }}
                    textStyle={{ color: COLORS.main_text, fontWeight: "bold", textTransform: "uppercase" }}
                />
            } else {
                return <RootMenuItem item={item} />
            }
        }
    }


    render() {
        const { user, wishlist_count, cart_count, categories, navigation } = this.props;
        let menuContent = menu_content({ categories, wishlist_count, user, cart_count, onPressLogout: this.onPressLogout, navigation })
        return (
            <View style={{ flex: 1 }} >
                    <AvatarSection user={user} />
                    <FlatList
                        bounces={false}
                        data={menuContent}
                        initialNumToRender={menuContent.length}
                        renderItem={this.renderMenuItem}
                        keyExtractor={(item) => `item--${item.id}`}
                        showsVerticalScrollIndicator={false}
                        extraData={this.state.selected_parent_id}

                    />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        categories: state.home.categories,
        wishlist_count: state.wishlist.count,
        cart_count: state.cart.count
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        logout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);