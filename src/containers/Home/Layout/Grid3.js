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

class Grid3 extends Component {
  renderItem = ({ item }) => {
    const { data, navigation } = this.props
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
          
          numColumns={3}
          contentContainerStyle={{}}
          renderItem={this.renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index) => `item--${item.id}--${index}` }
        />
      </View>
    )
  }
}

export default Grid3;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
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
  categoryItem: {
    height:(SCREEN.WIDTH-40)/3,
    width: (SCREEN.WIDTH-40)/3  ,
    borderRadius:6,
    overflow:"hidden",
    margin:5,
  },
  image: {
    flex: 1
  },
  name: {
    textAlign: 'center',
    color: COLORS.text_light,
    padding: 2
  },

  categoriesName: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  flatList: {
    flex:1,
    marginVertical : -5,
  }
})
