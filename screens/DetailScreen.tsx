import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailScreen = ({route}) => {

  const serie = route.params.serieObj.show;

  const removeHtmlTags = (string) => {
    return string ? string.replace(/<[^>]+>/g, '') : '';
  };
  

  return (
    <View style = {styles.container}>
      {serie.image && serie.image.medium ? (
        <Image style={styles.image} source={{ uri: serie.image.medium }} />
        ) : (
        <Text style={styles.noPictureText}>No picture</Text>
        )}
      <Text style={styles.heading}>{serie.name}</Text>
      <Text style={styles.serieDetail}>Language: {serie.language ? (serie.language) : 'No language'}</Text>
      <Text style={styles.serieDetail}>Genres:</Text>
        {serie.genres.map((genre, index) => (
          <Text style={styles.detailInfo} key={index}>{genre}</Text> 
        ))}
    
      <Text style={styles.serieDetail}>Rating: {serie.rating && serie.rating.average ? serie.rating.average : 'No rating to be shown'} </Text> 
      <Text style={styles.detailInfo}>{serie.summary ? removeHtmlTags(serie.summary) : 'No Summary'}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20
  },
  image: {
    height: 200,
    width: 150,
  },
  noPictureText: {
    fontSize: 36,
    color: 'red',
    borderStyle: "solid",
    borderWidth: 1,
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
  serieDetail: {
    paddingVertical:5,
  },
  detailInfo: {
    fontWeight: "bold",
  },
})

export default DetailScreen;