/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
/*!
 * ExpressionEngine Custom Interact jQuery Event
 *
 * @package		ExpressionEngine
 * @subpackage	Control Panel
 * @category	Control Panel
 * @author		EllisLab Dev Team
 * @link		https://ellislab.com
 */
!function(e){function t(){try{if("localStorage"in window&&null!==window.localStorage)return localStorage.setItem("ee_ping",1),localStorage.removeItem("ee_ping"),!0}catch(e){return!1}}function n(){return e.now()+(65536*(1+Math.random())|0).toString(16).substring(1)}var a=t()?localStorage:{setItem:function(e,t){var n=new Date;n.setTime(n.getTime()+5e3),document.cookie=e+"="+escape(t)+"; expires="+n.toGMTString()+"; path=/"},removeItem:function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT"},getItem:function(e){var t=new RegExp("[,; ]"+e+"=([^\\s,;]*)"),n=" "+document.cookie,a=n.match(t);return a?unescape(a[1]):void 0}},i=n(),o="ee_broadcast",s=t()?20:1500,r=e(window);EE.BROADCAST_UID=i;var u={_queue:[],_waiting:!1,_lastMessage:void 0,sendMessage:function(e){this._queue.push(function(t){a.setItem(o,e),u._lastMessage=e,setTimeout(function(){a.removeItem(o),u._lastMessage=void 0,t()},s)}),this.dequeue()},receiveMessage:function(e){var t=JSON.parse(e),n=t.ns?"."+t.ns:"",a=t.uid;a!=i&&r.trigger({type:"_broadcastMessage"+n,sender:a,receiver:i},t.data)},dequeue:function(){if(!this._waiting){this._waiting=!0;var e=this._queue.shift();e(function(){u._waiting=!1,u._queue.length&&u.dequeue()})}}},c={local:{setup:function(){r.on("storage",function(e){var t=e.originalEvent;t.key==o&&t.newValue&&u.receiveMessage(t.newValue)})},teardown:function(){r.off("storage")}},cookie:{_timer:null,setup:function(){function e(){var n=a.getItem(o);n!=t&&(u.receiveMessage(n),t=n),c.cookie._timer=setTimeout(e,1e3)}var t=void 0;e()},teardown:function(){clearTimeout(c.cookie._timer)}}};e.event.special.broadcast={setup:function(){c[t()?"local":"cookie"].setup()},add:function(t){var n=t.namespace?"."+t.namespace:"";e.event.add(this,"_broadcastMessage"+n,t.handler)},trigger:function(t,n){if(t.target==window){var a=JSON.stringify({ns:t.namespace,uid:i,data:e.makeArray(arguments).slice(1)});return u.sendMessage(a),!1}},teardown:function(n){e(this).unbind("_broadcastMessage"),c[t()?"local":"cookie"].teardown()}}}(jQuery);