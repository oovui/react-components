import React from 'react';
import styled from 'styled-components';

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
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 5px 10px;\n  border: solid 1px #b20b0b;\n  border-radius: 3px;\n  outline:none;\n"]);

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

// export { default } from './Button'

export { Button };
