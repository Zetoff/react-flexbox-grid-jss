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
import classNames from 'classnames';

// Define base style
const styles = {
  row: {
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 1 auto',
    WebkitBoxFlex: 0,
    MsFlex: '0 1 auto',
    flexDirection: 'row',
    WebKitBoxOrient: 'horitzontal',
    WebKitBoxDirection: 'normal',
    MsFlexDirection: 'row',
    flexWrap: 'wrap',
    MsFlexWrap: 'wrap',
    marginRight: '-0.5rem',
    marginLeft: '-0.5rem',
    fallbacks: [
      { display: '-webkit-box' },
      { display: '-ms-flex' },
    ],
    '&.reverse': {
      WebkitBoxOrient: 'horizontal',
      WebkitBoxDirection: 'reverse',
      MsFlexDirection: 'row-reverse',
      flexDirection: 'row-reverse',
    },
  },
};

class Row extends React.PureComponent {
  render() {
    const {classes, reverse} = this.props;
    console.log('reverse: ', reverse);
    console.log(classes);
    return (
      <div className={classNames({
        [classes.row]: true,
        ['reverse']: reverse,
      })}>
        {this.props.children}
      </div>
    );
  }
}

export default injectSheet(styles)(Row);
