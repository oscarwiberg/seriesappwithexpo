import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { searchSeries } from '../services/api';

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchSeries(query);
      setResults(response.data);
    } catch (error) {
      console.error('Error during search:', error.message);
    }
  };

  const renderListItem = ({ item }) => {
    return (
      <View style = {styles.itemWrapper}>
        <Image style = {styles.itemImage} source={{uri: item.show.image.medium}} />
        <View style = {styles.textContentWrapper}>
        <Text style = {styles.itemTitle}>{item.show.name}</Text>
        {item.show.rating && item.show.rating.average ? (<Text style = {styles.itemRating}>{item.show.rating.average}</Text>) : (<Text style = {styles.itemRating}>No rating to be shown</Text>)}
        </View>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Search TV Series"
        value={query}
        onChangeText={(text) => setQuery(text)}
        style= {styles.searchInput}
      />
      <Button title="Search series" onPress={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={renderListItem}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    itemWrapper: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    itemImage: {
        width: 50,
        height: 50,
        marginRight: 16
    },
    textContentWrapper: {
        justifyContent: "space-around"
    },
    itemTitle: {
        fontSize: 16,
    },
    itemRating: {
        color: "#777",
    },
    searchInput: {
        borderWidth: 2,
        borderColor: "#ddd",
        borderRadius: 5,
        width:200,
        height:50,
        alignSelf: "center",
        marginBottom: 30,
        textAlign: "center",
        fontSize: 16,
    },
})

export default SearchScreen;