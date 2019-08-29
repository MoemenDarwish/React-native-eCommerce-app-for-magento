
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LanguagePicker } from './LanguagePicker';
import LinearGradient from 'react-native-linear-gradient';
import I18n from '../../i18n';
import { applyLanguage } from '../../redux/actions';
import styles from "./styles";
import { COLORS, LANGS as langs } from '../../common';
import { LogoImage, AppText } from '../../components';

class Configuration extends Component {

    onChooseLang = (index) => {
        const lang = langs[index].key;
        this.props.applyLanguage(lang);
    }

    render() {
        return (
            <LinearGradient colors={COLORS.thirdGradient} style={styles.linearGradient} >
                <View style={styles.container} >
                    <LogoImage type="dark" style={styles.logo} />
                    <View style={styles.pickerContainer} >
                        <AppText style={styles.selectLangText} >{I18n.t('selectLanguage')}</AppText>
                        <LanguagePicker onChooseLang={this.onChooseLang} langs={langs} />
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.lang
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        applyLanguage
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);