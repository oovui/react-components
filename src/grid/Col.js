import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';

class Col extends (PureComponent || Component) {
	
  render() {

    const { span, offset, className, prefix, ...others } = this.props;
    const classes = cls({
      [`${prefix}-col`]: true,
      [`${prefix}-col-${span}`]: span,
      [`${prefix}-col-offset-${offset}`]: offset,
      [className]: className,
    });

    return (
      <div {...others} className={classes}>
        {this.props.children}
      </div>
    );
  }
}

Col.propTypes = {
	span: PropTypes.number,
	offset: PropTypes.number,
	className: PropTypes.string,
	prefix: PropTypes.string,
};

Col.defaultProps = {
	prefix: 'oov',
};

export default  Col;