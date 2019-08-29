import React, { Component } from 'react';
import {  FlatList } from 'react-native';
import ReviewItem from './reviewItem';
class ReviewList extends Component {

  renderItem = ({ item }) => {
    return <ReviewItem item={item} style={this.props.itemStyle} horizontal={this.props.horizontal} />
  }
  render() {
    const { reviews, horizontal, listStyle } = this.props;
    return (

      <FlatList
        contentContainerStyle={listStyle}
        data={reviews}
        renderItem={this.renderItem}
        keyExtractor={item => JSON.stringify(item.id)}
        ListEmptyComponent
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={horizontal}
      />

    );
  }
}

export { ReviewList };
