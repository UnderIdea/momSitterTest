import React from 'react';
import { View, Animated, Easing } from 'react-native';
import SwipeButtons from './SwipeButtons';
import Gallery from './Gallery';
import styles from './styles';
import { windowWidth } from '../../../utils/screen';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselCount: 0,
      distanceValue: new Animated.Value(0)
    };
  }

  //state
  // carouselCount는 이미지 순서를 나타냄
  // distanceValue는 animation을 위해 이동하는 거리

  //AnimatedHandle 매개변수
  // carouselCountCalculValue는 state.carouselCount에 들어가는 매개변수
  // durationValue은 animation 이동 시간

  AnimatedHandle = (carouselCountCalculValue, carouselCount, durationValue) => {
    const { distanceValue } = this.state;
    this.setState({ carouselCount: carouselCountCalculValue });
    Animated.timing(distanceValue, {
      toValue: -windowWidth * 0.5 * carouselCount,
      duration: durationValue,
      easing: Easing.linear
    }).start();
  };

  moveAnimation = right => {
    const { carouselCount } = this.state;
    const { data } = this.props;

    if (right) {
      if (carouselCount == data.length - 2) {
        this.AnimatedHandle(0, 0, 500);
      } else if (carouselCount === 0) {
        this.AnimatedHandle(1, 1, 500);
      } else if (carouselCount > 0) {
        this.AnimatedHandle(carouselCount + 1, carouselCount + 1, 500);
      }
    } else {
      if (carouselCount === 0) {
        this.AnimatedHandle(data.length - 2, data.length - 2, 500);
      } else if (carouselCount > 0) {
        this.AnimatedHandle(carouselCount - 1, carouselCount - 1, 500);
      }
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.moveAnimation(true);
    }, 4000);
  }

  render() {
    const { data, clickImage } = this.props;
    const { distanceValue } = this.state;

    return (
      <View style={styles.container}>
        <Gallery data={data} distanceValue={distanceValue} clickImage={clickImage} />
        <SwipeButtons clickButton={this.moveAnimation} />
      </View>
    );
  }
}
