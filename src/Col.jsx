/**
 * react-flexbox-grid-jss
 *
 * Copyright © 2017 Zetoff, Pol Guixe. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import _ from 'lodash';
import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';


const curryCalcPercentage = (totalColumns) => {
  return (columns) => (`${columns/totalColumns}%`);
};
const calcPercentage = curryCalcPercentage(12);

// Define base style
const styles = {
  col: {
    boxSizing: 'border-box',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 auto',
    flex: '0 0 auto',
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem',
    '&.reverse':{
      WebkitBoxOrient: 'vertical',
      WebkitBoxDirection: 'reverse',
      MsFlexDirection: 'column-reverse',
      flexDirection: 'column-reverse',
    },
  },
  noWidth:{
    WebkitBoxFlex: 1,
    MsFlexPositive: 1,
    flexGrow: 1,
    MsFlexPreferredSize: 0,
    flexBasis: 0,
    maxWidth: '100%',
  },
  xs: {
    MsFlexPreferredSize: props => calcPercentage(props.xs),
    flexBasis: props => calcPercentage(props.xs),
    maxWidth: props => calcPercentage(props.xs),
  },
  xsOffset: {
    marginLeft: calcPercentage(props.xsOffset),
  },
  sm: {
    '@media only screen and (min-width: 48em)':{ // TODO extract limits to constants
      MsFlexPreferredSize: props => calcPercentage(props.sm),
      flexBasis: props => calcPercentage(props.sm),
      maxWidth: props => calcPercentage(props.sm),
    },
  },
  smOffset: {
    '@media only screen and (min-width: 48em)':{
      marginLeft: props => calcPercentage(props.smOffset),
    }
  },
  md: {
    '@media only screen and (min-width: 64em)': { // TODO extract limits to constants
      MsFlexPreferredSize: props => calcPercentage(props.md),
      flexBasis: props => calcPercentage(props.md),
      maxWidth: props => calcPercentage(props.md),
    },
  },
  mdOffset: {
    '@media only screen and (min-width: 64em)': { // TODO extract limits to constants
      marginLeft: calcPercentage(props.mdOffset),
  },
},
  lg: {
    '@media only screen and (min-width: 75em)': { // TODO extract limits to constants
      MsFlexPreferredSize: props => calcPercentage(props.lg),
      flexBasis: props => calcPercentage(props.lg),
      maxWidth: props => calcPercentage(props.lg),
    },
  },
  lgOffset: {
    '@media only screen and (min-width: 75em)': { // TODO extract limits to constants
      marginLeft: calcPercentage(props.lgOffset),
    },
  },
}

class Col extends React.PureComponent {

  render() {
    const {reverse, xs, xsOffset, sm, smOffset, md, mdOffset, lg, lgOffset} = this.props;
    return (
      <div className={classNames({
        [classes.col]: true,
        ['reverse']: reverse,
        [classes.xs.noWidth]: !_.isNumber(xs), // FIXME improve logic
        [classes.xs.width]: _.isNumber(xs),
        [classes.xs.offset]: _.isNumber(xsOffset),
        [classes.sm.noWidth]: !_.isNumber(sm), // FIXME improve logic
        [classes.sm.width]: _.isNumber(sm),
        [classes.sm.offset]: _.isNumber(smOffset),
        [classes.md.noWidth]: !_.isNumber(md), // FIXME improve logic
        [classes.md.width]: _.isNumber(md),
        [classes.md.offset]: _.isNumber(mdOffset),
        [classes.lg.noWidth]: !_.isNumber(lg), // FIXME improve logic
        [classes.lg.width]: _.isNumber(lg),
        [classes.lg.offset]: _.isNumber(lgOffset),
      })}>
        {this.props.children}
      </div>
    );
  }
}

export default injectSheet(styles)(Col);
