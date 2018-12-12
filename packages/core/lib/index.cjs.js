'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));

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

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  flex-grow:0;\n  flex-shrink:1;\n  flex-basis: ", ";\n  margin-left: ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Col = styled.div(_templateObject$1(), function (p) {
  return p.span / 24 * 100 + '%';
}, function (p) {
  return p.offset / 24 * 100 + "%";
});
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
var Row = styled.div(_templateObject$2(), Col, function (p) {
  return pxToNumber(p.gutter) / 2;
}, function (p) {
  return pxToNumber(p.gutter) / 2;
});
Row.displayName = 'Row';
Row.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.string,
  className: PropTypes.string
};
Row.defaultProps = {
  gutter: '0'
};

var index = {
  Row: Row,
  Col: Col
};

exports.Button = Button;
exports.Grid = index;
