"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
function makeFilterableComponent(e){return function(t){function n(e){_classCallCheck(this,n);var t=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.itemsChanged=function(e){t.setState({items:e})},t.initialItemsChanged=function(e){t.initialItems=e,t.setState({items:e}),t.props.itemsChanged&&t.props.itemsChanged(e)},t.filterChange=function(e,n){if(t.filterState[e]=n,!t.ajaxFilter&&"search"==e)return void t.itemsChanged(t.filterItems(t.initialItems,n));clearTimeout(t.ajaxTimer),t.ajaxRequest&&t.ajaxRequest.abort();var i=t.filterState;i.selected=t.props.selected.map(function(e){return e.value}),t.setState({loading:!0}),t.ajaxTimer=setTimeout(function(){t.ajaxRequest=$.ajax({url:t.props.filterUrl,data:$.param(i),dataType:"json",success:function(e){t.setState({loading:!1}),t.initialItemsChanged(SelectList.formatItems(e))},error:function(){}})},300)},t.initialItems=SelectList.formatItems(e.items),t.state={items:t.initialItems,loading:!1},t.ajaxFilter=SelectList.countItems(t.initialItems)>=e.limit&&e.filterUrl,t.ajaxTimer=null,t.ajaxRequest=null,t.filterState={},t}return _inherits(n,t),_createClass(n,[{key:"filterItems",value:function(e,t){var n=this;return e=e.map(function(e){e=Object.assign({},e),e.children&&(e.children=n.filterItems(e.children,t));var i=e.children&&e.children.length>0,r=String(e.label).toLowerCase().includes(t.toLowerCase());return!(!r&&!i)&&e}),e.filter(function(e){return e})}},{key:"render",value:function(){var t=this;return React.createElement(e,_extends({},this.props,{loading:this.state.loading,filterChange:function(e,n){return t.filterChange(e,n)},initialItems:this.initialItems,items:this.state.items,itemsChanged:this.initialItemsChanged}))}}]),n}(React.Component)}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();