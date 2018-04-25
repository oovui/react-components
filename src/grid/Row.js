import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { pxToNumber } from '../utils/index';

class Row extends (PureComponent || Component) {
	
	constructor(props){
    super(props);
    this.renderChildren = this.renderChildren.bind(this)
	}

  renderChildren(gutter,style){
    if(pxToNumber(gutter)!=0){
      let styles = Object.assign({}, {
        paddingLeft: pxToNumber(gutter) / 2,
        paddingRight: pxToNumber(gutter) / 2,
      }, style);
      return React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          style: styles
        })
      })  
    }else{
      return this.props.children
    }
  }

  render() {
    const { gutter,className, style, prefix, ...others } = this.props;

    const classes = cls({
      [`${prefix}-row`]: true,
      [className]: className,
    });

    return (
      <div {...others} className={classes}>
        {this.renderChildren(gutter,style)}
      </div>
    );
  }
}

Row.propTypes = {
	className: PropTypes.string,
  prefix: PropTypes.string,
  gutter: PropTypes.string,
};

Row.defaultProps = {
  prefix: 'oov',
  gutter: '0'
};

export default  Row;