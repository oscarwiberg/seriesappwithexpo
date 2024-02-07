import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailScreen = ({route}) => {

  console.log("------------");
  const serie = route.params.serieObj.show;

  return (
    <View>
      {serie.image && serie.image.medium ? (
        <Image style={styles.image} source={{ uri: serie.image.medium }} />
        ) : (
        <Text style={styles.noPictureText}>No picture</Text>
        )}
      <Text>{serie.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50
  },
  noPictureText: {
    fontSize: 10,
    color: 'red',
  }
})

export default DetailScreen;

//  <Image source={{ uri: item.show.image.original }} />
// 