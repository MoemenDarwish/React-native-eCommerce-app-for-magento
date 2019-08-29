import React, { Component } from 'react';
import { View, ScrollView, Button as TButton, FlatList } from 'react-native';
import { AppText } from '../../../components';
import I18n from '../../../i18n';
import styles from "./styles";
import { navigateToAuth } from '../../../navigation/Navigator';
class ProductDescription extends Component {
    static navigationOptions = () => {
        return {
            title: I18n.t('desc_spec')
        }
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.subSpecif} >
                <AppText style={styles.keyText} >{item.key}</AppText>
                <AppText> : </AppText>
                <AppText style={styles.valueText} >{item.value}</AppText>
            </View>
        )
    }

    render() {
        const { attributes, description } = this.props.navigation.getParam('data', '')
        return (
            <ScrollView style={styles.container} >
          <TButton title={"LOGIN"} onPress={()=>navigateToAuth(this.props.navigation)} />

                <View style={styles.section} >
                    <View style={styles.header} >
                        <AppText style={styles.headerText} >{I18n.t('description')}</AppText>
                    </View>
                    <View>
                        <AppText>{description}</AppText>
                    </View>
                </View>

                <View style={styles.section} >

                    <View style={styles.header} >
                        <AppText style={styles.headerText} >{I18n.t('specifications')}</AppText>
                    </View>

                    <FlatList
                        data={attributes}
                        renderItem={this.renderItem}
                        keyExtractor={item => JSON.stringify(item.id)}
                        ListEmptyComponent
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        );
    }
}


export default ProductDescription;


