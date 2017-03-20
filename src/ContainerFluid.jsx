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
  containerFluid: {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '2rem',
    paddingLeft: '2rem',
  },
};

class ContainerFluid extends React.PureComponent {
  render() {
    return (
      <div className={this.props.classes.containerFluid}>
        {this.props.children}
      </div>
    );
  }
}

export default injectSheet(styles)(ContainerFluid);
