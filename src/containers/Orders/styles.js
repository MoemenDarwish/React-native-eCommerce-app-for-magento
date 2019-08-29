import { StyleSheet } from 'react-native'
import { COLORS } from '../../common';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    ordersList: {
        flex: 3
    },
    productsList: {
        flex: 1

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: COLORS.background,
        borderBottomWidth: 1,
        borderColor: COLORS.border
    },
    showDetailsText: {
        fontWeight: 'bold',
        marginRight: 10
    }
})

export default styles;