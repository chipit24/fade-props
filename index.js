(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["FadeProps"] = factory(require("react"));
	else
		root["FadeProps"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*global clearTimeout,setTimeout*/


	var FadeProps = function (_Component) {
	  _inherits(FadeProps, _Component);

	  function FadeProps(props) {
	    _classCallCheck(this, FadeProps);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FadeProps).call(this, props));

	    _this.state = {
	      currentChild: _this.props.children ? _react2.default.Children.only(_this.props.children) : null,
	      nextChild: null,
	      changed: false,
	      animationLength: props.animationLength || 200
	    };
	    return _this;
	  }

	  _createClass(FadeProps, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var nextChild = nextProps.children ? _react2.default.Children.only(nextProps.children) : false;
	      clearTimeout(this.timeoutID);

	      if (nextChild && nextChild.key === this.state.currentChild.key) {
	        this.setState({ changed: false, currentChild: nextChild });
	      } else {
	        this.setState({ nextChild: nextChild, changed: true });
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({ opacity: 1 });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.state.changed && this.state.currentChild !== false) {
	        var opacity = 1,
	            complete = void 0;
	        if (this.state.nextChild || this.state.nextChild === false) {
	          opacity = 0;
	          complete = this.queueNextChild.bind(this);
	        } else {
	          complete = this.resetView.bind(this);
	        }

	        this.currentChild.style.opacity = opacity;
	        this.timeoutID = setTimeout(complete, this.state.animationLength);
	      }
	    }
	  }, {
	    key: 'queueNextChild',
	    value: function queueNextChild() {
	      this.setState({
	        currentChild: this.state.nextChild,
	        nextChild: null,
	        opacity: 0
	      });
	    }
	  }, {
	    key: 'resetView',
	    value: function resetView() {
	      this.setState({ opacity: 1, changed: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _state = this.state;
	      var opacity = _state.opacity;
	      var animationLength = _state.animationLength;


	      return _react2.default.createElement(
	        'div',
	        { className: this.props.className },
	        _react2.default.createElement(
	          'div',
	          { ref: function ref(c) {
	              _this2.currentChild = c;
	            }, style: { opacity: opacity, transition: 'opacity ' + animationLength + 'ms ease-in' } },
	          this.state.currentChild
	        )
	      );
	    }
	  }]);

	  return FadeProps;
	}(_react.Component);

	FadeProps.propTypes = {
	  children: _react2.default.PropTypes.element.isRequired,
	  animationLength: _react2.default.PropTypes.number
	};

	exports.default = FadeProps;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ])
});
;