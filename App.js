import React from 'react';
import { StyleSheet, View } from 'react-native';
import Bottom from './src/components/Bottom';
import Top from './src/components/Top';
import Main from './src/components/Main';

export default class App extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1
      }
    });

    return (
      <View style={styles.container}>
        <Top />
        <Main />
        <Bottom />
      </View>
    );
  }
}
