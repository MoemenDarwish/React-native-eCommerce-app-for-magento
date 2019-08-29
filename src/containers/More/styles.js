import { StyleSheet } from 'react-native';
import { SCREEN } from '../../common';

const styles = StyleSheet.create({
    fullContainer: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: 5
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5,
    },
    language: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    languageCard: {
        width: SCREEN.WIDTH * 0.94
    }
})

export default styles;