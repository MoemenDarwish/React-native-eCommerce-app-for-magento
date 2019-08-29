import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeSearchText, onSearch, resetSearch } from '../../redux/actions';
import { AppText, SearchBox, MyAccount, HeaderIcon, LoadingModal, Spinner, ProductList, EmptyScreen } from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { COLORS, ICONS } from '../../common';
import { listLayouts } from '../../config/layout';
import I18n from '../../i18n';
import styles from "./styles"


class Search extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Search",
        }
    }

    componentDidMount(){
        this.props.resetSearch()
    }
    render() {
        const {  onSearch, navigation, search_result } = this.props;
        return (
            <View style={styles.container} showsVerticalScrollIndicator={false}>
                    <SearchBox  onSearch={onSearch} navigation={navigation} />
                    {
                        search_result.length === 0 ? <EmptyScreen name={ICONS.search} message={I18n.t("searchPlaceholder")} />
                    :
                    <ProductList
                    listLayout={listLayouts.list} 
                    products={search_result}
                    navigation={navigation}
                    />
                    }
            </View>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        onSearch,resetSearch
    }, dispatch);
}

const mapStateToProps = state=>{
    return{
        search_result : state.search.search_result
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
