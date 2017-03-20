/**
 * react-flexbox-grid-jss
 *
 * Copyright © 2017 Zetoff, Pol Guixe. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  '@media only screen and (min-width: 48em)': {
    container: {
      // FIXME this needs is a problem with a layout with drawer
      // May be use 80%?
      width: '49rem',
    },
  },
  '@media only screen and (min-width: 64em)': {
    container: {
      // FIXME this needs is a problem with a layout with drawer
      // May be use 80%?
      width: '65rem',
    },
  },
  '@media only screen and (min-width: 75em)': {
    container: {
      // FIXME this needs is a problem with a layout with drawer
      // May be use 80%?
      width: '76rem',
    },
  },
};

class Container extends React.PureComponent {
  render() {
    return (
      <div className={this.props.classes.container}>
        {this.props.children}
      </div>
    );
  }
}

export default injectSheet(styles)(Container);
