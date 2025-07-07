import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const Basic = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };
  return (
    <View>
      {/* NOTE: View Component */}
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>

      {/* NOTE: Text Component */}
      <Text style={styles.myFirstText}>This is a simple text component</Text>
      <Text style={styles.nestedText}>
        Text components can be <Text style={styles.boldedText}>nested</Text>{' '}
      </Text>

      {/* NOTE: Image Component */}
      <Image
        style={styles.remoteImage}
        source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
      />

      <Image
        style={styles.localImage}
        source={require('../../assets/2-art.jpg')}
      />

      {/* NOTE: BUtton component */}
      <Button
        disabled={false}
        color={'red'}
        title="Click Me"
        onPress={incrementCount}
      />
      <Text>Count is {count}</Text>
    </View>
  );
};

export default Basic;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  myFirstText: {
    fontSize: 30,
  },
  nestedText: {
    fontSize: 18,
  },
  boldedText: {
    fontWeight: 'bold',
  },
  remoteImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  localImage: {
    width: 'auto',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});
