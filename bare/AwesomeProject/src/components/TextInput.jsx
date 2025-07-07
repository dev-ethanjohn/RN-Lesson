import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextInputComponent = () => {
  const [value, setValue] = useState('');

  console.log(value);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Text Input component</Text>
      <TextInput
        value={value}
        placeholder={'set value'}
        style={styles.input}
        onChangeText={setValue}
      />
    </View>
  );
};

export default TextInputComponent;

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
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
