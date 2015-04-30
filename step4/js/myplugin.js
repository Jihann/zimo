/**
 * Created by JBH on 2015/4/29.
 * 优化插件代码，采用OO形式
 */
;(function(jQuery, window, undefined) {
    var Beautifier = function(ele, opt) {
        this.$element = ele;
        opt = opt !== undefined ? opt : undefined;
        this.defaults = {
            color : 'red',
            fontSize : '12px',
            textDecoration : 'none'
        };
        this.options = jQuery.extend({}, this.defaults, opt);
    };

    //定义方法
    Beautifier.prototype = {
        beautify : function() {
            return this.$element.css({
                color : this.options.color,
                fontSize : this.options.fontSize,
                textDecoration : this.options.textDecoration
            });
        }
    };

    //jQuery plugin
    jQuery.fn.myPlugin = function(options) {
        window.console.log('--------------- my plugin --------------');
        var beautifier = new Beautifier(this, options);
        return beautifier.beautify();
    };
}(jQuery, window));