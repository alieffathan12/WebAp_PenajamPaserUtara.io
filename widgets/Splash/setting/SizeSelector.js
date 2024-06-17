// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Splash/setting/SizeSelector.html":'\x3cdiv class\x3d"size-selector clearFix"\x3e\r\n  \x3cdiv class\x3d"titles"\x3e${nls.size}\x3c/div\x3e\r\n  \x3cdiv class\x3d"sizes jimu-float-leading"\x3e\r\n    \x3cdiv class\x3d"size-box-container" title\x3d"25%"\x3e\r\n      \x3cdiv class\x3d"size-box percent25" data-dojo-attach-point\x3d"percent25"\x3e\x3c/div\x3e\r\n      25%\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"size-box-container" title\x3d"50%"\x3e\r\n      \x3cdiv class\x3d"size-box percent50" data-dojo-attach-point\x3d"percent50"\x3e\x3c/div\x3e\r\n      50%\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"size-box-container" title\x3d"75%"\x3e\r\n      \x3cdiv class\x3d"size-box percent75" data-dojo-attach-point\x3d"percent75"\x3e\x3c/div\x3e\r\n      75%\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"size-box-container" title\x3d"100%"\x3e\r\n      \x3cdiv class\x3d"size-box percent100" data-dojo-attach-point\x3d"percent100"\x3e\x3c/div\x3e\r\n      100%\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"size-box-container" title\x3d"${nls.custom}"\x3e\r\n      \x3cdiv class\x3d"size-box custom" data-dojo-attach-point\x3d"custom"\x3e\x3c/div\x3e\r\n      ${nls.custom}\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"wh" class\x3d"wh jimu-float-leading hide"\x3e\r\n    \x3cdiv class\x3d"wh-item"\x3e\r\n      \x3cdiv class\x3d"lable"\x3e${nls.width}\x3c/div\x3e\r\n      \x3cdiv class\x3d"inputs"\x3e\r\n        \x3cinput type\x3d"text" class\x3d"text-box" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-point\x3d"width"\x3e\r\n        \x3cspan class\x3d"unit"\x3epx\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"wh-item"\x3e\r\n      \x3cdiv class\x3d"lable"\x3e${nls.height}\x3c/div\x3e\r\n      \x3cdiv class\x3d"inputs"\x3e\r\n        \x3cinput type\x3d"text" class\x3d"text-box" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-point\x3d"height"\x3e\r\n        \x3cspan class\x3d"unit"\x3epx\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SizeSelector.html dijit/form/NumberSpinner jimu/dijit/CheckBox".split(" "),function(e,c,d,a,f,g,h,k){return e([f,g,h],{templateString:k,nls:null,_size:null,_isCustom:!1,postCreate:function(){this.inherited(arguments);this._initSize()},startup:function(){this.inherited(arguments)},_initSize:function(){this.own(d(this.percent25,"click",c.hitch(this,function(){this._cleanSelected();
a.addClass(this.percent25,"selected")})));this.own(d(this.percent50,"click",c.hitch(this,function(){this._cleanSelected();a.addClass(this.percent50,"selected")})));this.own(d(this.percent75,"click",c.hitch(this,function(){this._cleanSelected();a.addClass(this.percent75,"selected")})));this.own(d(this.percent100,"click",c.hitch(this,function(){this._cleanSelected();a.addClass(this.percent100,"selected")})));this.own(d(this.custom,"click",c.hitch(this,function(){this._cleanSelected();a.addClass(this.custom,
"selected");this._setCustomSizeDisplay()})))},_setCustomSizeDisplay:function(){a.hasClass(this.custom,"selected")?a.setStyle(this.wh,"display","block"):a.setStyle(this.wh,"display","none")},_cleanSelected:function(){a.removeClass(this.percent25,"selected");a.removeClass(this.percent50,"selected");a.removeClass(this.percent75,"selected");a.removeClass(this.percent100,"selected");a.removeClass(this.custom,"selected");this._setCustomSizeDisplay()},getValue:function(){var b={mode:"percent"};a.hasClass(this.percent25,
"selected")?b.percent="25%":a.hasClass(this.percent50,"selected")?b.percent="50%":a.hasClass(this.percent75,"selected")?b.percent="75%":a.hasClass(this.percent100,"selected")?b.percent="100%":a.hasClass(this.custom,"selected")&&(b.mode="wh");b.wh={};b.wh.w=this.width.getValue();b.wh.h=this.height.getValue();return b},setValue:function(b){this._cleanSelected();"object"===typeof b&&("undefined"!==typeof b.wh&&(this.width.setValue(b.wh.w),this.height.setValue(b.wh.h)),"wh"===b.mode&&a.addClass(this.custom,
"selected"),"percent"===b.mode&&"undefined"!==typeof b.percent&&("25%"===b.percent?a.addClass(this.percent25,"selected"):"50%"===b.percent?a.addClass(this.percent50,"selected"):"75%"===b.percent?a.addClass(this.percent75,"selected"):a.addClass(this.percent100,"selected")));this._setCustomSizeDisplay()}})});