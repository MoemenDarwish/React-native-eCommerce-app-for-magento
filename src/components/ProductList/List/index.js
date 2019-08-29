import React,{Component} from 'react';
import { FlatList} from 'react-native';
import { ProductItem } from '../../index';
import { productLayouts, listLayouts} from '../../../config/layout';
import PropTypes from 'prop-types';


class List extends Component {
    constructor(props){
        super(props);
            this.renderItem = this.renderItem.bind(this);
            this.onEndReachedCalledDuringMomentum = true;
    }

    renderItem = ({item})=>{
        const {navigation, listLayout} = this.props;
        if(listLayout === listLayouts.list){
            return<ProductItem productLayout={productLayouts.horizontal} product={item} navigation={navigation} />
        }else{
            return<ProductItem productLayout={productLayouts.vertical} product={item} navigation={navigation} />
        }
    }


    onEndReached = ()=>{
        const {pagination, loadMore} = this.props;
        if(pagination && !this.onEndReachedCalledDuringMomentum ){
            loadMore();
            this.onEndReachedCalledDuringMomentum = true;
        }
        
    }

    render(){
        const {products ,listLayout,listStyle, pagination ,footerComponent, refreshControl} = this.props;
        return(
                <FlatList 
                    contentContainerStyle={[listStyle]}
                    key={listLayout}
                    data={products}
                    refreshControl = {  refreshControl }
                    keyExtractor={(item,index)=> `item--${item.id}--${index}`}
                    renderItem = { this.renderItem }
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={ listLayout === listLayouts.grid ? 2 : 1 }
                    onEndReached = { ()=> this.onEndReached() }
                    ListFooterComponent = { pagination ? footerComponent   : null}
                    initialNumToRender={5}
                    onEndReachedThreshold=  { 0.1}
                    onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                />
        );

    }

}

List.propTypes = {
    products : PropTypes.array.isRequired, // array of products
}

export default List;