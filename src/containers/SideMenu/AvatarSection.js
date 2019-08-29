import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import I18n from '../../i18n';
import { IMAGES, COLORS } from '../../common';
import PropTypes from 'prop-types';
import { AppText } from '../../components';
import { withNavigation } from 'react-navigation';
import { navigateToLogin, navigateToProfile } from '../../navigation/Navigator';
class AvatarSection extends Component {
  constructor(props) {
    super(props)
    this.navigateTo = this.navigateTo.bind(this)
  }
  navigateTo() {
    const { user, navigation } = this.props;
    navigation.closeDrawer()
    if (user) {
      navigateToProfile(navigation);
    } else {
      navigateToLogin(navigation)
    }
  }
  render() {
    const { user } = this.props;
    const userImageSource = user && user.image ? { uri: user.image } : IMAGES.avatar;
    let welcomeOrName = user && user.displayname ? user.displayname : I18n.t('welcome');
    let loginOrMail = user && user.email ? user.email : I18n.t('loginOrSignUp');
    let tintColor = user && user.image ? null : COLORS.light_gray;

    return (
      <View style={styles.avatarContainer}>
        <TouchableOpacity activeOpacity={0.5}
          style={styles.avatarImageContainer}
          onPress={() => this.navigateTo()} >
          <Image source={userImageSource} style={[styles.avatarImage, { tintColor }]} />
        </TouchableOpacity>
        <View style={styles.textContainer} >
          <AppText style={[styles.textStyle, { fontWeight: 'bold', fontSize: 20 }]}>{welcomeOrName}</AppText>
          <AppText style={styles.textStyle} onPress={()=> this.navigateTo()} >{loginOrMail}</AppText>
        </View>
      </View>
    )
  }
}
AvatarSection.propTypes = {
  user: PropTypes.object
}

export default withNavigation(AvatarSection)

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: COLORS.main,
    flexDirection: 'row',
    paddingTop:20,
    height: 150,
    alignItems: 'center'
  },
  avatarImageContainer: {
    marginHorizontal: 15,
    width: 70,
    height: 70,
    borderRadius: 30,
    overflow: 'hidden'
  },
  avatarImage: {
    flex: 1,
    width: null,
    height: null
  },
  textContainer: {
    justifyContent: 'center'
  },
  textStyle: {
    color: COLORS.white,
  }
})
