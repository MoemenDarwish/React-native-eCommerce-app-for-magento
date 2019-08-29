import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from '../../i18n';
import { TextInput, AppText, Button, AppIcon } from '../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "./styles";
import { navigateToResetPassword } from '../../navigation/Navigator';
// import PhotoUpload from 'react-native-photo-upload';
import { IMAGES, ICONS, COLORS } from '../../common';
import { get_profile, update_profile } from '../../redux/actions';
import { isEmpty } from '../../utils/validation';
import { toast } from '../../utils/Toast';
import LinearGradient from 'react-native-linear-gradient';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      submitted: false
    }
  }


  static navigationOptions = ()=>{
    return{
      title : I18n.t('myProfile')
    }
  }

  async componentDidMount() {
    const { user, get_profile } = this.props;
    await get_profile(user.id);
  }

  onPressUpdateProfile = () => {
    this.setState({ submitted: true })
    const { firstname, lastname } = this.state;
    const { email, id } = this.props.user;
    const valid = !isEmpty({ firstname, lastname });
    if (valid) {
      this.props.update_profile({ firstname, lastname, email, id })
    } else {
      toast(I18n.t('pleaseEnterData'));
    }
  }


  render() {
    const { displayname, email, image } = this.props.user;
    const { navigation } = this.props;
    const { firstname, lastname, submitted } = this.state;
    const avatarImage = image ? { url: image } : IMAGES.avatar;
    return (
      <LinearGradient colors={COLORS.secondGradient} style={{ flex: 1 }} >   
      <KeyboardAwareScrollView style={styles.container} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.container} >
        <View style={styles.avatarImage} >

        <Image source={avatarImage} style={[styles.avatar, { tintColor: !image ? COLORS.background : null }]} />
        </View>

          {/* <View style={styles.avatarContainer} />
          <View style={{flex:1,position:'absolute',top:55,alignSelf:'center'}}>

            <PhotoUpload
              //activeOpacity={1}
              containerStyle={{ flex: null }}
              onPhotoSelect={avatar => {
                if (avatar) {
                  console.log(avatar);
                }
              }}>
              <Image source={avatarImage} style={[styles.avatar, { tintColor: !image ? COLORS.background : null }]} />
              <View style={styles.cameraIcon}>
                <AppIcon name={ICONS.camera} style={styles.icon} />
              </View>
            </PhotoUpload>
          </View> */}

          <View style={styles.inputContainer} >
            <TextInput
              placeholder={I18n.t('firstName')}
              required={submitted && firstname.length == 0}
              onChangeText={firstname => this.setState({ firstname })}
              value={firstname}
            />
            <TextInput
              placeholder={I18n.t('lastName')}
              onChangeText={lastname => this.setState({ lastname })}
              required={submitted && lastname.length == 0}
              value={lastname}
            />
            <View style={styles.emailContainer} >
              <AppText style={styles.emailText} >{email}</AppText>
            </View>


            <View style={styles.buttonsContainer} >
            <Button title={I18n.t('save')} style={styles.saveButton}
              onPress={() => this.onPressUpdateProfile()}
              titleStyle={styles.saveText} />

          </View>

          </View>


          {/* Section for Forget Password */}
          <View style={styles.forgetPassContainer}>
            <AppText
              style={styles.forgetPass}
              onPress={() => navigateToResetPassword(navigation)}
            >{I18n.t('resetPassword')}</AppText>
          </View>
          
        </View>
      </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    get_profile,
    update_profile
  }, dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(Profile);























