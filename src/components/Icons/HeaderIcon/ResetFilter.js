import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { PressedIcon } from '../PressedIcon';
import { reset_filter } from '../../../redux/actions';
import { ICONS, COLORS } from '../../../common';


class ResetFilter extends Component {
    render() {
        const {navigation,category_id ,reset_filter, selected_options} = this.props;
        return (
            <PressedIcon
                name={ICONS.reset}
                onPress={() => reset_filter({category_id}, navigation)  }
                size={28}
                underlayColor={COLORS.transparent}
                color={COLORS.white}
                style={{marginRight:5}}
                disabled={selected_options.length == 0}
                />
        );
    }
}


const mapDispatchToProps = dispatch=>{
    return bindActionCreators({
        reset_filter
    },dispatch);
} 
const mapStateToProps = state =>{
    return{
        selected_options : state.category.selected_options
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ResetFilter);