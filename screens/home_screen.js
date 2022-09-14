import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-paper'
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button textColor='white' style={styles.btn}>To Login</Button>
      <StatusBar style="auto" />
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

  btn: {
    backgroundColor: 'green',
  }
});
