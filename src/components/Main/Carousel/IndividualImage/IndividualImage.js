import React from 'react';
import { Image, Animated, TouchableOpacity } from 'react-native';
import styles from './styles';
import Contents from './Contents';
import { windowWidth } from '../../../../utils/screen';

const IndividualImage = props => {
  const { distanceValue, data, clickImage } = props;

  return (
    <Animated.View style={{ left: distanceValue }}>
      <TouchableOpacity style={styles.button} onPress={() => clickImage(data.source)}>
        <Image style={[styles.image, { width: windowWidth * 0.5 }]} source={data.source} />
        <Contents data={data} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default IndividualImage;
