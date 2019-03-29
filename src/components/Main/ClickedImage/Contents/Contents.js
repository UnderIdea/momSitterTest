import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Contents = props => {
  const { data } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        {data.name} - {data.workTime}시간
      </Text>
      <Text style={styles.text}>"{data.text}"</Text>
    </View>
  );
};

export default Contents;
