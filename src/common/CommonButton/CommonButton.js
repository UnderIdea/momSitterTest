import React from 'react';
import { Button } from 'react-native';

const CommonButton = props => {
  const { onPress, title } = props;
  return <Button color="#ff7f00" onPress={onPress} title={title} />;
};

export default CommonButton;
