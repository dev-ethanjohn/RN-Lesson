import { ScrollView, StyleSheet, View } from 'react-native';
import Basic from './src/components/Basic';
import FlexLayout from './src/components/FlexLayout';
import ScrollViewComponent from './src/components/ScrollViewComponent';
import Styling from './src/components/Styling';
import TextInputComponent from './src/components/TextInput';
import Touchable from './src/components/Touchable';

function App() {
  return (
    <View style={styles.container}>
      {/* NOTE: `contentContainerStyle styles the inner scrollview / or the content, while `style` will be for the outer wrapper */}
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scrollviewContent}
      >
        <Basic />
        <TextInputComponent />
        <ScrollViewComponent />
        <Styling />
        <FlexLayout />
        <Touchable />
      </ScrollView>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  scrollviewContent: {
    padding: 20,
  },
});
