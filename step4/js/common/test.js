/**
 * Created by JBH on 2015/4/30.
 */

//假设别人写的代码后面没有分号;
var index = function() {
    //花括号后面没有分号
}

//自己的代码
//(function() {
    //alert('test');
//})();

//以上会报错，undefined is not a function
//将别人的代码和自己写的代码相连接，因为中间没有分号，所以最好加上分号
//;(function() {
    //alert('test');
//})();

//同时，将系统变量以参数形式传递到插件内部也是个不错的实践。
//当我们这样做之后，window等系统变量在插件内部就有了一个局部的引用，可以提高访问速度，会有些许性能的提升
;(function($, window, document, undefined) {
    alert('test');
})(jQuery, window, document);