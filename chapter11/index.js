/*
* Reflect
* */
/*
console.log('assign' in Object);
console.log(Reflect.has(Object, 'assign'))*/

/*
var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar
    }
};
console.log(Reflect.get(myObject, 'foo'))
console.log(Reflect.get(myObject, 'bar'))
console.log(Reflect.get(myObject, 'baz'))*/
/*
var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
        return this.foo + this.bar
    }
};
var myReceiverObject = {
    foo: 4,
    bar: 4,
}
console.log(Reflect.get(myObject, 'baz', myReceiverObject))*/

// Reflect.get(1, '123')

/*
var myObject = {
    foo: 1,
    set bar(value) {
        return this.foo = value
    }
};
console.log(myObject.foo);
myObject.foo = 3;
console.log(myObject.foo)
Reflect.set(myObject, 'foo', 999);
console.log(myObject.foo)
Reflect.set(myObject, 'bar', 9999);
console.log(myObject.foo)*/

/*
var myObject = {
    foo: 4,
    set bar(value) {
        return this.foo = value
    }
};
var receiver = {
    foo: 1
};
Reflect.set(myObject, 'bar', 5, receiver);
console.log(myObject.foo)
console.log(receiver.foo)*/

/*
let p = {
    a: 'a'
};
let handler = {
    set (target, key, value, receiver) {
        console.log('set');
        Reflect.set(target, key, value, receiver);
    },
    defineProperty (object, key, describe) {
        console.log('defineProperty');
        Reflect.defineProperty(object, key, describe)
    }
};
var proxy = new Proxy(p, handler);
proxy.a = 'A'*/
/*let p = {
    a: 'a'
};
let handler = {
    set (target, key, value, receiver) {
        console.log('set');
        Reflect.set(target, key, value);
    },
    defineProperty (object, key, describe) {
        console.log('defineProperty');
        Reflect.defineProperty(object, key, describe)
    }
};
var proxy = new Proxy(p, handler);
proxy.a = 'A'*/

/*
var myObject = {
    foo: 1
};
console.log('foo' in myObject);
console.log(Reflect.has(myObject, 'foo'))*/

/*
var myObject = {
    foo: 1
};
// console.log(delete myObject['foo'])
console.log(Reflect.deleteProperty(myObject, 'foo'));
console.log(myObject)*/

/*
function Greeting(name) {
    this.name = name
};
// var instance = new Greeting('小明');
// console.log(instance.name)
var instance = Reflect.construct(Greeting, ['小明','张三','李四']);
console.log(instance.name)*/
/*
function FancyThing(name) {
    this.name = name
};
const myObj = new FancyThing();

// 旧写法
console.log(Object.getPrototypeOf(myObj) === FancyThing.prototype);

// 新写法
console.log(Reflect.getPrototypeOf(myObj) === FancyThing.prototype);*/
/*function F() {
}
function E() {
}
const myObj = new F();
console.log(Reflect.getPrototypeOf(myObj) === F.prototype);
// Reflect.setPrototypeOf(myObj, E.prototype);
Object.setPrototypeOf(myObj, E.prototype)
console.log(Reflect.getPrototypeOf(myObj) === F.prototype);
console.log(Reflect.getPrototypeOf(myObj) === E.prototype);*/

/*
const ages = [11, 33, 12, 54, 18, 96];

// const youngest = Math.min.apply(Math, ages);
// const oldest = Math.max.apply(Math, ages);
// const type = Object.prototype.toString.call(youngest);
// console.log(type)
//
// const youngest = Reflect.apply(Math.min, Math, ages);
// const oldest = Reflect.apply(Math.max, Math, ages);
// const type = Reflect.apply(Object.prototype.toString, youngest, []);
// console.log(type)*/
/*
function obj() {

};
// Object.defineProperty(obj, 'date', {
//     value: () => Date.now()
// });
// console.log(obj.date());
Reflect.defineProperty(obj, 'date', {
    value: () => Date.now()
});
console.log(obj.date());*/

/*var myObject = {
};
Object.defineProperty(myObject, 'foo', {
    writable:false,
    enumerable: true,
    configurable: false,
    value: 1234
});
// console.log(Object.getOwnPropertyDescriptor(myObject ,'foo'))
console.log(Reflect.getOwnPropertyDescriptor(myObject ,'foo'))*/

/*var myObject = {};
console.log(Object.isExtensible(myObject))
Reflect.preventExtensions(myObject)
console.log(Reflect.isExtensible(myObject))*/

/*var myObject = {
    foo: 1,
    bar: 2,
    [Symbol.for('baz')]: 3,
    [Symbol.for('bing')]: 4,
};
console.log(Object.getOwnPropertyNames(myObject))
console.log(Object.getOwnPropertySymbols(myObject))
console.log(Reflect.ownKeys(myObject))*/

