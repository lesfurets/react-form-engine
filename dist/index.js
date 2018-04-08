(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactContainerBoilerplate"] = factory(require("react"), require("react-dom"));
	else
		root["ReactContainerBoilerplate"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_57__) {
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FormEngine = __webpack_require__(2);

	var _FormEngine2 = _interopRequireDefault(_FormEngine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FormEngine2.default;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(4);

	var _redux = __webpack_require__(8);

	var _reactRedux = __webpack_require__(28);

	var _reducers = __webpack_require__(54);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reactResponsiveWidget = __webpack_require__(56);

	var _reactResponsiveWidget2 = _interopRequireDefault(_reactResponsiveWidget);

	var _FormWrapper = __webpack_require__(58);

	var _FormWrapper2 = _interopRequireDefault(_FormWrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormEngine = function (_React$Component) {
	    _inherits(FormEngine, _React$Component);

	    function FormEngine() {
	        _classCallCheck(this, FormEngine);

	        return _possibleConstructorReturn(this, (FormEngine.__proto__ || Object.getPrototypeOf(FormEngine)).apply(this, arguments));
	    }

	    _createClass(FormEngine, [{
	        key: "render",
	        value: function render() {
	            var store = (0, _redux.createStore)(_reducers2.default);
	            return _react2.default.createElement(
	                _reactRedux.Provider,
	                { store: store, __self: this
	                },
	                _react2.default.createElement(
	                    _reactResponsiveWidget2.default,
	                    { lg: 1200, md: 992, sm: 700, __self: this
	                    },
	                    _react2.default.createElement(_FormWrapper2.default, _extends({}, this.props, {
	                        __self: this
	                    }))
	                )
	            );
	        }
	    }]);

	    return FormEngine;
	}(_react2.default.Component);

	exports.default = FormEngine;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!../../node_modules/less-loader/index.js!./block-container.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!../../node_modules/less-loader/index.js!./block-container.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".block-container {\n  background-color: white;\n  margin: 20px 0;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22), 0 8px 8px rgba(0, 0, 0, 0.23);\n}\n.block-container .block-inner {\n  padding: 0 15px 15px 15px;\n}\n.block-container .block-header {\n  background-color: #3F51B5;\n}\n.block-container .block-label {\n  padding: 10px 15px;\n  color: white;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 140%;\n}\n.block-container .cta-layer {\n  text-align: right;\n}\n.block-container .cta-layer .cta {\n  color: white;\n  font-weight: 500;\n  background-color: #4CAF50;\n  padding: 10px;\n  width: 25%;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n}\n.block-container .cta-layer .secondary-cta {\n  background-color: #7986CB;\n  float: left;\n}\n.app-xs .block-container .cta-layer .cta {\n  width: 48%;\n}\n.block-todo .block-header,\n.block-done .block-header {\n  background-color: #7986CB;\n}\n", ""]);

	// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(9);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(23);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(25);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(26);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(27);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(24);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if ((undefined) !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(10);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(20);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(11),
	    getPrototype = __webpack_require__(17),
	    isObjectLike = __webpack_require__(19);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(12),
	    getRawTag = __webpack_require__(15),
	    objectToString = __webpack_require__(16);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(13);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(14);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(12);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(18);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(22);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(21)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(9);

	var _isPlainObject = __webpack_require__(10);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(24);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if ((undefined) !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var unexpectedKeyCache = void 0;
	  if ((undefined) !== 'production') {
	    unexpectedKeyCache = {};
	  }

	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    if ((undefined) !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(27);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;

	var _Provider = __webpack_require__(29);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connectAdvanced = __webpack_require__(41);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _connect = __webpack_require__(45);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Provider = _Provider2.default;
	exports.createProvider = _Provider.createProvider;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createProvider = createProvider;

	var _react = __webpack_require__(3);

	var _propTypes = __webpack_require__(30);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _PropTypes = __webpack_require__(39);

	var _warning = __webpack_require__(40);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	function createProvider() {
	  var _Provider$childContex;

	  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
	  var subKey = arguments[1];

	  var subscriptionKey = subKey || storeKey + 'Subscription';

	  var Provider = function (_Component) {
	    _inherits(Provider, _Component);

	    Provider.prototype.getChildContext = function getChildContext() {
	      var _ref;

	      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
	    };

	    function Provider(props, context) {
	      _classCallCheck(this, Provider);

	      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	      _this[storeKey] = props.store;
	      return _this;
	    }

	    Provider.prototype.render = function render() {
	      return _react.Children.only(this.props.children);
	    };

	    return Provider;
	  }(_react.Component);

	  if ((undefined) !== 'production') {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	      if (this[storeKey] !== nextProps.store) {
	        warnAboutReceivingStore();
	      }
	    };
	  }

	  Provider.propTypes = {
	    store: _PropTypes.storeShape.isRequired,
	    children: _propTypes2.default.element.isRequired
	  };
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);

	  return Provider;
	}

	exports.default = createProvider();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if ((undefined) !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(31)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(38)();
	}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(32);
	var invariant = __webpack_require__(33);
	var warning = __webpack_require__(34);
	var assign = __webpack_require__(35);

	var ReactPropTypesSecret = __webpack_require__(36);
	var checkPropTypes = __webpack_require__(37);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if ((undefined) !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if ((undefined) !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      (undefined) !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      (undefined) !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if ((undefined) !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(32);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ((undefined) !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if ((undefined) !== 'production') {
	  var invariant = __webpack_require__(33);
	  var warning = __webpack_require__(34);
	  var ReactPropTypesSecret = __webpack_require__(36);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if ((undefined) !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(32);
	var invariant = __webpack_require__(33);
	var ReactPropTypesSecret = __webpack_require__(36);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = undefined;

	var _propTypes = __webpack_require__(30);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
	  trySubscribe: _propTypes2.default.func.isRequired,
	  tryUnsubscribe: _propTypes2.default.func.isRequired,
	  notifyNestedSubs: _propTypes2.default.func.isRequired,
	  isSubscribed: _propTypes2.default.func.isRequired
	});

	var storeShape = exports.storeShape = _propTypes2.default.shape({
	  subscribe: _propTypes2.default.func.isRequired,
	  dispatch: _propTypes2.default.func.isRequired,
	  getState: _propTypes2.default.func.isRequired
	});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = connectAdvanced;

	var _hoistNonReactStatics = __webpack_require__(42);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(43);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(3);

	var _Subscription = __webpack_require__(44);

	var _Subscription2 = _interopRequireDefault(_Subscription);

	var _PropTypes = __webpack_require__(39);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };

	  return selector;
	}

	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;

	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);

	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }

	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;

	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;

	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };

	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };

	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };

	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;

	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));

	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };

	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);

	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };

	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };

	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };

	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;

	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;

	    if ((undefined) !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        var _this2 = this;

	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();

	          // If any connected descendants don't hot reload (and resubscribe in the process), their
	          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
	          // listeners, this does mean that the old versions of connected descendants will still be
	          // notified of state changes; however, their onStateChange function is a no-op so this
	          // isn't a huge deal.
	          var oldListeners = [];

	          if (this.subscription) {
	            oldListeners = this.subscription.listeners.get();
	            this.subscription.tryUnsubscribe();
	          }
	          this.initSubscription();
	          if (shouldHandleStateChanges) {
	            this.subscription.trySubscribe();
	            oldListeners.forEach(function (listener) {
	              return _this2.subscription.listeners.subscribe(listener);
	            });
	          }
	        }
	      };
	    }

	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.hoistNonReactStatics = factory());
	}(this, (function () {
	    'use strict';
	    
	    var REACT_STATICS = {
	        childContextTypes: true,
	        contextTypes: true,
	        defaultProps: true,
	        displayName: true,
	        getDefaultProps: true,
	        getDerivedStateFromProps: true,
	        mixins: true,
	        propTypes: true,
	        type: true
	    };
	    
	    var KNOWN_STATICS = {
	        name: true,
	        length: true,
	        prototype: true,
	        caller: true,
	        callee: true,
	        arguments: true,
	        arity: true
	    };
	    
	    var defineProperty = Object.defineProperty;
	    var getOwnPropertyNames = Object.getOwnPropertyNames;
	    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	    var getPrototypeOf = Object.getPrototypeOf;
	    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	    
	    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	            
	            if (objectPrototype) {
	                var inheritedComponent = getPrototypeOf(sourceComponent);
	                if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	                }
	            }
	            
	            var keys = getOwnPropertyNames(sourceComponent);
	            
	            if (getOwnPropertySymbols) {
	                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	            }
	            
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                    try { // Avoid failures from read-only properties
	                        defineProperty(targetComponent, key, descriptor);
	                    } catch (e) {}
	                }
	            }
	            
	            return targetComponent;
	        }
	        
	        return targetComponent;
	    };
	})));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ((undefined) !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];

	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    get: function get() {
	      return next;
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);

	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;

	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}

	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck(this, Subscription);

	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }

	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

	      this.listeners = createListenerCollection();
	    }
	  };

	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	exports.default = Subscription;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createConnect = createConnect;

	var _connectAdvanced = __webpack_require__(41);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _shallowEqual = __webpack_require__(46);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _mapDispatchToProps = __webpack_require__(47);

	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

	var _mapStateToProps = __webpack_require__(50);

	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

	var _mergeProps = __webpack_require__(51);

	var _mergeProps2 = _interopRequireDefault(_mergeProps);

	var _selectorFactory = __webpack_require__(52);

	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	}

	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',

	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },

	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),

	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual

	    }, extraOptions));
	  };
	}

	exports.default = createConnect();

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;

	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) return false;

	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

	var _redux = __webpack_require__(8);

	var _wrapMapToProps = __webpack_require__(48);

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}

	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}

	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}

	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

	var _verifyPlainObject = __webpack_require__(49);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}

	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}

	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };

	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      if ((undefined) !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);

	      return props;
	    };

	    return proxy;
	  };
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifyPlainObject;

	var _isPlainObject = __webpack_require__(10);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(40);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

	var _wrapMapToProps = __webpack_require__(48);

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}

	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}

	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

	var _verifyPlainObject = __webpack_require__(49);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}

	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;

	    var hasRunOnce = false;
	    var mergedProps = void 0;

	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;

	        if ((undefined) !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}

	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}

	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}

	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;

	var _verifySubselectors = __webpack_require__(53);

	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}

	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;

	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;

	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;

	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}

	// TODO: Add more comments

	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  if ((undefined) !== 'production') {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifySubselectors;

	var _warning = __webpack_require__(40);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(8);

	var _constants = __webpack_require__(55);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var fieldContext = function fieldContext() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    switch (action.type) {
	        case _constants.SET_FIELD_VALUE:
	            console.log(action.fieldId + ":" + action.fieldValue);
	            return Object.assign({}, state, _defineProperty({}, action.fieldId, action.fieldValue));
	        default:
	            return state;
	    }
	};

	var appReducer = (0, _redux.combineReducers)({
	    fieldContext: fieldContext
	});

	exports.default = appReducer;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SET_FIELD_VALUE = exports.SET_FIELD_VALUE = 'SET_VALUE_VALUE';

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	!function(p,a){ true?module.exports=a(__webpack_require__(3),__webpack_require__(57)):"function"==typeof define&&define.amd?define(["react","react-dom"],a):"object"==typeof exports?exports.ReactResponsiveWidget=a(require("react"),require("react-dom")):p.ReactResponsiveWidget=a(p.React,p.ReactDOM)}(this,function(p,a){return function(p){function a(o){if(n[o])return n[o].exports;var e=n[o]={exports:{},id:o,loaded:!1};return p[o].call(e.exports,e,e.exports,a),e.loaded=!0,e.exports}var n={};return a.m=p,a.c=n,a.p="",a(0)}([function(p,a,n){"use strict";function o(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(a,"__esModule",{value:!0});var e=n(5),t=o(e);a.default=t.default},function(p,a){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=n},function(p,a){"use strict";function n(p){return function(){return p}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(p){return p},p.exports=o},function(p,a,n){"use strict";function o(p,a,n,o,t,r,l,c){if(e(a),!p){var i;if(void 0===a)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,t,r,l,c],m=0;i=new Error(a.replace(/%s/g,function(){return s[m++]})),i.name="Invariant Violation"}throw i.framesToPop=1,i}}var e=function(p){};e=function(p){if(void 0===p)throw new Error("invariant requires an error message argument")},p.exports=o},function(p,a,n){"use strict";var o=n(2),e=o,t=function(p){for(var a=arguments.length,n=Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o];var e=0,t="Warning: "+p.replace(/%s/g,function(){return n[e++]});"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(p){}};e=function(p,a){if(void 0===a)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==a.indexOf("Failed Composite propType: ")&&!p){for(var n=arguments.length,o=Array(n>2?n-2:0),e=2;e<n;e++)o[e-2]=arguments[e];t.apply(void 0,[a].concat(o))}},p.exports=e},function(p,a,n){"use strict";function o(p){return p&&p.__esModule?p:{default:p}}function e(p,a){if(!(p instanceof a))throw new TypeError("Cannot call a class as a function")}function t(p,a){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?p:a}function r(p,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);p.prototype=Object.create(a&&a.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(p,a):p.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var l=function(){function p(p,a){for(var n=0;n<a.length;n++){var o=a[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(p,o.key,o)}}return function(a,n,o){return n&&p(a.prototype,n),o&&p(a,o),a}}(),c=n(14),i=o(c),s=n(11),m=o(s),f=n(15),u=o(f);n(13);var d="app-xs",g="app-sm",h="app-md",y="app-lg",v=function(p){var a=u.default.findDOMNode(p).offsetWidth;return a>=p.props.lg?y:a>=p.props.md?h:a>=p.props.sm?g:d},x=function(p){function a(){e(this,a);var p=t(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return p.state={format:d},p.checkSize=p.checkSize.bind(p),p}return r(a,p),l(a,[{key:"componentDidMount",value:function(){this.checkSize(),window.attachEvent?window.attachEvent("onresize",this.checkSize):window.addEventListener&&window.addEventListener("resize",this.checkSize,!0)}},{key:"checkSize",value:function(){var p=v(this);p!=this.state.format&&this.setState({format:p})}},{key:"render",value:function(){return i.default.createElement("div",{className:"app-container",__self:this},i.default.createElement("div",{className:this.state.format,__self:this},this.props.children))}}]),a}(i.default.Component);a.default=x,x.propTypes={lg:m.default.number,md:m.default.number,sm:m.default.number},x.defaultProps={lg:1200,md:992,sm:768}},function(p,a,n){a=p.exports=n(7)(),a.push([p.id,'.app-container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;width:100%}.app-container .app-row{margin-right:-15px;margin-left:-15px}.app-container .app-col-lg-1,.app-container .app-col-lg-2,.app-container .app-col-lg-3,.app-container .app-col-lg-4,.app-container .app-col-lg-5,.app-container .app-col-lg-6,.app-container .app-col-lg-7,.app-container .app-col-lg-8,.app-container .app-col-lg-9,.app-container .app-col-lg-10,.app-container .app-col-lg-11,.app-container .app-col-lg-12,.app-container .app-col-md-1,.app-container .app-col-md-2,.app-container .app-col-md-3,.app-container .app-col-md-4,.app-container .app-col-md-5,.app-container .app-col-md-6,.app-container .app-col-md-7,.app-container .app-col-md-8,.app-container .app-col-md-9,.app-container .app-col-md-10,.app-container .app-col-md-11,.app-container .app-col-md-12,.app-container .app-col-sm-1,.app-container .app-col-sm-2,.app-container .app-col-sm-3,.app-container .app-col-sm-4,.app-container .app-col-sm-5,.app-container .app-col-sm-6,.app-container .app-col-sm-7,.app-container .app-col-sm-8,.app-container .app-col-sm-9,.app-container .app-col-sm-10,.app-container .app-col-sm-11,.app-container .app-col-sm-12,.app-container .app-col-xs-1,.app-container .app-col-xs-2,.app-container .app-col-xs-3,.app-container .app-col-xs-4,.app-container .app-col-xs-5,.app-container .app-col-xs-6,.app-container .app-col-xs-7,.app-container .app-col-xs-8,.app-container .app-col-xs-9,.app-container .app-col-xs-10,.app-container .app-col-xs-11,.app-container .app-col-xs-12{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.app-container .app-col-xs-1,.app-container .app-col-xs-2,.app-container .app-col-xs-3,.app-container .app-col-xs-4,.app-container .app-col-xs-5,.app-container .app-col-xs-6,.app-container .app-col-xs-7,.app-container .app-col-xs-8,.app-container .app-col-xs-9,.app-container .app-col-xs-10,.app-container .app-col-xs-11,.app-container .app-col-xs-12{float:left}.app-container .app-col-xs-12{width:100%}.app-container .app-col-xs-11{width:91.66666667%}.app-container .app-col-xs-10{width:83.33333333%}.app-container .app-col-xs-9{width:75%}.app-container .app-col-xs-8{width:66.66666667%}.app-container .app-col-xs-7{width:58.33333333%}.app-container .app-col-xs-6{width:50%}.app-container .app-col-xs-5{width:41.66666667%}.app-container .app-col-xs-4{width:33.33333333%}.app-container .app-col-xs-3{width:25%}.app-container .app-col-xs-2{width:16.66666667%}.app-container .app-col-xs-1{width:8.33333333%}.app-container .app-col-xs-pull-12{right:100%}.app-container .app-col-xs-pull-11{right:91.66666667%}.app-container .app-col-xs-pull-10{right:83.33333333%}.app-container .app-col-xs-pull-9{right:75%}.app-container .app-col-xs-pull-8{right:66.66666667%}.app-container .app-col-xs-pull-7{right:58.33333333%}.app-container .app-col-xs-pull-6{right:50%}.app-container .app-col-xs-pull-5{right:41.66666667%}.app-container .app-col-xs-pull-4{right:33.33333333%}.app-container .app-col-xs-pull-3{right:25%}.app-container .app-col-xs-pull-2{right:16.66666667%}.app-container .app-col-xs-pull-1{right:8.33333333%}.app-container .app-col-xs-pull-0{right:auto}.app-container .app-col-xs-push-12{left:100%}.app-container .app-col-xs-push-11{left:91.66666667%}.app-container .app-col-xs-push-10{left:83.33333333%}.app-container .app-col-xs-push-9{left:75%}.app-container .app-col-xs-push-8{left:66.66666667%}.app-container .app-col-xs-push-7{left:58.33333333%}.app-container .app-col-xs-push-6{left:50%}.app-container .app-col-xs-push-5{left:41.66666667%}.app-container .app-col-xs-push-4{left:33.33333333%}.app-container .app-col-xs-push-3{left:25%}.app-container .app-col-xs-push-2{left:16.66666667%}.app-container .app-col-xs-push-1{left:8.33333333%}.app-container .app-col-xs-push-0{left:auto}.app-container .app-col-xs-offset-12{margin-left:100%}.app-container .app-col-xs-offset-11{margin-left:91.66666667%}.app-container .app-col-xs-offset-10{margin-left:83.33333333%}.app-container .app-col-xs-offset-9{margin-left:75%}.app-container .app-col-xs-offset-8{margin-left:66.66666667%}.app-container .app-col-xs-offset-7{margin-left:58.33333333%}.app-container .app-col-xs-offset-6{margin-left:50%}.app-container .app-col-xs-offset-5{margin-left:41.66666667%}.app-container .app-col-xs-offset-4{margin-left:33.33333333%}.app-container .app-col-xs-offset-3{margin-left:25%}.app-container .app-col-xs-offset-2{margin-left:16.66666667%}.app-container .app-col-xs-offset-1{margin-left:8.33333333%}.app-container .app-col-xs-offset-0{margin-left:0}.app-container .app-lg .app-col-sm-1,.app-container .app-lg .app-col-sm-2,.app-container .app-lg .app-col-sm-3,.app-container .app-lg .app-col-sm-4,.app-container .app-lg .app-col-sm-5,.app-container .app-lg .app-col-sm-6,.app-container .app-lg .app-col-sm-7,.app-container .app-lg .app-col-sm-8,.app-container .app-lg .app-col-sm-9,.app-container .app-lg .app-col-sm-10,.app-container .app-lg .app-col-sm-11,.app-container .app-lg .app-col-sm-12,.app-container .app-md .app-col-sm-1,.app-container .app-md .app-col-sm-2,.app-container .app-md .app-col-sm-3,.app-container .app-md .app-col-sm-4,.app-container .app-md .app-col-sm-5,.app-container .app-md .app-col-sm-6,.app-container .app-md .app-col-sm-7,.app-container .app-md .app-col-sm-8,.app-container .app-md .app-col-sm-9,.app-container .app-md .app-col-sm-10,.app-container .app-md .app-col-sm-11,.app-container .app-md .app-col-sm-12,.app-container .app-sm .app-col-sm-1,.app-container .app-sm .app-col-sm-2,.app-container .app-sm .app-col-sm-3,.app-container .app-sm .app-col-sm-4,.app-container .app-sm .app-col-sm-5,.app-container .app-sm .app-col-sm-6,.app-container .app-sm .app-col-sm-7,.app-container .app-sm .app-col-sm-8,.app-container .app-sm .app-col-sm-9,.app-container .app-sm .app-col-sm-10,.app-container .app-sm .app-col-sm-11,.app-container .app-sm .app-col-sm-12{float:left}.app-container .app-lg .app-col-sm-12,.app-container .app-md .app-col-sm-12,.app-container .app-sm .app-col-sm-12{width:100%}.app-container .app-lg .app-col-sm-11,.app-container .app-md .app-col-sm-11,.app-container .app-sm .app-col-sm-11{width:91.66666667%}.app-container .app-lg .app-col-sm-10,.app-container .app-md .app-col-sm-10,.app-container .app-sm .app-col-sm-10{width:83.33333333%}.app-container .app-lg .app-col-sm-9,.app-container .app-md .app-col-sm-9,.app-container .app-sm .app-col-sm-9{width:75%}.app-container .app-lg .app-col-sm-8,.app-container .app-md .app-col-sm-8,.app-container .app-sm .app-col-sm-8{width:66.66666667%}.app-container .app-lg .app-col-sm-7,.app-container .app-md .app-col-sm-7,.app-container .app-sm .app-col-sm-7{width:58.33333333%}.app-container .app-lg .app-col-sm-6,.app-container .app-md .app-col-sm-6,.app-container .app-sm .app-col-sm-6{width:50%}.app-container .app-lg .app-col-sm-5,.app-container .app-md .app-col-sm-5,.app-container .app-sm .app-col-sm-5{width:41.66666667%}.app-container .app-lg .app-col-sm-4,.app-container .app-md .app-col-sm-4,.app-container .app-sm .app-col-sm-4{width:33.33333333%}.app-container .app-lg .app-col-sm-3,.app-container .app-md .app-col-sm-3,.app-container .app-sm .app-col-sm-3{width:25%}.app-container .app-lg .app-col-sm-2,.app-container .app-md .app-col-sm-2,.app-container .app-sm .app-col-sm-2{width:16.66666667%}.app-container .app-lg .app-col-sm-1,.app-container .app-md .app-col-sm-1,.app-container .app-sm .app-col-sm-1{width:8.33333333%}.app-container .app-lg .app-col-sm-pull-12,.app-container .app-md .app-col-sm-pull-12,.app-container .app-sm .app-col-sm-pull-12{right:100%}.app-container .app-lg .app-col-sm-pull-11,.app-container .app-md .app-col-sm-pull-11,.app-container .app-sm .app-col-sm-pull-11{right:91.66666667%}.app-container .app-lg .app-col-sm-pull-10,.app-container .app-md .app-col-sm-pull-10,.app-container .app-sm .app-col-sm-pull-10{right:83.33333333%}.app-container .app-lg .app-col-sm-pull-9,.app-container .app-md .app-col-sm-pull-9,.app-container .app-sm .app-col-sm-pull-9{right:75%}.app-container .app-lg .app-col-sm-pull-8,.app-container .app-md .app-col-sm-pull-8,.app-container .app-sm .app-col-sm-pull-8{right:66.66666667%}.app-container .app-lg .app-col-sm-pull-7,.app-container .app-md .app-col-sm-pull-7,.app-container .app-sm .app-col-sm-pull-7{right:58.33333333%}.app-container .app-lg .app-col-sm-pull-6,.app-container .app-md .app-col-sm-pull-6,.app-container .app-sm .app-col-sm-pull-6{right:50%}.app-container .app-lg .app-col-sm-pull-5,.app-container .app-md .app-col-sm-pull-5,.app-container .app-sm .app-col-sm-pull-5{right:41.66666667%}.app-container .app-lg .app-col-sm-pull-4,.app-container .app-md .app-col-sm-pull-4,.app-container .app-sm .app-col-sm-pull-4{right:33.33333333%}.app-container .app-lg .app-col-sm-pull-3,.app-container .app-md .app-col-sm-pull-3,.app-container .app-sm .app-col-sm-pull-3{right:25%}.app-container .app-lg .app-col-sm-pull-2,.app-container .app-md .app-col-sm-pull-2,.app-container .app-sm .app-col-sm-pull-2{right:16.66666667%}.app-container .app-lg .app-col-sm-pull-1,.app-container .app-md .app-col-sm-pull-1,.app-container .app-sm .app-col-sm-pull-1{right:8.33333333%}.app-container .app-lg .app-col-sm-pull-0,.app-container .app-md .app-col-sm-pull-0,.app-container .app-sm .app-col-sm-pull-0{right:auto}.app-container .app-lg .app-col-sm-push-12,.app-container .app-md .app-col-sm-push-12,.app-container .app-sm .app-col-sm-push-12{left:100%}.app-container .app-lg .app-col-sm-push-11,.app-container .app-md .app-col-sm-push-11,.app-container .app-sm .app-col-sm-push-11{left:91.66666667%}.app-container .app-lg .app-col-sm-push-10,.app-container .app-md .app-col-sm-push-10,.app-container .app-sm .app-col-sm-push-10{left:83.33333333%}.app-container .app-lg .app-col-sm-push-9,.app-container .app-md .app-col-sm-push-9,.app-container .app-sm .app-col-sm-push-9{left:75%}.app-container .app-lg .app-col-sm-push-8,.app-container .app-md .app-col-sm-push-8,.app-container .app-sm .app-col-sm-push-8{left:66.66666667%}.app-container .app-lg .app-col-sm-push-7,.app-container .app-md .app-col-sm-push-7,.app-container .app-sm .app-col-sm-push-7{left:58.33333333%}.app-container .app-lg .app-col-sm-push-6,.app-container .app-md .app-col-sm-push-6,.app-container .app-sm .app-col-sm-push-6{left:50%}.app-container .app-lg .app-col-sm-push-5,.app-container .app-md .app-col-sm-push-5,.app-container .app-sm .app-col-sm-push-5{left:41.66666667%}.app-container .app-lg .app-col-sm-push-4,.app-container .app-md .app-col-sm-push-4,.app-container .app-sm .app-col-sm-push-4{left:33.33333333%}.app-container .app-lg .app-col-sm-push-3,.app-container .app-md .app-col-sm-push-3,.app-container .app-sm .app-col-sm-push-3{left:25%}.app-container .app-lg .app-col-sm-push-2,.app-container .app-md .app-col-sm-push-2,.app-container .app-sm .app-col-sm-push-2{left:16.66666667%}.app-container .app-lg .app-col-sm-push-1,.app-container .app-md .app-col-sm-push-1,.app-container .app-sm .app-col-sm-push-1{left:8.33333333%}.app-container .app-lg .app-col-sm-push-0,.app-container .app-md .app-col-sm-push-0,.app-container .app-sm .app-col-sm-push-0{left:auto}.app-container .app-lg .app-col-sm-offset-12,.app-container .app-md .app-col-sm-offset-12,.app-container .app-sm .app-col-sm-offset-12{margin-left:100%}.app-container .app-lg .app-col-sm-offset-11,.app-container .app-md .app-col-sm-offset-11,.app-container .app-sm .app-col-sm-offset-11{margin-left:91.66666667%}.app-container .app-lg .app-col-sm-offset-10,.app-container .app-md .app-col-sm-offset-10,.app-container .app-sm .app-col-sm-offset-10{margin-left:83.33333333%}.app-container .app-lg .app-col-sm-offset-9,.app-container .app-md .app-col-sm-offset-9,.app-container .app-sm .app-col-sm-offset-9{margin-left:75%}.app-container .app-lg .app-col-sm-offset-8,.app-container .app-md .app-col-sm-offset-8,.app-container .app-sm .app-col-sm-offset-8{margin-left:66.66666667%}.app-container .app-lg .app-col-sm-offset-7,.app-container .app-md .app-col-sm-offset-7,.app-container .app-sm .app-col-sm-offset-7{margin-left:58.33333333%}.app-container .app-lg .app-col-sm-offset-6,.app-container .app-md .app-col-sm-offset-6,.app-container .app-sm .app-col-sm-offset-6{margin-left:50%}.app-container .app-lg .app-col-sm-offset-5,.app-container .app-md .app-col-sm-offset-5,.app-container .app-sm .app-col-sm-offset-5{margin-left:41.66666667%}.app-container .app-lg .app-col-sm-offset-4,.app-container .app-md .app-col-sm-offset-4,.app-container .app-sm .app-col-sm-offset-4{margin-left:33.33333333%}.app-container .app-lg .app-col-sm-offset-3,.app-container .app-md .app-col-sm-offset-3,.app-container .app-sm .app-col-sm-offset-3{margin-left:25%}.app-container .app-lg .app-col-sm-offset-2,.app-container .app-md .app-col-sm-offset-2,.app-container .app-sm .app-col-sm-offset-2{margin-left:16.66666667%}.app-container .app-lg .app-col-sm-offset-1,.app-container .app-md .app-col-sm-offset-1,.app-container .app-sm .app-col-sm-offset-1{margin-left:8.33333333%}.app-container .app-lg .app-col-sm-offset-0,.app-container .app-md .app-col-sm-offset-0,.app-container .app-sm .app-col-sm-offset-0{margin-left:0}.app-container .app-lg .app-col-md-1,.app-container .app-lg .app-col-md-2,.app-container .app-lg .app-col-md-3,.app-container .app-lg .app-col-md-4,.app-container .app-lg .app-col-md-5,.app-container .app-lg .app-col-md-6,.app-container .app-lg .app-col-md-7,.app-container .app-lg .app-col-md-8,.app-container .app-lg .app-col-md-9,.app-container .app-lg .app-col-md-10,.app-container .app-lg .app-col-md-11,.app-container .app-lg .app-col-md-12,.app-container .app-md .app-col-md-1,.app-container .app-md .app-col-md-2,.app-container .app-md .app-col-md-3,.app-container .app-md .app-col-md-4,.app-container .app-md .app-col-md-5,.app-container .app-md .app-col-md-6,.app-container .app-md .app-col-md-7,.app-container .app-md .app-col-md-8,.app-container .app-md .app-col-md-9,.app-container .app-md .app-col-md-10,.app-container .app-md .app-col-md-11,.app-container .app-md .app-col-md-12{float:left}.app-container .app-lg .app-col-md-12,.app-container .app-md .app-col-md-12{width:100%}.app-container .app-lg .app-col-md-11,.app-container .app-md .app-col-md-11{width:91.66666667%}.app-container .app-lg .app-col-md-10,.app-container .app-md .app-col-md-10{width:83.33333333%}.app-container .app-lg .app-col-md-9,.app-container .app-md .app-col-md-9{width:75%}.app-container .app-lg .app-col-md-8,.app-container .app-md .app-col-md-8{width:66.66666667%}.app-container .app-lg .app-col-md-7,.app-container .app-md .app-col-md-7{width:58.33333333%}.app-container .app-lg .app-col-md-6,.app-container .app-md .app-col-md-6{width:50%}.app-container .app-lg .app-col-md-5,.app-container .app-md .app-col-md-5{width:41.66666667%}.app-container .app-lg .app-col-md-4,.app-container .app-md .app-col-md-4{width:33.33333333%}.app-container .app-lg .app-col-md-3,.app-container .app-md .app-col-md-3{width:25%}.app-container .app-lg .app-col-md-2,.app-container .app-md .app-col-md-2{width:16.66666667%}.app-container .app-lg .app-col-md-1,.app-container .app-md .app-col-md-1{width:8.33333333%}.app-container .app-lg .app-col-md-pull-12,.app-container .app-md .app-col-md-pull-12{right:100%}.app-container .app-lg .app-col-md-pull-11,.app-container .app-md .app-col-md-pull-11{right:91.66666667%}.app-container .app-lg .app-col-md-pull-10,.app-container .app-md .app-col-md-pull-10{right:83.33333333%}.app-container .app-lg .app-col-md-pull-9,.app-container .app-md .app-col-md-pull-9{right:75%}.app-container .app-lg .app-col-md-pull-8,.app-container .app-md .app-col-md-pull-8{right:66.66666667%}.app-container .app-lg .app-col-md-pull-7,.app-container .app-md .app-col-md-pull-7{right:58.33333333%}.app-container .app-lg .app-col-md-pull-6,.app-container .app-md .app-col-md-pull-6{right:50%}.app-container .app-lg .app-col-md-pull-5,.app-container .app-md .app-col-md-pull-5{right:41.66666667%}.app-container .app-lg .app-col-md-pull-4,.app-container .app-md .app-col-md-pull-4{right:33.33333333%}.app-container .app-lg .app-col-md-pull-3,.app-container .app-md .app-col-md-pull-3{right:25%}.app-container .app-lg .app-col-md-pull-2,.app-container .app-md .app-col-md-pull-2{right:16.66666667%}.app-container .app-lg .app-col-md-pull-1,.app-container .app-md .app-col-md-pull-1{right:8.33333333%}.app-container .app-lg .app-col-md-pull-0,.app-container .app-md .app-col-md-pull-0{right:auto}.app-container .app-lg .app-col-md-push-12,.app-container .app-md .app-col-md-push-12{left:100%}.app-container .app-lg .app-col-md-push-11,.app-container .app-md .app-col-md-push-11{left:91.66666667%}.app-container .app-lg .app-col-md-push-10,.app-container .app-md .app-col-md-push-10{left:83.33333333%}.app-container .app-lg .app-col-md-push-9,.app-container .app-md .app-col-md-push-9{left:75%}.app-container .app-lg .app-col-md-push-8,.app-container .app-md .app-col-md-push-8{left:66.66666667%}.app-container .app-lg .app-col-md-push-7,.app-container .app-md .app-col-md-push-7{left:58.33333333%}.app-container .app-lg .app-col-md-push-6,.app-container .app-md .app-col-md-push-6{left:50%}.app-container .app-lg .app-col-md-push-5,.app-container .app-md .app-col-md-push-5{left:41.66666667%}.app-container .app-lg .app-col-md-push-4,.app-container .app-md .app-col-md-push-4{left:33.33333333%}.app-container .app-lg .app-col-md-push-3,.app-container .app-md .app-col-md-push-3{left:25%}.app-container .app-lg .app-col-md-push-2,.app-container .app-md .app-col-md-push-2{left:16.66666667%}.app-container .app-lg .app-col-md-push-1,.app-container .app-md .app-col-md-push-1{left:8.33333333%}.app-container .app-lg .app-col-md-push-0,.app-container .app-md .app-col-md-push-0{left:auto}.app-container .app-lg .app-col-md-offset-12,.app-container .app-md .app-col-md-offset-12{margin-left:100%}.app-container .app-lg .app-col-md-offset-11,.app-container .app-md .app-col-md-offset-11{margin-left:91.66666667%}.app-container .app-lg .app-col-md-offset-10,.app-container .app-md .app-col-md-offset-10{margin-left:83.33333333%}.app-container .app-lg .app-col-md-offset-9,.app-container .app-md .app-col-md-offset-9{margin-left:75%}.app-container .app-lg .app-col-md-offset-8,.app-container .app-md .app-col-md-offset-8{margin-left:66.66666667%}.app-container .app-lg .app-col-md-offset-7,.app-container .app-md .app-col-md-offset-7{margin-left:58.33333333%}.app-container .app-lg .app-col-md-offset-6,.app-container .app-md .app-col-md-offset-6{margin-left:50%}.app-container .app-lg .app-col-md-offset-5,.app-container .app-md .app-col-md-offset-5{margin-left:41.66666667%}.app-container .app-lg .app-col-md-offset-4,.app-container .app-md .app-col-md-offset-4{margin-left:33.33333333%}.app-container .app-lg .app-col-md-offset-3,.app-container .app-md .app-col-md-offset-3{margin-left:25%}.app-container .app-lg .app-col-md-offset-2,.app-container .app-md .app-col-md-offset-2{margin-left:16.66666667%}.app-container .app-lg .app-col-md-offset-1,.app-container .app-md .app-col-md-offset-1{margin-left:8.33333333%}.app-container .app-lg .app-col-md-offset-0,.app-container .app-md .app-col-md-offset-0{margin-left:0}.app-container .app-lg .app-col-lg-1,.app-container .app-lg .app-col-lg-2,.app-container .app-lg .app-col-lg-3,.app-container .app-lg .app-col-lg-4,.app-container .app-lg .app-col-lg-5,.app-container .app-lg .app-col-lg-6,.app-container .app-lg .app-col-lg-7,.app-container .app-lg .app-col-lg-8,.app-container .app-lg .app-col-lg-9,.app-container .app-lg .app-col-lg-10,.app-container .app-lg .app-col-lg-11,.app-container .app-lg .app-col-lg-12{float:left}.app-container .app-lg .app-col-lg-12{width:100%}.app-container .app-lg .app-col-lg-11{width:91.66666667%}.app-container .app-lg .app-col-lg-10{width:83.33333333%}.app-container .app-lg .app-col-lg-9{width:75%}.app-container .app-lg .app-col-lg-8{width:66.66666667%}.app-container .app-lg .app-col-lg-7{width:58.33333333%}.app-container .app-lg .app-col-lg-6{width:50%}.app-container .app-lg .app-col-lg-5{width:41.66666667%}.app-container .app-lg .app-col-lg-4{width:33.33333333%}.app-container .app-lg .app-col-lg-3{width:25%}.app-container .app-lg .app-col-lg-2{width:16.66666667%}.app-container .app-lg .app-col-lg-1{width:8.33333333%}.app-container .app-lg .app-col-lg-pull-12{right:100%}.app-container .app-lg .app-col-lg-pull-11{right:91.66666667%}.app-container .app-lg .app-col-lg-pull-10{right:83.33333333%}.app-container .app-lg .app-col-lg-pull-9{right:75%}.app-container .app-lg .app-col-lg-pull-8{right:66.66666667%}.app-container .app-lg .app-col-lg-pull-7{right:58.33333333%}.app-container .app-lg .app-col-lg-pull-6{right:50%}.app-container .app-lg .app-col-lg-pull-5{right:41.66666667%}.app-container .app-lg .app-col-lg-pull-4{right:33.33333333%}.app-container .app-lg .app-col-lg-pull-3{right:25%}.app-container .app-lg .app-col-lg-pull-2{right:16.66666667%}.app-container .app-lg .app-col-lg-pull-1{right:8.33333333%}.app-container .app-lg .app-col-lg-pull-0{right:auto}.app-container .app-lg .app-col-lg-push-12{left:100%}.app-container .app-lg .app-col-lg-push-11{left:91.66666667%}.app-container .app-lg .app-col-lg-push-10{left:83.33333333%}.app-container .app-lg .app-col-lg-push-9{left:75%}.app-container .app-lg .app-col-lg-push-8{left:66.66666667%}.app-container .app-lg .app-col-lg-push-7{left:58.33333333%}.app-container .app-lg .app-col-lg-push-6{left:50%}.app-container .app-lg .app-col-lg-push-5{left:41.66666667%}.app-container .app-lg .app-col-lg-push-4{left:33.33333333%}.app-container .app-lg .app-col-lg-push-3{left:25%}.app-container .app-lg .app-col-lg-push-2{left:16.66666667%}.app-container .app-lg .app-col-lg-push-1{left:8.33333333%}.app-container .app-lg .app-col-lg-push-0{left:auto}.app-container .app-lg .app-col-lg-offset-12{margin-left:100%}.app-container .app-lg .app-col-lg-offset-11{margin-left:91.66666667%}.app-container .app-lg .app-col-lg-offset-10{margin-left:83.33333333%}.app-container .app-lg .app-col-lg-offset-9{margin-left:75%}.app-container .app-lg .app-col-lg-offset-8{margin-left:66.66666667%}.app-container .app-lg .app-col-lg-offset-7{margin-left:58.33333333%}.app-container .app-lg .app-col-lg-offset-6{margin-left:50%}.app-container .app-lg .app-col-lg-offset-5{margin-left:41.66666667%}.app-container .app-lg .app-col-lg-offset-4{margin-left:33.33333333%}.app-container .app-lg .app-col-lg-offset-3{margin-left:25%}.app-container .app-lg .app-col-lg-offset-2{margin-left:16.66666667%}.app-container .app-lg .app-col-lg-offset-1{margin-left:8.33333333%}.app-container .app-lg .app-col-lg-offset-0{margin-left:0}.app-container .app-row:after,.app-container .app-row:before,.app-container:after,.app-container:before{display:table;content:" "}.app-container .app-row:after,.app-container:after{clear:both}.app-container,.app-container *,.app-container:after,.app-container :after,.app-container:before,.app-container :before{box-sizing:border-box}.app-container .app-lg .app-hidden-lg,.app-container .app-md .app-hidden-md,.app-container .app-sm .app-hidden-sm,.app-container .app-xs .app-hidden-xs{display:none!important}',""])},function(p,a){p.exports=function(){var p=[];return p.toString=function(){for(var p=[],a=0;a<this.length;a++){var n=this[a];n[2]?p.push("@media "+n[2]+"{"+n[1]+"}"):p.push(n[1])}return p.join("")},p.i=function(a,n){"string"==typeof a&&(a=[[null,a,""]]);for(var o={},e=0;e<this.length;e++){var t=this[e][0];"number"==typeof t&&(o[t]=!0)}for(e=0;e<a.length;e++){var r=a[e];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),p.push(r))}},p}},function(p,a,n){"use strict";function o(p,a,n,o,c){for(var i in p)if(p.hasOwnProperty(i)){var s;try{e("function"==typeof p[i],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",o||"React class",n,i),s=p[i](a,i,o,n,null,r)}catch(p){s=p}if(t(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",n,i,typeof s),s instanceof Error&&!(s.message in l)){l[s.message]=!0;var m=c?c():"";t(!1,"Failed %s type: %s%s",n,s.message,null!=m?m:"")}}}var e=n(3),t=n(4),r=n(1),l={};p.exports=o},function(p,a,n){"use strict";var o=n(2),e=n(3),t=n(1);p.exports=function(){function p(p,a,n,o,r,l){l!==t&&e(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function a(){return p}p.isRequired=p;var n={array:p,bool:p,func:p,number:p,object:p,string:p,symbol:p,any:p,arrayOf:a,element:p,instanceOf:a,node:p,objectOf:a,oneOf:a,oneOfType:a,shape:a};return n.checkPropTypes=o,n.PropTypes=n,n}},function(p,a,n){"use strict";var o=n(2),e=n(3),t=n(4),r=n(1),l=n(8);p.exports=function(p,a){function n(p){var a=p&&(S&&p[S]||p[k]);if("function"==typeof a)return a}function c(p,a){return p===a?0!==p||1/p===1/a:p!==p&&a!==a}function i(p){this.message=p,this.stack=""}function s(p){function n(n,c,s,m,f,u,d){if(m=m||_,u=u||s,d!==r)if(a)e(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("undefined"!=typeof console){var g=m+":"+s;!o[g]&&l<3&&(t(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",u,m),o[g]=!0,l++)}return null==c[s]?n?new i(null===c[s]?"The "+f+" `"+u+"` is marked as required "+("in `"+m+"`, but its value is `null`."):"The "+f+" `"+u+"` is marked as required in "+("`"+m+"`, but its value is `undefined`.")):null:p(c,s,m,f,u)}var o={},l=0,c=n.bind(null,!1);return c.isRequired=n.bind(null,!0),c}function m(p){function a(a,n,o,e,t,r){var l=a[n],c=R(l);if(c!==p){var s=T(l);return new i("Invalid "+e+" `"+t+"` of type "+("`"+s+"` supplied to `"+o+"`, expected ")+("`"+p+"`."))}return null}return s(a)}function f(){return s(o.thatReturnsNull)}function u(p){function a(a,n,o,e,t){if("function"!=typeof p)return new i("Property `"+t+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var l=a[n];if(!Array.isArray(l)){var c=R(l);return new i("Invalid "+e+" `"+t+"` of type "+("`"+c+"` supplied to `"+o+"`, expected an array."))}for(var s=0;s<l.length;s++){var m=p(l,s,o,e,t+"["+s+"]",r);if(m instanceof Error)return m}return null}return s(a)}function d(){function a(a,n,o,e,t){var r=a[n];if(!p(r)){var l=R(r);return new i("Invalid "+e+" `"+t+"` of type "+("`"+l+"` supplied to `"+o+"`, expected a single ReactElement."))}return null}return s(a)}function g(p){function a(a,n,o,e,t){if(!(a[n]instanceof p)){var r=p.name||_,l=E(a[n]);return new i("Invalid "+e+" `"+t+"` of type "+("`"+l+"` supplied to `"+o+"`, expected ")+("instance of `"+r+"`."))}return null}return s(a)}function h(p){function a(a,n,o,e,t){for(var r=a[n],l=0;l<p.length;l++)if(c(r,p[l]))return null;var s=JSON.stringify(p);return new i("Invalid "+e+" `"+t+"` of value `"+r+"` "+("supplied to `"+o+"`, expected one of "+s+"."))}return Array.isArray(p)?s(a):(t(!1,"Invalid argument supplied to oneOf, expected an instance of array."),o.thatReturnsNull)}function y(p){function a(a,n,o,e,t){if("function"!=typeof p)return new i("Property `"+t+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=a[n],c=R(l);if("object"!==c)return new i("Invalid "+e+" `"+t+"` of type "+("`"+c+"` supplied to `"+o+"`, expected an object."));
	for(var s in l)if(l.hasOwnProperty(s)){var m=p(l,s,o,e,t+"."+s,r);if(m instanceof Error)return m}return null}return s(a)}function v(p){function a(a,n,o,e,t){for(var l=0;l<p.length;l++){var c=p[l];if(null==c(a,n,o,e,t,r))return null}return new i("Invalid "+e+" `"+t+"` supplied to "+("`"+o+"`."))}if(!Array.isArray(p))return t(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),o.thatReturnsNull;for(var n=0;n<p.length;n++){var e=p[n];if("function"!=typeof e)return t(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",j(e),n),o.thatReturnsNull}return s(a)}function x(){function p(p,a,n,o,e){return w(p[a])?null:new i("Invalid "+o+" `"+e+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return s(p)}function b(p){function a(a,n,o,e,t){var l=a[n],c=R(l);if("object"!==c)return new i("Invalid "+e+" `"+t+"` of type `"+c+"` "+("supplied to `"+o+"`, expected `object`."));for(var s in p){var m=p[s];if(m){var f=m(l,s,o,e,t+"."+s,r);if(f)return f}}return null}return s(a)}function w(a){switch(typeof a){case"number":case"string":case"undefined":return!0;case"boolean":return!a;case"object":if(Array.isArray(a))return a.every(w);if(null===a||p(a))return!0;var o=n(a);if(!o)return!1;var e,t=o.call(a);if(o!==a.entries){for(;!(e=t.next()).done;)if(!w(e.value))return!1}else for(;!(e=t.next()).done;){var r=e.value;if(r&&!w(r[1]))return!1}return!0;default:return!1}}function O(p,a){return"symbol"===p||("Symbol"===a["@@toStringTag"]||"function"==typeof Symbol&&a instanceof Symbol)}function R(p){var a=typeof p;return Array.isArray(p)?"array":p instanceof RegExp?"object":O(a,p)?"symbol":a}function T(p){if("undefined"==typeof p||null===p)return""+p;var a=R(p);if("object"===a){if(p instanceof Date)return"date";if(p instanceof RegExp)return"regexp"}return a}function j(p){var a=T(p);switch(a){case"array":case"object":return"an "+a;case"boolean":case"date":case"regexp":return"a "+a;default:return a}}function E(p){return p.constructor&&p.constructor.name?p.constructor.name:_}var S="function"==typeof Symbol&&Symbol.iterator,k="@@iterator",_="<<anonymous>>",P={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:f(),arrayOf:u,element:d(),instanceOf:g,node:x(),objectOf:y,oneOf:h,oneOfType:v,shape:b};return i.prototype=Error.prototype,P.checkPropTypes=l,P.PropTypes=P,P}},function(p,a,n){var o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,e=function(p){return"object"==typeof p&&null!==p&&p.$$typeof===o},t=!0;p.exports=n(10)(e,t)},function(p,a,n){function o(p,a){for(var n=0;n<p.length;n++){var o=p[n],e=u[o.id];if(e){e.refs++;for(var t=0;t<e.parts.length;t++)e.parts[t](o.parts[t]);for(;t<o.parts.length;t++)e.parts.push(i(o.parts[t],a))}else{for(var r=[],t=0;t<o.parts.length;t++)r.push(i(o.parts[t],a));u[o.id]={id:o.id,refs:1,parts:r}}}}function e(p){for(var a=[],n={},o=0;o<p.length;o++){var e=p[o],t=e[0],r=e[1],l=e[2],c=e[3],i={css:r,media:l,sourceMap:c};n[t]?n[t].parts.push(i):a.push(n[t]={id:t,parts:[i]})}return a}function t(p,a){var n=h(),o=x[x.length-1];if("top"===p.insertAt)o?o.nextSibling?n.insertBefore(a,o.nextSibling):n.appendChild(a):n.insertBefore(a,n.firstChild),x.push(a);else{if("bottom"!==p.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(a)}}function r(p){p.parentNode.removeChild(p);var a=x.indexOf(p);a>=0&&x.splice(a,1)}function l(p){var a=document.createElement("style");return a.type="text/css",t(p,a),a}function c(p){var a=document.createElement("link");return a.rel="stylesheet",t(p,a),a}function i(p,a){var n,o,e;if(a.singleton){var t=v++;n=y||(y=l(a)),o=s.bind(null,n,t,!1),e=s.bind(null,n,t,!0)}else p.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(a),o=f.bind(null,n),e=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(a),o=m.bind(null,n),e=function(){r(n)});return o(p),function(a){if(a){if(a.css===p.css&&a.media===p.media&&a.sourceMap===p.sourceMap)return;o(p=a)}else e()}}function s(p,a,n,o){var e=n?"":o.css;if(p.styleSheet)p.styleSheet.cssText=b(a,e);else{var t=document.createTextNode(e),r=p.childNodes;r[a]&&p.removeChild(r[a]),r.length?p.insertBefore(t,r[a]):p.appendChild(t)}}function m(p,a){var n=a.css,o=a.media;if(o&&p.setAttribute("media",o),p.styleSheet)p.styleSheet.cssText=n;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(n))}}function f(p,a){var n=a.css,o=a.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var e=new Blob([n],{type:"text/css"}),t=p.href;p.href=URL.createObjectURL(e),t&&URL.revokeObjectURL(t)}var u={},d=function(p){var a;return function(){return"undefined"==typeof a&&(a=p.apply(this,arguments)),a}},g=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,x=[];p.exports=function(p,a){a=a||{},"undefined"==typeof a.singleton&&(a.singleton=g()),"undefined"==typeof a.insertAt&&(a.insertAt="bottom");var n=e(p);return o(n,a),function(p){for(var t=[],r=0;r<n.length;r++){var l=n[r],c=u[l.id];c.refs--,t.push(c)}if(p){var i=e(p);o(i,a)}for(var r=0;r<t.length;r++){var c=t[r];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete u[c.id]}}}};var b=function(){var p=[];return function(a,n){return p[a]=n,p.filter(Boolean).join("\n")}}()},function(p,a,n){var o=n(6);"string"==typeof o&&(o=[[p.id,o,""]]);n(12)(o,{});o.locals&&(p.exports=o.locals)},function(a,n){a.exports=p},function(p,n){p.exports=a}])});

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _BlockWrapper = __webpack_require__(59);

	var _BlockWrapper2 = _interopRequireDefault(_BlockWrapper);

	var _FormContainer = __webpack_require__(70);

	var _FormContainer2 = _interopRequireDefault(_FormContainer);

	var _propTypes = __webpack_require__(30);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormWrapper = function (_React$Component) {
	    _inherits(FormWrapper, _React$Component);

	    function FormWrapper() {
	        _classCallCheck(this, FormWrapper);

	        var _this = _possibleConstructorReturn(this, (FormWrapper.__proto__ || Object.getPrototypeOf(FormWrapper)).call(this));

	        _this.state = {
	            currentBlockIndex: 0
	        };
	        _this.getBlockState = _this.getBlockState.bind(_this);
	        _this.onBlockEvent = _this.onBlockEvent.bind(_this);
	        return _this;
	    }

	    _createClass(FormWrapper, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var Container = this.props.container;
	            return _react2.default.createElement(
	                "div",
	                { className: "form-wrapper", __self: this
	                },
	                _react2.default.createElement(
	                    Container,
	                    {
	                        __self: this
	                    },
	                    this.props.blocks.map(function (block, index) {
	                        return _react2.default.createElement(_BlockWrapper2.default, {
	                            key: index,
	                            block: block,
	                            blockState: _this2.getBlockState(index),
	                            blockIndex: index,
	                            onBlockEvent: _this2.onBlockEvent,
	                            __self: _this2
	                        });
	                    })
	                )
	            );
	        }
	    }, {
	        key: "getBlockState",
	        value: function getBlockState(index) {
	            if (index < this.state.currentBlockIndex) {
	                return _BlockWrapper.BLOCK_STATE.DONE;
	            }
	            if (index == this.state.currentBlockIndex) {
	                return _BlockWrapper.BLOCK_STATE.DOING;
	            }
	            return _BlockWrapper.BLOCK_STATE.TODO;
	        }
	    }, {
	        key: "onBlockEvent",
	        value: function onBlockEvent(event, index) {
	            switch (event) {
	                case _BlockWrapper.BLOCK_EVENT.NEXT:
	                    this.setState({ currentBlockIndex: index + 1 });
	                    break;
	                case _BlockWrapper.BLOCK_EVENT.PREVIOUS:
	                    this.setState({ currentBlockIndex: index - 1 });
	                    break;
	            }
	        }
	    }]);

	    return FormWrapper;
	}(_react2.default.Component);

	exports.default = FormWrapper;


	FormWrapper.propTypes = {
	    container: _propTypes2.default.func
	};

	FormWrapper.defaultProps = {
	    container: _FormContainer2.default
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BLOCK_EVENT = exports.BLOCK_STATE = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(30);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _FieldWrapper = __webpack_require__(60);

	var _FieldWrapper2 = _interopRequireDefault(_FieldWrapper);

	var _BlockContainer = __webpack_require__(69);

	var _BlockContainer2 = _interopRequireDefault(_BlockContainer);

	var _fieldConnect = __webpack_require__(62);

	var _validation = __webpack_require__(68);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BLOCK_STATE = exports.BLOCK_STATE = {
	    TODO: "BLOCK-TODO",
	    DOING: "BLOCK-DOING",
	    DONE: "BLOCK-DONE"
	};

	var BLOCK_EVENT = exports.BLOCK_EVENT = {
	    NEXT: "NEXT",
	    PREVIOUS: "PREVIOUS"
	};

	var BlockWrapper = function (_React$Component) {
	    _inherits(BlockWrapper, _React$Component);

	    function BlockWrapper() {
	        _classCallCheck(this, BlockWrapper);

	        var _this = _possibleConstructorReturn(this, (BlockWrapper.__proto__ || Object.getPrototypeOf(BlockWrapper)).call(this));

	        _this.state = {
	            forceValidation: false
	        };
	        _this.onBlockEvent = _this.onBlockEvent.bind(_this);
	        return _this;
	    }

	    _createClass(BlockWrapper, [{
	        key: "onBlockEvent",
	        value: function onBlockEvent(event, index) {
	            var _this2 = this;

	            if (this.props.block.fields.map(function (field) {
	                return field.doValidation == undefined ? _validation.VALID : field.doValidation(_this2.props.fieldContext);
	            }).map(function (validation) {
	                return validation.isValid;
	            }).reduce(function (acc, value) {
	                return acc && value;
	            })) {
	                this.props.onBlockEvent(event, index);
	            };
	            this.setState({ forceValidation: true });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this3 = this;

	            var Container = this.props.container;
	            return _react2.default.createElement(
	                "div",
	                { className: "block-wrapper " + this.props.blockState.toLowerCase(), __self: this
	                },
	                _react2.default.createElement(
	                    Container,
	                    _extends({}, this.props, { onBlockEvent: this.onBlockEvent, __self: this
	                    }),
	                    this.props.block.fields.map(function (field, index) {
	                        return _react2.default.createElement(_FieldWrapper2.default, {
	                            key: index,
	                            field: field,
	                            tabIndex: index + 1,
	                            forceValidation: _this3.state.forceValidation,
	                            __self: _this3
	                        });
	                    })
	                )
	            );
	        }
	    }]);

	    return BlockWrapper;
	}(_react2.default.Component);

	BlockWrapper.propTypes = {
	    blockIndex: _propTypes2.default.number,
	    onBlockEvent: _propTypes2.default.func.isRequired,
	    blockState: _propTypes2.default.string,
	    block: _propTypes2.default.object.isRequired,
	    container: _propTypes2.default.func
	};

	BlockWrapper.defaultProps = {
	    blockState: BLOCK_STATE.DOING,
	    container: _BlockContainer2.default
	};

	exports.default = (0, _fieldConnect.fieldConnect)(BlockWrapper);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FIELD_STATE = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(30);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _fieldType = __webpack_require__(61);

	var _fieldConnect = __webpack_require__(62);

	var _TextField = __webpack_require__(64);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _FieldContainer = __webpack_require__(65);

	var _FieldContainer2 = _interopRequireDefault(_FieldContainer);

	var _validation = __webpack_require__(68);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FIELD_STATE = exports.FIELD_STATE = {
	    DEFAULT: "FIELD-DEFAULT",
	    VALID: "FIELD-VALID",
	    ERROR: "FIELD-ERROR"
	};

	var getFieldState = function getFieldState(validation, props) {
	    if (!props.forceValidation && props.fieldContext[props.field.id] == undefined) {
	        return FIELD_STATE.DEFAULT;
	    }
	    return validation.isValid ? FIELD_STATE.VALID : FIELD_STATE.ERROR;
	};

	var injectField = function injectField(props) {
	    var fieldProps = {
	        field: props.field,
	        tabIndex: props.tabIndex,
	        setFieldValue: props.setFieldValue,
	        contextValue: props.fieldContext[props.field.id]
	    };
	    switch (props.field.type) {
	        case _fieldType.INPUT_TEXT:
	        case _fieldType.INPUT_MAIL:
	            return _react2.default.createElement(_TextField2.default, _extends({}, fieldProps, {
	                __self: undefined
	            }));
	        default:
	            return _react2.default.createElement("div", { className: "unknown-field", __self: undefined
	            });
	    }
	};

	var FieldWrapper = function (_React$Component) {
	    _inherits(FieldWrapper, _React$Component);

	    function FieldWrapper() {
	        _classCallCheck(this, FieldWrapper);

	        return _possibleConstructorReturn(this, (FieldWrapper.__proto__ || Object.getPrototypeOf(FieldWrapper)).apply(this, arguments));
	    }

	    _createClass(FieldWrapper, [{
	        key: "render",
	        value: function render() {
	            var Container = this.props.container;
	            var validation = this.props.field.doValidation == undefined ? _validation.VALID : this.props.field.doValidation(this.props.fieldContext);
	            var fieldState = getFieldState(validation, this.props);
	            return _react2.default.createElement(
	                "div",
	                { className: "field-wrapper " + fieldState.toLowerCase(), __self: this
	                },
	                _react2.default.createElement(
	                    Container,
	                    { field: this.props.field, validation: validation, fieldState: fieldState, __self: this
	                    },
	                    injectField(this.props)
	                )
	            );
	        }
	    }]);

	    return FieldWrapper;
	}(_react2.default.Component);

	FieldWrapper.propTypes = {
	    field: _propTypes2.default.object.isRequired,
	    container: _propTypes2.default.func,
	    forceValidation: _propTypes2.default.bool,
	    tabIndex: _propTypes2.default.number
	};

	FieldWrapper.defaultProps = {
	    container: _FieldContainer2.default,
	    forceValidation: false,
	    tabIndex: 1
	};

	exports.default = (0, _fieldConnect.fieldConnect)(FieldWrapper);

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var INPUT_TEXT = exports.INPUT_TEXT = "INPUT_TEXT";
	var INPUT_MAIL = exports.INPUT_MAIL = "INPUT_MAIL";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fieldConnect = undefined;

	var _actions = __webpack_require__(63);

	var _reactRedux = __webpack_require__(28);

	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        setFieldValue: function setFieldValue(id, value) {
	            return dispatch((0, _actions.setFieldValueAction)(id, value));
	        }
	    };
	};

	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        fieldContext: state.fieldContext
	    };
	};

	var fieldConnect = exports.fieldConnect = function fieldConnect(Element) {
	    return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Element);
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setFieldValueAction = undefined;

	var _constants = __webpack_require__(55);

	var setFieldValueAction = exports.setFieldValueAction = function setFieldValueAction(id, value) {
	    return {
	        type: _constants.SET_FIELD_VALUE,
	        fieldId: id,
	        fieldValue: value
	    };
	};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(30);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _fieldType = __webpack_require__(61);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextField = function (_React$Component) {
	    _inherits(TextField, _React$Component);

	    function TextField(props) {
	        _classCallCheck(this, TextField);

	        var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

	        _this.state = {
	            value: props.contextValue || ""
	        };
	        _this.handleChange = _this.handleChange.bind(_this);
	        _this.onBlur = _this.onBlur.bind(_this);
	        return _this;
	    }

	    _createClass(TextField, [{
	        key: "handleChange",
	        value: function handleChange(event) {
	            var value = event.target.value;
	            this.setState({ value: value });
	        }
	    }, {
	        key: "onBlur",
	        value: function onBlur() {
	            this.props.setFieldValue(this.props.field.id, this.state.value.trim());
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "text-field", __self: this
	                },
	                _react2.default.createElement("input", { type: this.props.field.type == _fieldType.INPUT_MAIL ? "email" : "text",
	                    placeholder: typeof placeholder !== 'undefined' ? placeholder : "",
	                    maxLength: "38",
	                    name: this.props.field.id,
	                    id: this.props.field.id,
	                    tabIndex: this.props.tabIndex,
	                    value: this.state.value,
	                    onChange: this.handleChange,
	                    onBlur: this.onBlur, __self: this
	                })
	            );
	        }
	    }]);

	    return TextField;
	}(_react2.default.Component);

	exports.default = TextField;


	TextField.propTypes = {
	    contextValue: _propTypes2.default.string,
	    tabIndex: _propTypes2.default.number,
	    setFieldValue: _propTypes2.default.func,
	    field: _propTypes2.default.shape({
	        id: _propTypes2.default.string.isRequired,
	        placeholder: _propTypes2.default.string,
	        style: _propTypes2.default.string
	    }).isRequired
	};

	TextField.defaultProps = {
	    tabIndex: 0
	};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _FieldWrapper = __webpack_require__(60);

	__webpack_require__(66);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FieldContainer = function FieldContainer(props) {
	    return _react2.default.createElement(
	        "div",
	        { className: "field-container", __self: undefined
	        },
	        _react2.default.createElement(
	            "div",
	            { className: "field-label", __self: undefined
	            },
	            props.field.label
	        ),
	        props.children,
	        props.fieldState != _FieldWrapper.FIELD_STATE.ERROR ? null : _react2.default.createElement(
	            "div",
	            { className: "field-error-message", __self: undefined
	            },
	            props.validation.message
	        )
	    );
	};

	exports.default = FieldContainer;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!../../node_modules/less-loader/index.js!./field-container.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!../../node_modules/less-loader/index.js!./field-container.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".field-container {\n  margin: 15px 0;\n}\n.field-container .field-label {\n  font-size: 16px;\n  line-height: 140%;\n  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\n}\n.field-container .field-error-message {\n  padding: 2px 10px;\n  color: white;\n  font-weight: 500;\n  background-color: #F44336;\n  border-radius: 0 0 10px 10px;\n}\n.text-field input {\n  background-color: #E8EAF6;\n  border: none;\n  width: 100%;\n  padding: 10px 10px 10px 5px;\n  font-size: 16px;\n  border-left: solid transparent 5px;\n}\n.field-valid .text-field input {\n  border-left-color: #4CAF50;\n}\n.field-error .text-field input {\n  border-left-color: #F44336;\n}\n", ""]);

	// exports


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Validation = exports.Validation = function Validation(isValid, message) {
	    _classCallCheck(this, Validation);

	    this.isValid = isValid;
	    this.message = message;
	};

	var VALID = exports.VALID = new Validation(true, "");

	var isNullOrUndefined = exports.isNullOrUndefined = function isNullOrUndefined(value) {
	    return value === null || typeof value === "undefined" || value === "UNDEFINED" || value === "";
	};

	var isDefined = exports.isDefined = function isDefined(field, errorMessage) {
	    return function (context) {
	        if (isNullOrUndefined(context[field])) {
	            return new Validation(false, errorMessage);
	        }
	        return VALID;
	    };
	};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(30);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _BlockWrapper = __webpack_require__(59);

	__webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BlockContainer = function BlockContainer(props) {
	    return _react2.default.createElement(
	        "div",
	        { className: "block-container app-row", __self: undefined
	        },
	        _react2.default.createElement(
	            "div",
	            { className: "block-header app-col-xs-12", __self: undefined
	            },
	            _react2.default.createElement(
	                "div",
	                { className: "block-label", __self: undefined
	                },
	                props.blockIndex + 1,
	                ". ",
	                props.block.label
	            )
	        ),
	        props.blockState != _BlockWrapper.BLOCK_STATE.DOING ? null : _react2.default.createElement(
	            "div",
	            { className: "app-col-xs-12 app-col-sm-8", __self: undefined
	            },
	            _react2.default.createElement(
	                "div",
	                { className: "block-inner", __self: undefined
	                },
	                props.children,
	                _react2.default.createElement(
	                    "div",
	                    { className: "cta-layer", __self: undefined
	                    },
	                    props.blockIndex > 0 ? _react2.default.createElement(
	                        "button",
	                        { className: "cta secondary-cta", onClick: function onClick() {
	                                return props.onBlockEvent(_BlockWrapper.BLOCK_EVENT.PREVIOUS, props.blockIndex);
	                            }, __self: undefined
	                        },
	                        "Previous"
	                    ) : null,
	                    _react2.default.createElement(
	                        "button",
	                        { className: "cta principal-cta ", onClick: function onClick() {
	                                return props.onBlockEvent(_BlockWrapper.BLOCK_EVENT.NEXT, props.blockIndex);
	                            }, __self: undefined
	                        },
	                        "Next"
	                    )
	                )
	            )
	        )
	    );
	};

	BlockContainer.propTypes = {
	    onBlockEvent: _propTypes2.default.func,
	    blockIndex: _propTypes2.default.number,
	    blockState: _propTypes2.default.string,
	    block: _propTypes2.default.object.isRequired
	};

	exports.default = BlockContainer;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(71);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FormContainer = function FormContainer(props) {
	    return _react2.default.createElement(
	        "div",
	        { className: "form-container", __self: undefined
	        },
	        props.children
	    );
	};

	exports.default = FormContainer;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!../../node_modules/less-loader/index.js!./form-container.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/autoprefixer-loader/index.js!../../node_modules/less-loader/index.js!./form-container.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@media (min-width: 1200px) {\n  .form-container {\n    width: 1170px;\n    margin: auto;\n  }\n}\n@media (min-width: 992px) {\n  .form-container {\n    width: 970px;\n    margin: auto;\n  }\n}\n@media (min-width: 768px) {\n  .form-container {\n    width: 750px;\n    margin: auto;\n  }\n}\n.form-container {\n  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;\n}\n", ""]);

	// exports


/***/ })
/******/ ])
});
;