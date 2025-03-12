import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState } from 'react';


const App = () => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isHungry ? "I'm hungry!" : "I'm full!"}
      </Text>
      <Button title="Feed Me" onPress={() => setIsHungry(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});

export default App;