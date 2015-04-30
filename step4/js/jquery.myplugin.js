/**
 * Created by JBH on 2015/4/29.
 */
  //jQuery plugin
jQuery.fn.myPlugin = function(options) {
    //给插件定义默认属性值
    var defaults = {
        color : 'red',
        fontSize : '12px'
    };
    //设置一个空对象，保护插件默认值
    var settings = jQuery.extend({}, defaults, options);
    return this.css({
        color : settings.color,
        fontSize : settings.fontSize
    });
    //this代表jQuery
   // this.css('color', 'red');
    //迭代,
    // 支持jQuery链式调用风格
   // return this.each(function() {
      // var _this = jQuery(this);
      //  _this.append(' ' + _this.attr('href'));
   // });
};