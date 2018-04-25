(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames', '../utils/index'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'), require('../utils/index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames, global.index);
    global.Row = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames, _index) {
  'use strict';

  exports.__esModule = true;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Row = function (_ref) {
    _inherits(Row, _ref);

    function Row(props) {
      _classCallCheck(this, Row);

      var _this = _possibleConstructorReturn(this, _ref.call(this, props));

      _this.renderChildren = _this.renderChildren.bind(_this);
      return _this;
    }

    Row.prototype.renderChildren = function renderChildren(gutter, style) {
      if ((0, _index.pxToNumber)(gutter) != 0) {
        var styles = Object.assign({}, {
          paddingLeft: (0, _index.pxToNumber)(gutter) / 2,
          paddingRight: (0, _index.pxToNumber)(gutter) / 2
        }, style);
        return _react2.default.Children.map(this.props.children, function (child) {
          return _react2.default.cloneElement(child, {
            style: styles
          });
        });
      } else {
        return this.props.children;
      }
    };

    Row.prototype.render = function render() {
      var _cls;

      var _props = this.props,
          gutter = _props.gutter,
          className = _props.className,
          style = _props.style,
          prefix = _props.prefix,
          others = _objectWithoutProperties(_props, ['gutter', 'className', 'style', 'prefix']);

      var classes = (0, _classnames2.default)((_cls = {}, _cls[prefix + '-row'] = true, _cls[className] = className, _cls));

      return _react2.default.createElement(
        'div',
        _extends({}, others, { className: classes }),
        this.renderChildren(gutter, style)
      );
    };

    return Row;
  }(_react.PureComponent || _react.Component);

  Row.propTypes = {
    className: _propTypes2.default.string,
    prefix: _propTypes2.default.string,
    gutter: _propTypes2.default.string
  };

  Row.defaultProps = {
    prefix: 'oov',
    gutter: '0'
  };

  exports.default = Row;
});