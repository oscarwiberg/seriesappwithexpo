//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import SearchScreen from './components/SearchScreen';
import DetailScreen from './components/DetailScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchScreen/>
      {/* <DetailScreen/> */}
    </SafeAreaView>
  );
} 

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 150,
    marginBottom:65
  },
});

