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

// Define base style
const styles = {
  col: {}
}

class Col extends React.PureComponent {

  render() {
    return (
      <div className={this.props.classes.col}>
        {this.props.children}
      </div>
    );
  }
}

export default injectSheet(styles)(Col);
