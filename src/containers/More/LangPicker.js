import React, { Component } from 'react';
import { View } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionSheet from 'react-native-actionsheet';
import {applyLanguage} from '../../redux/actions';
import { AppText } from '../../components';
import { LANGS } from '../../common';


const languages = LANGS.map(lang=>{
    return lang.name;
});

const options = [...languages, 'cancel']

class LangPicker extends Component {


    _showLangPicker = () => {
        this.refs.ActionSheet.show()
    }

    selectedIndex = ()=>{
        const {lang} = this.props;
       if( lang === 'ar' ){
            return options.findIndex( option=> option == "العربية"  );
       }else{
            return options.findIndex( option=> option == "English"  );
       }
    }


    selectLanguage = (index)=>{
        if (index === 2 )return;
        // if(index < LANGS.length){
            const selectedLang = LANGS[index].key;
            if(selectedLang === this.props.lang ) return;
            this.props.applyLanguage(selectedLang);
        // }

    }
    render() {
        return (
            <View >
                <AppText onPress={this._showLangPicker} >LANG</AppText>
                <ActionSheet
                    ref={"ActionSheet"}
                    title={'Please Select Language ?'}
                    options={[ ...languages , 'cancel']}
                    cancelButtonIndex={2}
                    destructiveButtonIndex={ this.selectedIndex() }
                    onPress={ this.selectLanguage }
                />

            </View>
        )
    }
}

const mapStateToProps = state =>{
    return{
        lang : state.lang.lang
    }
}

const mapDispatchToProps= dispatch =>{
    return bindActionCreators({
        applyLanguage
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LangPicker);
