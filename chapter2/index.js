/*
* 变量的解构赋值
* */

// let a = 1;
// let b = 2;
// let c = 3;
// let [a,b,c] = [1,2,3]

// let [foo, [bar, [baz]]] = [1, [2, [3]]];

// let [,, third] = [,, 1];

// let [x, , z] = [1,,3];

// let [head, ...tail] = [1,2,3,4,5]

// let [x,y,...z] = ['a'];

// let [foo] = []
// console.log(foo)

// let [bar,foo] = [1]

// let [a,b] = [1,2,3]

// let [a,[b],d] = [1,[2,3],4]

//解构不成功
// let [foo] = 1;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = {};

// let [a,b,c] = new Set(['a','b','c'])

// let [foo = true] = [];
// let [x, y = 'b'] = ['a']
// let [x, y = 'b'] = ['a', undefined]
// let [x = '1'] = [undefined]
// let [x = null] = [undefined]
// function f() {
//     return 2
// }
// let [x = f()] = [1];
// let [x =1, y = x] = []
// let [x =1, y = x] = [2]
// let [x =1, y = x] = [1, 2];
// let [x = y, y = 1] = []

// let {foo,bar} = {foo: '123', bar: '456'};

// let {baz} = {foo: '123', bar: '456'}

// let {foo:baz} = { foo: 'aaa', bar: 'bbb' };
//
// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;

// let { foo: baz } = { foo: "aaa", bar: "bbb" };

// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };
//
// let { p: [x, { y }] } = obj;

// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };
//
// let { p, p: [x, { y }] } = obj;

// let obj = {};
// let arr = [];
//
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

// let {x = 3} = {x: undefined};

// let {x = 3} = {x: 5}

// let {foo} = {bar: 'baz'}

// let {foo: {bar}} = {baz: 'baz'};

// 错误的写法
// let x;
// {x} = {x: 1};

// 正确的写法
// let x;
// ({x} = {x: 1});

// ({} = [true, false]);
// ({} = 'abc');
// ({} = []);

// let arr = [1, 2, 3];
// let {0 : first, [arr.length - 1] : last} = arr;

// const [a, b, c, d, e] = 'hello';

// let {length : len} = 'hello';

// let {toString: s} = 123;

// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError