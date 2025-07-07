import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Styling = () => {
  return (
    //NOTE:  inline styles
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          Inline Styling
        </Text>
        <View
          style={[
            styles.combinedStyle,
            {
              borderWidth: 2,
              borderColor: 'purple',
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

export default Styling;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  combinedStyle: {
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
