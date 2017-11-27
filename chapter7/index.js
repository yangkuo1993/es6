/*
* 对象的扩展
* */
// const foo = 'bar';
// const baz = {foo};
// console.log(baz)

// const baz = {foo: foo};
// console.log(baz)

// function f(x, y) {
//     let z = 1;
//     return {x,z}
// }
// console.log(f(1,2))

// const obj = {
//     class () {
//     }
// }
// let obj = {
//     ['a' + 'b'] : 1,
//     b: 222
// }
// let obj = {
//     ['h' + 'ello'] (){
//         return 111;
//     }
// };
// console.log(obj.hello());
// const foo = 'bar';
// const baz = { [foo]: 'abc'};
// console.log(baz)

// const keyA = {a: 1};
// const keyB = {b: 2};
//
// const myObject = {
//     [keyA]: 'valueA',
//     [keyB]: 'valueB'
// };
//
// console.log(myObject)

// var obj = {
//     get foo(){},
//     set foo(value){}
// };
// const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
// console.log(descriptor.get.name)
// console.log(descriptor.set.name)

// console.log(Object.is('foo','foo'));
// console.log(Object.is({}, {}))
// console.log({} === {})
// console.log(0 === -0);
// console.log(NaN === NaN);
// console.log(Object.is(0,-0));
// console.log(Object.is(NaN,NaN))

// var target = {a: 1};
// var source1 = {b: 2};
// var source2 = {c: 3};
// Object.assign(target, source1, source2);
// console.log(target)

// const target = {a: 1,b:1};
// const source1 = {b: 2,c:3};
// const source2 = {c: 4};
// Object.assign(target, source1,source2);
// console.log(target)

// console.log(Object.assign(2))

// Object.assign(undefined)
// Object.assign(null)

// Object.assign(2, undefined)

// var demo = {};
// Object.assign(demo, false);
// console.log(demo)

// var demo = [1,2,3];
// Object.assign(demo, [4,5]);
// console.log(demo)

// const source = {
//     get foo() {
//         return 1;
//     }
// };
// const target = {};
// Object.assign(target,source);
// console.log(source)
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable);
// console.log(Object.getOwnPropertyDescriptor([], 'length').enumerable);

// Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })

// let proto = {};
// let obj = {x:10};
// Object.setPrototypeOf(obj, proto);
// proto.y = 20;
// proto.z = 40;
// console.log(Object.getPrototypeOf(obj))
// console.log(Object.getPrototypeOf(1) === Number.prototype)
// console.log(Object.getPrototypeOf('asdf') === String.prototype)
// console.log(Object.getPrototypeOf(false) === Boolean.prototype)

// let proto = {
//     foo () {
//         return 'hello'
//     }
// };
// let obj = {
//     find: () =>
//          super.foo()
// };
// Object.setPrototypeOf(obj, proto);
// console.log(obj.find())

// let proto = {
//     x: 'hello',
//     foo () {
//         return this.x;
//     }
// };
// let obj = {
//     x: 'world',
//     find() {
//         return super.foo();
//     }
// };
// Object.setPrototypeOf(obj, proto);
// console.log(obj.find())

// let {x} = undefined
// let {x, y, ...z} = {x: 1, y:2, a: 3, b: 4};
// console.log(x,y)


// let obj = { a: { b: 1 } };
// let { ...x } = obj;
// obj.a.b = 2;
// x.a.b // 2