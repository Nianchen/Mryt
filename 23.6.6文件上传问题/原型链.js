//只有函数具有原型
function Person () {
    
}
// 说明：name,age,job这些本不应该放在原型上，只是为了说明属性查找机制
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function ()
{
   console.log( this.name );
};
let person1 = new Person()
let person2 = new Person()
//通过new调用Person的构造函数


person1.sayName()
// Nicholas
//在函数原型上声明的方法 在每一个实例对象上都可以调用

Person.prototype.constructor === Person //true
//原型上的构造函数指向函数本身

person1.__proto__ == Person.prototype // true
console.log(person1.__proto__ === Person.prototype);