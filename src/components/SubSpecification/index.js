import React,{Component} from 'react';
import { View, StyleSheet, TouchableOpacity,FlatList ,I18nManager } from 'react-native';
import { ICONS, COLORS, SCREEN } from '../../common';
import { AppText } from '../AppText';
import I18n from '../../i18n';
import { AppIcon } from '../Icons/AppIcon';
class  SubSpecification extends Component{ 

    renderItem = ({ item }) => {
        return (
          <View style={styles.subSpecif} >
            <AppText style={styles.keyText} >{item.key}</AppText>
            <AppText> : </AppText>
            <AppText style={styles.valueText} >{item.value}</AppText>
          </View>
        )
      }
    render(){
        const {data,onPress} = this.props;
    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.container} >
            <View style={styles.header} >
                <AppText style={styles.headerText} >{I18n.t('specifications')}</AppText>
                <View style={styles.readMore}>
                    <AppText style={styles.readMoreText}>{I18n.t("readMore")}</AppText>
                    <AppIcon name={I18nManager.isRTL ? ICONS.LeftArrow : ICONS.RightArrow} color={"#222"} size={16} style={{margin:0}} />
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `item--${item.id}--${index}`}
              />
        </TouchableOpacity>
    );
}
}



export { SubSpecification };

const styles = StyleSheet.create({
    container: {
        alignSelf:"center",
        backgroundColor:COLORS.white,
        padding:12,
        paddingBottom:16,
        width : SCREEN.WIDTH - 20,
        marginTop:10,
        borderRadius:3
    },
    header: {
        marginBottom:10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        color:COLORS.main_text
    },
    readMore: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    readMoreText: {
        marginLeft: 5,
        color: COLORS.main_text
    },
    subSpecif: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    keyText: {
        flex: 0.5,
        textAlign: 'left'
    },
    valueText: {
        flex: 0.5,
        marginLeft: 10,
        textAlign: 'left'
    },

})