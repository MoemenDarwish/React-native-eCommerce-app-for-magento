import React,{Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { AppText, ProductDetailSection, DropDown } from '../../../components';
import { COLORS } from '../../../common';
import styles from "./styles";

class ProductOptions extends Component{

    constructor(props){
        super(props);


        this.renderItem = this.renderItem.bind(this);
        this.renderOptionAttributes = this.renderOptionAttributes.bind(this);
        this.renderFixedAttributes = this.renderFixedAttributes.bind(this);
        this.renderCustomAttributes = this.renderCustomAttributes.bind(this);
    }



    renderFixedAttributes = ({item})=>{
        const {selected, name}  = item;
        let selectedStyle = selected ? { borderColor : COLORS.main,borderWidth:2 } : null;
        return <TouchableOpacity style={[styles.attributeStyle, selectedStyle ]} >
            <AppText style={[styles.attributeText, selected? { color : COLORS.main  } : null ]} >{name}</AppText>
        </TouchableOpacity>
        
    }

    renderCustomAttributes = (item)=>{
        return <DropDown  data={item.attributes}  />

    }


    renderOptionAttributes = (item)=>{
        if(item.key == 'size' || item.key == 'color'){
            return <FlatList
                contentContainerStyle={{alignItems:'center'}}
                data={item.attributes}
                renderItem={this.renderFixedAttributes}
                horizontal
                keyExtractor={ item => JSON.stringify(item.id) }
                showsVerticalScrollIndicator={false}
                /> 
        }else{
            return this.renderCustomAttributes(item);
        }
    }

    renderItem=({item})=>{
        return (
            <ProductDetailSection style={styles.optionStyle} >
                <AppText style={styles.optionsName} >{item.option_name}</AppText>
                <View style={styles.listContainer} >
                    {this.renderOptionAttributes(item)}
                </View>
            </ProductDetailSection>
        )
    }

    render(){
        const {options} = this.props;
        return(
            <View style={styles.container} >
                <FlatList 
                    data={options}
                    renderItem={ this.renderItem }
                    keyExtractor={ item => JSON.stringify(item.id) }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}



ProductOptions.propTypes = {
    options : PropTypes.array.isRequired,
    itemStyle : PropTypes.object
}


export default ProductOptions;





