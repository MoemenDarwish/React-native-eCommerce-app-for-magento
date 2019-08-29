import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../common';
import { Header } from 'react-navigation';
const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: COLORS.main,
        height: Platform.OS == 'ios' ? Header.HEIGHT * 0.9 : Header.HEIGHT,
        paddingTop: Platform.OS == 'ios' ? Header.HEIGHT * 0.45 : 0,
    },
    authHeader : {
        borderBottomWidth: 0, shadowColor: null, shadowOpacity: null, elevation: null

    },
    tabContainer: {
        backgroundColor: COLORS.main
    },
    headetTitleStyle : {
        color : "#FFF"
    }
});

export default styles;