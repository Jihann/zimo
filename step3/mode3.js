/**
 * Created by JBH on 2015/4/29
 * JS类型判断及鸭式辨型
 */
//①：instanceof
//三种检测对象的类方式：instanceof、constructor、构造函数名字
//尽管构造函数是原型的唯一标识，instanceof运算符的右操作数是构造函数，
// instanceof实际计算过程中检测的是对象的继承关系，而不是检测的创建对象时的构造函数，
// 只是使用了构造函数作为中介
console.log([1,2,3] instanceof Array); //true
console.log([1,2,3] instanceof Object); //true

///////////////////////////////////////////////////////////////////////////
//当然也可以使用isPrototypeOf 来判断一个对象是否存在于另一对象的原型链中，此时不使用构造函数作为中介
//注意：多个执行上下文时（例如存在不同框架时）instanceof使用有限制
var array1 = new Array();
console.log(Array.prototype.isPrototypeOf(array1)); //true
console.log(Array.prototype.isPrototypeOf([1,2,3])); //true

////////////////////////////////////////////////////////////////////////
//②：constructor
//
var F = function() {};
var p = F.prototype;
var c = p.constructor;
console.log(p);
console.log(c);
console.log(c === F);
//因而对象继承的constructor均指代他们的构造函数
var ff = new F();
console.log(ff.constructor === F); //true
var array2 = new Array();
console.log(array2.constructor === Array); //true
//

function typeParam(str) {
    switch (str.constructor) {
        case Number :
            return "Number：" + str;
        case String :
            return "String：" + str;
        case Array :
            return "Array：" + str;
    }
}
console.log(typeParam([1,2,3]));
console.log(typeParam("javascript"));
console.log(typeParam(10));
//注意： 同instanceof在多个上下文下没法使用，另外并不是所有的对象都包含constructor属性
function Person(name) {
    this.name = name;
    this.getName  = function() {
        return this.name;
    }
}
var user = new Person("zhangsan");
console.log(user.constructor === Person); //true
console.log(Person.prototype); // person {}
console.log(Person.constructor); //Function
console.log(user.getName()); //zhangsan
console.log("-------------------------------------------------------------------------------");
//此时新定义的原型对象不含有constructor属性，因而Person的实例也不包含constructor属性
function Person1(name) {
    this.name = name;
    this.getName = function() {
        return this.name;
    }
}
//解决方法：可显示的给原型添加构造方法
Person1.prototype = {
    construstor : Person1,
    toString : function() {
        return this.name;
    }
};
var user1 = new Person1("zhangsan");
console.log(user1.constructor === Person1);
console.log(Person1.prototype);
console.log(Person1.constructor);
console.log(user1.getName());
console.log(user1.toString());

//③：构造函数名字
//没有intanceof和constructor的执行上下文问题，一个窗口中的Array构造函数和另一个窗口内Array构造函数不等，
// 但是构造函数名字相同，但是并不是每个函数都有名字

//④：鸭式辨型
//关注对象能做什么，而不是对象的类是什么
