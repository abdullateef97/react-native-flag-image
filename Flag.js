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
      width: width,
      height: height
    }
  });
}

class Flag extends Component {
  render() {
    let styles = generateFlagStyles(this.props.width, this.props.height);
    return (
        <Image
          style={styles.flag}
          source={{uri: countryFlags[this.props.countryCode]}}
          />
    );
  }
}

module.exports = Flag;