import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import { navigateToCategory, navigateToProduct } from '../../../navigation/Navigator'
import { base_url } from '../../../Configuration';
import { SCREEN } from '../../../common';

class Banner extends Component {
  renderItem = ({ item }) => {
    const {  navigation } = this.props
      let navigation_data = { id : item.navigation_id, name : item.navigation_name };
      let image = `${base_url}/media/${item.image_path}`

      return (
        <TouchableOpacity
          style={styles.categoryItem}
          activeOpacity={0.7}
          onPress={ 
            item.navigation_type == 'category' ? 
              () => navigateToCategory(navigation, navigation_data):
              ()=> navigateToProduct(navigation, navigation_data)
            }
        >
          <Image
            source={{ uri: image}}
            style={styles.image}
          />
        </TouchableOpacity>
      )
  }
  render() {
    const { row } = this.props
    return (
      <View style={styles.container}>

        <FlatList
          style={styles.flatList}
          data={row.data}
          contentContainerStyle={{}}
          renderItem={this.renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index) => `item--${item.id}--${index}` }
        />
      </View>
    )
  }
}

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:10,
    marginBottom: 10
  },
  categoryItem: {
    width: SCREEN.WIDTH -20,
    height: (SCREEN.WIDTH)*0.4 ,
    borderRadius:6,
    overflow:"hidden"
  },
  image: {
    flex: 1
  },
  flatList: {
    flex:1,
  }
})
