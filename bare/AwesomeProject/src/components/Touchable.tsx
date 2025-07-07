import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const Touchable = () => {
  // const [opacityCount, setOpacityCount] = useState(1);
  const [highlightCount, setHighlightCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Touchable components</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => console.log('Pressed!')}
      >
        <Text style={styles.buttonText}>Touchable opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        underlayColor={'red'}
        style={[styles.button]}
        onPress={() => setHighlightCount(highlightCount + 1)}
      >
        <Text style={styles.buttonText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Touchable;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2196be',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
