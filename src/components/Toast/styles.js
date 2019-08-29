import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    defultStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        paddingHorizontal: 15,
        maxWidth: "80%",
        backgroundColor : "#444",
        height:40,
        minWidth: '50%'
    },
    success: {
        backgroundColor: 'rgba(60,157,79,1)'
    },

    error: {
        backgroundColor: "rgba(251,66,54,1)"
    },
    warningStyle: {
        backgroundColor: "rgba(248,189,76,1)"
    },
    toastText:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default styles;