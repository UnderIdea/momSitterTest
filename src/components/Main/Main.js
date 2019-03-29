import React from 'react';
import { View } from 'react-native';
import ClickedImage from './ClickedImage';
import Carousel from './Carousel';
import styles from './styles';
import data from '../../data';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedImage: data[0].source
    };
  }

  clickImage = image => {
    this.setState({ clickedImage: image });
  };

  render() {
    const { clickedImage } = this.state;

    return (
      <View style={styles.carouselContainer}>
        <ClickedImage data={data} clickedImage={clickedImage} />
        <Carousel data={data} clickImage={this.clickImage} />
      </View>
    );
  }
}
