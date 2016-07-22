import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

import countryFlags from './constants/countryFlags'

class Flag extends Component {
  render() {
    let dimensionsStyle = {
        width: this.props.width,
        height: this.props.height
    };
    return (
        <Image
          style={[dimensionsStyle, this.props.customStyle]}
          source={{uri: countryFlags[this.props.countryCode]}}
        />
    );
  }
}

Flag.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  countryCode: React.PropTypes.string,
  customStyle: React.PropTypes.object
};

Flag.defaultProps = {
  width: 20,
  height: 30,
  countryCode:'LB'
};

export default Flag;