(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames);
    global.Col = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames) {
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

  var Col = function (_ref) {
    _inherits(Col, _ref);

    function Col() {
      _classCallCheck(this, Col);

      return _possibleConstructorReturn(this, _ref.apply(this, arguments));
    }

    Col.prototype.render = function render() {
      var _cls;

      var _props = this.props,
          span = _props.span,
          offset = _props.offset,
          className = _props.className,
          prefix = _props.prefix,
          others = _objectWithoutProperties(_props, ['span', 'offset', 'className', 'prefix']);

      var classes = (0, _classnames2.default)((_cls = {}, _cls[prefix + '-col'] = true, _cls[prefix + '-col-' + span] = span, _cls[prefix + '-col-offset-' + offset] = offset, _cls[className] = className, _cls));

      return _react2.default.createElement(
        'div',
        _extends({}, others, { className: classes }),
        this.props.children
      );
    };

    return Col;
  }(_react.PureComponent || _react.Component);

  Col.propTypes = {
    span: _propTypes2.default.number,
    offset: _propTypes2.default.number,
    className: _propTypes2.default.string,
    prefix: _propTypes2.default.string
  };

  Col.defaultProps = {
    prefix: 'oov'
  };

  exports.default = Col;
});