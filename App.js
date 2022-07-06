import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import Title from './.expo/src/componets/Title/index.js';
import Main from './.expo/src/componets/Title/Main/index.js';

export default function App() {
  return (
    <View style={styles.container}>
     <Title/>
     <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
