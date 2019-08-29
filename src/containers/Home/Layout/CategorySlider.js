import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import { navigateToCategory, navigateToProduct } from '../../../navigation/Navigator'
import { COLORS, SCREEN } from '../../../common';
import { base_url } from '../../../Configuration';

class CategorySlider extends Component {
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
          horizontal
          renderItem={this.renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index) => `item--${item.id}--${index}` }
        />
      </View>
    )
  }
}

export default CategorySlider

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  categoryName: {
    justifyContent: 'center',
    marginTop: 3,
    backgroundColor: COLORS.background,
    alignSelf: 'stretch',
    marginHorizontal: 5,
    height: 30,
  },
  categoryNameText: {
    marginLeft: 10,
    fontWeight: 'bold'
  },
  categoryItem: {
    height: SCREEN.WIDTH * 0.55 * 0.45 ,
    width: SCREEN.WIDTH * 0.55,
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
    borderWidth: 1,
    marginRight: 10,
    borderRadius:7,
    overflow:"hidden"
  },
  image: {
    flex: 1
  },
  name: {
    textAlign: 'center',
    color: COLORS.text_light,
    padding: 2
  },
  flatList: {
    paddingHorizontal: 10,
  }
})
