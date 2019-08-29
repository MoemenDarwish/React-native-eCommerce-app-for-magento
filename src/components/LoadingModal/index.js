import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Spinner } from '../Spinner';
import { COLORS } from '../../common';



class  LoadingModal extends React.Component{
    render(){
        return <Modal
        visible={this.props.visible}
        transparent={true}
        style={styles.modal}
        onRequestClose={() => { }}
    >
        <View style={styles.container} >
            <Spinner color={COLORS.main} size={"large"} />
        </View>
    </Modal>
    }
} 

export { LoadingModal };




const styles = StyleSheet.create({
    modal: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    },
})