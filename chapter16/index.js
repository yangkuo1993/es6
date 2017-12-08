/*
* class
* */
/*
class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    toString () {
        return `x:${this.x},y:${this.y}`
    }
}
let newPoint = new Point(1,2);
// console.log(newPoint.toString())
// console.log(Point === Point.prototype.constructor)

console.log(newPoint.hasOwnProperty('x'))
console.log(newPoint.hasOwnProperty('y'))
console.log(newPoint.hasOwnProperty('toString'))
console.log(newPoint.__proto__.hasOwnProperty('toString'))*/

/*
const MyClass = class me111 {
    getClassName () {
        return me111.name
    }
};
var newOne = new MyClass();
console.log(newOne.getClassName())*/

/*
let person = new class{
    constructor(name){
        this.name = name
    }
    getName () {
        return this.name
    }
}('张三');
console.log(person.getName());*/

/*class Logger {
    constructor(){
        this.printName = this.printName.bind(this)
    }
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
    get prop() {
        return 'getter'
    }
    set prop(value) {
        console.log(`setValue${value}`)
    }
}
const logger = new Logger();
const {printName} = logger;
printName();
logger.prop = '999';
logger.prop*/

/*
class Foo {
    static demo(){
        console.log('demo')
    }
};
Foo.demo();
var newOne = new Foo();
newOne.demo()*/
/*

class Foo{
    propName = '杨阔'
    static demo(){
        this.demo1();
    }
    static demo1 (){
        console.log('这是多么哦')
    }
    demo1(){
        console.log('oooo')
    }
}
Foo.demo();
var demo = new Foo();
console.log(demo.propName)*/

/*
function Person(name) {
    if(new.target === Person) {
        this.name = name;
    }else{
        throw new Error('必须是new操作创建对象')
    }
}
var person = new Person('张三'); // 正确
// var notAPerson = Person.call(person, '张三');  // 报错*/

/*
class Shape{
    constructor(){
        if(new.target === Shape) {
            throw new Error('必须是继承实例才能史使用')
        }
    }
}
class chilShape extends Shape{
    constructor(){
        super();
    }
}
var newOne = new chilShape();*/

/*class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static hello() {
        console.log('hello world');
    }
}
class ColorPoint extends Point{
    constructor(x, y, color){
        super(x, y);
        this.color = color;
    }
}
let cp = new ColorPoint(4,9,'red');
console.log(cp.x)
console.log(cp.y)
console.log(cp.color)
console.log(cp instanceof Point)
console.log(cp instanceof ColorPoint)
ColorPoint.hello();
console.log(Object.getPrototypeOf(ColorPoint) === Point)*/

