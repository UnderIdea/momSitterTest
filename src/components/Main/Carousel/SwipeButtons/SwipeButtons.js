import React from 'react';
import CommonButton from '../../../../common/CommonButton';
import { View } from 'react-native';
import styles from './styles';

const SwipeButtons = props => {
  return (
    <View style={styles.container}>
      <CommonButton onPress={() => props.clickButton(false)} title="<<" />
      <CommonButton onPress={props.clickButton} title=">>" />
    </View>
  );
};

export default SwipeButtons;
