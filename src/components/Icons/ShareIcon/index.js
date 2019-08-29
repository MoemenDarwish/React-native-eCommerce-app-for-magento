import React,{Component} from 'react';
import {Share} from 'react-native';
import { PressedIcon } from '../PressedIcon';
import { ICONS } from '../../../common';
import PropTypes from 'prop-types';

class ShareIcon extends Component{
    onPressShare = ()=>{
        const {message, url, title} = this.props
        Share.share({
            message :  message,
            title : title,
            url : url
        },{
            dialogTitle : title
        });
    }
    render(){
        return(
            <PressedIcon
                 name={ ICONS.share }
                 onPress = {this.onPressShare}
                 style={this.props.style}
                 color={this.props.color}
                 size={this.props.size}
                 />
        ); 
    }

}
ShareIcon.proptypes = {
    message : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}

export {ShareIcon};