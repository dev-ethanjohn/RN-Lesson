import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlexLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Layout using Flex</Text>
      <Text>Main Axis (Row)</Text>
      <View style={styles.rowContainer}>
        <View style={[styles.box, styles.redbox]} />
        <View style={[styles.box, styles.bluebox]} />
        <View style={[styles.box, styles.greenbox]} />
      </View>

      <Text>Cross Axis (Column)</Text>
      <View style={styles.columnContainer}>
        <View style={[styles.box, styles.redbox]} />
        <View style={[styles.box, styles.bluebox]} />
        <View style={[styles.box, styles.greenbox]} />
      </View>
    </View>
  );
};

export default FlexLayout;

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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  box: {
    width: 50,
    height: 50,
  },
  redbox: {
    backgroundColor: 'red',
  },
  bluebox: {
    backgroundColor: 'blue',
  },
  greenbox: {
    backgroundColor: 'green',
  },
  columnContainer: {
    height: 200,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
