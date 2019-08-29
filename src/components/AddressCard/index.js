import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import I18n from '../../i18n';
import { AppText } from '../AppText';
import { AppIcon, PressedIcon } from '../Icons';
import { ICONS, COLORS, SCREEN } from '../../common';



class AddressCard extends React.Component {

    render() {


        const { address, number, removeAddress, editAddress } = this.props;
        const { telephone, string } = address;
        return (
            <View>

            <View style={styles.container} >

                {/* <View style={styles.header} >
                    <AppText style={styles.headerText} >{`${I18n.t('savedAddress')} : ${number}`}</AppText>
                </View> */}
                <View style={styles.body} >
                    <View style={styles.dataContainer} >
                        <View style={styles.address} >
                            {/* <AppIcon name={ICONS.profile} /> */}
                            <AppText numberOfLines={3} style={styles.nameText} >{`${address.firstname} ${address.lastname}`}</AppText>
                        </View>
                        <View style={styles.address} >
                            {/* <AppIcon name={ICONS.map_marker} /> */}
                            <AppText numberOfLines={3} style={styles.addressText} ><AppText style={{fontWeight:"bold"}} >{I18n.t('ad')}</AppText> {string}</AppText>
                        </View>

                        <View style={styles.address} >
                            {/* <AppIcon name={ICONS.phone} /> */}
                            <AppText numberOfLines={1} style={styles.addressText} ><AppText style={{fontWeight:"bold"}} >{I18n.t('tl')}</AppText> {telephone}</AppText>
                        </View>
                    </View>
                
                </View>
                <View style={styles.iconContainer} >
                        <PressedIcon
                            onPress={editAddress}
                            size={25}
                            color={'#aaa'}
                            name={ICONS.pen}
                            style={[styles.icon, {marginTop:-5, marginRight:-5}]}
                            underlayColor={'transparent'}
                        />
                        <PressedIcon
                            onPress={removeAddress}
                            size={25}
                            color={COLORS.google}
                            name={ICONS.delete}
                            style={[styles.icon, {marginBottom:-5,  marginRight:-5}]}

                            underlayColor={'transparent'}
                        />


                    </View>
            </View>
            </View>

        );
    }
}



export { AddressCard };

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        width: SCREEN.WIDTH * 0.95,
        backgroundColor: COLORS.background,
        shadowColor: COLORS.shadow,
        elevation: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        marginBottom: 10,
        padding: 10,
    },
    header: {
        backgroundColor: COLORS.border,
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.border
    },
    headerText: {
        fontWeight: 'bold',
        color: COLORS.facebook,
        textAlign: 'left',
        fontSize: 15,
        padding: 5,
    },
    body: {
        flex: 1,
        width: "100%",
        padding: 5,
        flexDirection: 'row'
    },
    dataContainer: {
        width: "85%",
        justifyContent: 'center'
    },
    iconContainer: {
        width: "15%",
        justifyContent: "space-between"
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameText:{
        fontWeight:"bold",
        textTransform:"uppercase",
        fontSize:15
    },
    addressText: {
        width: "90%",
        textAlign: 'left',
        marginTop:5,
    },
    icon: {
        margin: 0,
        // backgroundColor:'black',
        borderRadius:null,
        width: null,
        height: null,
    }
})