import React from 'react';
import { Text, View } from 'react-native';

const Bar = props => {
  const { styleValue, text } = props;
  return (
    <View style={styleValue.container}>
      <Text style={styleValue.text}>{text}</Text>
    </View>
  );
};

export default Bar;
