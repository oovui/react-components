import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  background-color: #ffffff;\n  color: ", ";\n  border: ", ";\n  &:hover {\n    color: ", ";\n    border: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background-color: ", ";\n  color: #ffffff;\n  border: none;\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  font-size: 12px;\n  font-family: Arial;\n  font-weight: 900;\n  padding: 12px 24px;\n  margin: 10px;\n  outline:none;\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var buttonBaseStyles = css(_templateObject());
var colors = {
  primary: '#1C76E2',
  warning: '#E10D30',
  default: '#155EC2',
  success: '#12AC3F',
  info: '#AE1DC5'
};
var hoverColors = {
  primary: '#15447D',
  warning: '#900B21',
  default: '#0C3875',
  success: '#0B6F29',
  info: '#5B0D68'
};
var MainComponent = styled.button(_templateObject2(), buttonBaseStyles, function (_ref) {
  var type = _ref.type;
  return colors[type];
}, function (_ref2) {
  var type = _ref2.type;
  return hoverColors[type];
});
var GhostButton = styled.button(_templateObject3(), buttonBaseStyles, function (_ref3) {
  var type = _ref3.type;
  return colors[type];
}, function (_ref4) {
  var type = _ref4.type;
  return "1px solid ".concat(colors[type]);
}, function (_ref5) {
  var type = _ref5.type;
  return hoverColors[type];
}, function (_ref6) {
  var type = _ref6.type;
  return "1px solid ".concat(hoverColors[type]);
});

var Button = function Button(_ref7) {
  var type = _ref7.type,
      children = _ref7.children,
      ghost = _ref7.ghost;
  // 不传时ghost 为undefined
  var ButtonComponent = !!ghost ? GhostButton : MainComponent;
  return React.createElement(ButtonComponent, {
    type: type
  }, children);
};

Button.propTypes = {
  type: PropTypes.string,
  ghost: PropTypes.bool
};
Button.defaultProps = {
  type: 'primary',
  ghost: false
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  flex-grow:0;\n  flex-shrink:1;\n  flex-basis: ", ";\n  margin-left: ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var ColWrapper = styled.div(_templateObject$1(), function (p) {
  return p.span / 24 * 100 + '%';
}, function (p) {
  return p.offset / 24 * 100 + "%";
});

var Col = function Col(props) {
  return React.createElement(ColWrapper, props);
};

Col.displayName = 'Col';
Col.propTypes = {
  children: PropTypes.node,
  span: PropTypes.number,
  offset: PropTypes.number,
  className: PropTypes.string
};
Col.defaultProps = {
  span: 0,
  offset: 0
};

var pxToNumber = function pxToNumber(pxStr) {
  var number = 0;
  pxStr = pxStr.trim();

  if (pxStr.endsWith("px")) {
    number = pxStr.slice(0, pxStr.length - 2);
  } else {
    number = pxStr;
  } //Object.is(NaN,NaN)=>true


  number = Object.is(Number(number), NaN) ? 0 : Number(number);
  return Number(number);
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  \n  ", "{\n    padding-left:", "px;\n    padding-right:", "px\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var RowWrapper = styled.div(_templateObject$2(), ColWrapper, function (p) {
  return pxToNumber(p.gutter) / 2;
}, function (p) {
  return pxToNumber(p.gutter) / 2;
});

var Row = function Row(props) {
  return React.createElement(RowWrapper, props);
};

Row.displayName = 'Row';
Row.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.string,
  className: PropTypes.string
};
Row.defaultProps = {
  gutter: '0'
};

export { Button, Row, Col };
