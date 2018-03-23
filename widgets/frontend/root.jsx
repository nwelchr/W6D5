import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

class Root extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="root">
        <Clock />
        <Tabs />
        <Weather />
      </div>
    );
  }

}

export default Root;
