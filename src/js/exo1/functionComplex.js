import React from 'react';
import { getData } from './utils';
import MySecondComponentTest from 'my-second-component';

class MyComponentTest extends React.Component {
  render() {

    //on imagine que " products " vient du array que je retrouve dans un json x
    let {
      products
    } = this.props;

    return (
      <MySecondComponentTest items={getData(products)} />
    )

  }
}