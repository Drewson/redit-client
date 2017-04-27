import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from './../../containers/Categories';

import styles from './styles.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Categories />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
