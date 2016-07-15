import React, { Component } from 'react';
import {
  StyleSheet,
  PixelRatio,
  Image
} from 'react-native';

import countryFlags from './constants/countryFlags'

const generateFlagStyles = (width, height)=>{
  return StyleSheet.create({
    flag: {
      resizeMode: 'contain',
      width: width,
      height: height,
      borderWidth: 1 / PixelRatio.get(),
      borderColor: '#eee',
      opacity: 0.8
    }
  });
}

class Flag extends Component {
  render() {
    let flagStyle = generateFlagStyles(this.props.width, this.props.height);
    return (
        <Image
          style={flagStyle.flag}
          source={{uri: countryFlags[this.props.countryCode]}}
          />
    );
  }
}

module.exports = Flag;