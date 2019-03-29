import React from 'react';
import { View } from 'react-native';

import IndividualImage from '../IndividualImage';

export default class Gallery extends React.Component {
  render() {
    const { data, clickImage, distanceValue } = this.props;

    return (
      <View style={{ flexDirection: 'row' }}>
        {data.map((image, i) => (
          <IndividualImage
            key={i}
            data={image}
            distanceValue={distanceValue}
            clickImage={clickImage}
          />
        ))}
      </View>
    );
  }
}
