import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux';
import { applyLanguage } from '../../redux/actions';
import ActionSheet from 'react-native-actionsheet';
import { connect } from 'react-redux';
import { AccountCard, HeaderIcon } from '../../components'
import { ICONS, LANGS } from '../../common'
import I18n from '../../i18n'
import {
  navigateToLogin, navigateToWishlist
} from '../../navigation/Navigator'
import styles from "./styles"


class More extends Component {


  constructor(props) {
    super(props);
    this.selectedLangIndex = this.selectedLangIndex.bind(this);
    this.applyLanguage = this.applyLanguage.bind(this);
  }


  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('myAccount'),

    }
  }



  selectedLangIndex = () => {
    const { lang } = this.props;
    if (lang === 'ar') {
      return LANGS.findIndex(option => option.name == "العربية");
    } else {
      return LANGS.findIndex(option => option.name == "English");
    }
  }

  applyLanguage = (index) => {
    const { lang } = this.props;
    if (index !== 2 && LANGS[index].key !== lang) {
      this.props.applyLanguage(LANGS[index].key);
    }
  }

  navigateTo = (screen) => {
    const { navigation, user } = this.props;
    if (user) {
      navigation.navigate(screen);
    } else {
      let nextScreen = { screen }
      navigateToLogin(navigation, nextScreen);
    }

  }
  render() {
    const { navigation, user } = this.props;
    return (
      <View style={styles.fullContainer}>
        <View style={styles.container}>

          <AccountCard
            name={ICONS.profile}
            AccountCardText={I18n.t('myProfile')}
            onPress={() => this.navigateTo('ProfileScreen')}

          />
          <AccountCard
            name={ICONS.order}
            AccountCardText={I18n.t('myOrders')}
            onPress={() => this.navigateTo('OrderScreen')}

          />
        </View>

        <View style={styles.container}>
          <AccountCard
            name={ICONS.myAddress}
            AccountCardText={I18n.t('myAddress')}
            onPress={() => this.navigateTo('AddressScreen')}
          />


          <AccountCard
            name={ICONS.heart_filled}
            AccountCardText={I18n.t('myWishlist')}
            onPress={() => navigateToWishlist(navigation)}

          />

        </View>
        <View style={styles.language}>
          <AccountCard
            name={ICONS.language}
            AccountCardText={I18n.t('language')}
            style={styles.languageCard}
            onPress={() => this.ActionSheet.show()}
          />
        </View>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={I18n.t('selectLanguage')}
          options={[...LANGS.map(lang => lang.name), I18n.t('cancel')]}
          cancelButtonIndex={2}
          destructiveButtonIndex={this.selectedLangIndex()}
          onPress={this.applyLanguage}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    lang: state.lang
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    applyLanguage
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(More);

