import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 5px 10px;\n  border: solid 1px #b20b0b;\n  border-radius: 30px;\n  outline:none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonWrapper = styled.button(_templateObject());

var Button = function Button(props) {
  return React.createElement(ButtonWrapper, _extends({}, props, {
    onClick: props.onClick
  }), props.text);
};

Button.propTypes = {
  /** 按钮的值 */
  text: PropTypes.string,

  /** 原生class */
  className: PropTypes.string
};

// import Button from './Button';

var Row = function Row(props) {};

var Col = function Col(props) {};

var index = {
  Row: Row,
  Col: Col
};

export { Button, index as Grid };
