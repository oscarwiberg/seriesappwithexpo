import { StyleSheet, Text, SafeAreaView } from 'react-native';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';


export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <SearchScreen />
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

