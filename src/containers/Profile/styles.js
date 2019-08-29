import { StyleSheet, I18nManager } from 'react-native';
import { COLORS, SCREEN } from '../../common';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    height: 150,
    backgroundColor: COLORS.disabled_icon,
  },

  avatarImage: {
    margin:0,
    height : SCREEN.HEIGHT*0.25,
    alignItems:"center",
    justifyContent:"center"
},
  inputContainer: {
    paddingTop:5,
    backgroundColor:'rgba(255,255,255,0.85)',
    width :"80%",
    paddingBottom:15,
    borderRadius:15,
    paddingHorizontal:15,
    alignSelf:"center",
    justifyContent: 'center',
    marginBottom: 10
},
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 7,
    borderColor: COLORS.border,
    //position: 'absolute',
    overflow: "visible",
    backgroundColor: 'red',
    alignSelf: 'center',
    backgroundColor: COLORS.light_gray,
  },
  avatarAndIcon: {
    width: 150,
    height: 150,
    flex: 1,
    backgroundColor: 'red',
    alignSelf: 'center',
    // position:'absolute'
  },
  cameraIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    right:5,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 20,
    backgroundColor: COLORS.background
  },
  fullName: {
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold'
  },
  InfoContainer: {
    width:"80%",
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 10,
    marginTop:20
  },
  emailContainer: {
    height: 51,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingTop: 17,
    width: "80%",
    marginBottom: 10
  },
  emailText: {
    fontSize: 15,
    padding: 5,
    minHeight: 34,
    color: COLORS.placeholder,
    textAlign: I18nManager.isRTL ? 'right' : 'left'
  },
  // buttonsContainer: {
  //   alignItems: 'center',
  // },
  // saveButton: {
  //   backgroundColor: COLORS.main,
  //   height : 45,
  //   alignSelf: 'center',
  //   marginBottom: 15
  // },
  saveText: {
    fontWeight: 'bold',
    fontSize: 15
  },
  resetButton: {
    height : 45,
    width:"100%",
    borderRadius:5,
    width:"80%",
    height:45,
    backgroundColor: COLORS.text_mid
  },
  resetPassText: {
    fontWeight: 'bold',
    color: "#fff"
  },

  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
},
saveButton: {
    width:"100%",
    borderRadius:5,
    backgroundColor: COLORS.main,
    height:45,
    marginBottom:0
},

forgetPassContainer: {
  alignItems: "center",
  // marginHorizontal: 40,
  // marginVertical: 10,
  marginTop:5,
  marginBottom:10

},
forgetPass: {
  fontSize: 13,

  color: "#777",
  fontWeight: 'bold'
},
})
export default styles;  