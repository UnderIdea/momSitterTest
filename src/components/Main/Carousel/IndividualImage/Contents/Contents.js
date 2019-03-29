import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Contents = props => {
  const { data } = props;

  return (
    <View>
      <Text style={styles.name}>{data.source.name}</Text>
      <Text style={styles.workTime}>{data.source.workTime}시간</Text>
    </View>
  );
};

export default Contents;
