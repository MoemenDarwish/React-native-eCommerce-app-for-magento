/**
 * CategoryScreen , navigate to it by id of category as a prop
 */

import React, { Component } from 'react';
import { View, LayoutAnimation, RefreshControl, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ProductList, HeaderIcon, HeaderTitle, LoadingModal, Spinner } from '../../components';
import { loadMore_products, fetchCategory, init_category_screen } from '../../redux/actions';
import styles from "./styles";
import SortingModal from './Sorting';
import ContolBar from './ControlBar';



class Category extends Component {
    constructor(props) {
        super(props);
        this.getCategoryProducts = this.getCategoryProducts.bind(this);
        this.state = {
            category_id: null,
        }
        this.page = 1;
    }
    static navigationOptions = ({ navigation }) => {
        const categoryData = navigation.getParam('data', {});
        const linkingName = navigation.getParam('name', null);

        return {
            headerRight: <HeaderIcon name={"main-right"} navigation={navigation} />,
            headerTitle: <HeaderTitle title={linkingName ? linkingName : categoryData.name ? categoryData.name : ''} />,
            headerLeft: <HeaderIcon name="back" navigation={navigation} />,
        }
    }

    async componentDidMount() {
        await this.props.init_category_screen();
        await this.getCategoryProducts({ refreshing: false });

        // LayoutAnimation.configureNext(
        //     LayoutAnimation.create(
        //         500,
        //         LayoutAnimation.Types.easeInEaseOut,
        //         LayoutAnimation.Properties.scaleXY

        // ),()=>{
        //     // this.getCategoryProducts();
        // } )

    }


    getCategoryProducts = ({ refreshing }) => {
        const categoryData = this.props.navigation.getParam('data', {});
        const linkingId = this.props.navigation.getParam('id', null);
        const { selected_options, sort } = this.props;

        const { id } = categoryData;
        if (linkingId) {
            this.props.fetchCategory({ id: linkingId, page: 1, refreshing, filtering_attributes: selected_options, sort });
        } else {
            this.props.fetchCategory({ id, page: 1, refreshing, filtering_attributes: selected_options, sort });

        }
    }

    loadMoreProducts = async () => {
        const categoryData = this.props.navigation.getParam('data', {});
        const { id } = categoryData;
        const { total_count, products, selected_options, sort } = this.props;
        if (id && products.length !== 0 && (products.length < total_count)) {
            await this.props.loadMore_products({ id, page: this.props.page, filtering_attributes: selected_options, sort });
        } else {
            console.log("NO MORE PRODUCTS")
        }
    }






    // componentDidUpdate() {
    //    const {create, configureNext, Properties, Types} = LayoutAnimation;
    //    const config = create(1000, Types.easeInEaseOut, Properties.opacity);
    //    configureNext(config)
    // }

    render() {
        const { layout, navigation, products, loadMore, refresh } = this.props;
        const categoryData = this.props.navigation.getParam('categoryData', {});
        return (
            <View style={styles.container}>

                <ContolBar navigation={navigation} category_id={categoryData.id} />
                    <ProductList
                        products={products}
                        refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => this.getCategoryProducts({ refreshing: true })} />}
                        listLayout={layout}
                        refresh={true}
                        navigation={navigation}
                        listStyle={styles.list}
                        pagination={true}
                        loadMore={() => this.loadMoreProducts()}
                        footerComponent={loadMore && <Spinner size="small" />}
                    />
                    {this.props.sortingModal && <SortingModal category_id={categoryData.id} />}
            </View>

        );

    }
}


const mapStateToProps = state => {
    return {
        layout: state.category.layout,
        refresh: state.category.refresh,
        loadMore: state.category.loadMore,
        page: state.category.page,
        products: state.category.products,
        total_count: state.category.total_count,
        sortingModal: state.category.sortingModal,
        selected_options: state.category.selected_options,
        sort: state.category.sort,
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        init_category_screen,
        fetchCategory,
        loadMore_products
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
