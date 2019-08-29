import React,{Component} from 'react';
import { StyleSheet, View} from 'react-native';

import {connect} from 'react-redux';
import { HeaderTitle } from '../../../components';



class CheckoutTitle extends Component{
    render(){
        const {title} = this.props;
        return(
            <HeaderTitle title={title || "" } />
        );
    }
}
// const HeaderTitle = ({title})=>{
//     let name = title.length > 25 ? `${title.substr(0,25)}...` : title;
//     return <View style={styles.container} >
//     <AppText style={styles.title} numberOfLines={1} >{name}</AppText>  
//     </View> 
// }

// export  {HeaderTitle};


const mapStateToProps = state=>{
    return{
        title : state.cart.title
    }
}

export default connect(mapStateToProps)(CheckoutTitle);

