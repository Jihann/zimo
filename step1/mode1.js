/**
 * Created by JBH on 2015/4/28.
 */

//元素总数
var TOTAL_NUM = 5;

//从元素数组中随机抽取3个元素
var COUNT = 3;

//初始化数组
var arrays = new Array(TOTAL_NUM + 1).join('0').split('').map(function() {
   return Math.random().toString(36).substr(2);
});

//结果集
var results = [];

//输入原数组
console.log('----------原数组为：' + arrays);