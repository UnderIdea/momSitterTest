import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import Contents from './Contents';

const ClickedImage = props => {
  const { clickedImage } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={clickedImage} />
      <Contents data={clickedImage} />
    </View>
  );
};

export default ClickedImage;
