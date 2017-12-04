/*
*generator
* */
/*
function* helloWorldG() {
    yield 'hello'
    yield 'world'
    return 'ending'
};
var hw = helloWorldG();
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())*/

/*
function* gen() {
    yield 456 + 123;
}
console.log(gen().next())*/

/*
function* f() {
    console.log('generator')
}
f().next()*/

/*
var arr = [1, [[2, 3], 4], [5, 6]];
var flat = function* (arr) {
    var length = arr.length;
    for(let i = 0; i< length; i++) {
        if(typeof arr[i] !== 'number') {
            yield* flat(arr[i])
        }else{
            yield arr[i]
        }
    }
};
for(var item of flat(arr)) {
    console.log(item)
}*/
/*
function* foo(x) {
    var y = 2*(yield (x+1));
    var z = yield (y / 3);
    return (x + y + z)
}
var item = foo(8);
console.log(item.next())
console.log(item.next(6))
console.log(item.next(12))*/

/*
function* dataSumer() {
    console.log('start');
    console.log(`1.${yield}`)
    console.log(`2.${yield}`)
    return 'result'
}
var demo = dataSumer();
demo.next();
demo.next('a');
demo.next('b');*/

/*
function wrapper(generatorFunction) {
    return function (...args) {
        let generatorObject = generatorFunction(...args);
        generatorObject.next();
        return generatorObject;
    }
}
const wrapped = wrapper(function* () {
    console.log(`First input: ${yield}`);
    return 'DONE';
});
wrapped().next('hello!')*/

/*
function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}
for(var item of foo()) {
    console.log(item)
}*/

/*function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
}*/

/*function* objectEntries(obj) {
    let keys = Reflect.ownKeys(obj);
    for (let key of keys) {
        yield [key, obj[key]]
    }
}
let jane = { first: 'Jane', last: 'Doe' };
for(let [key, value] of objectEntries(jane)) {
    console.log(`${key}==========${value}`)
}*/

/*
var g = function* () {
    try{
        yield;
    }catch (e) {
        console.log('内部捕获')
    }
};
var demo = g();
demo.next();
try {
    demo.throw('a')
    demo.throw('b')
    demo.throw('c')
    demo.throw('d')
    demo.throw('b')
}catch (e) {
    console.log('外部捕获')
}*/

/*
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
var demo = gen();
console.log(demo.next());
console.log(demo.return('ppp'));
console.log(demo.next());*/

/*
function* numbers() {
    yield 1;
    try {
        yield 2;
        yield 3;
    }finally {
        yield 4;
        yield 5
    }
    yield 6
}
var demo = numbers();
console.log(demo.next())
console.log(demo.next());
console.log(demo.return(7));
console.log(demo.next())
console.log(demo.next())
console.log(demo.next())*/

/*
function* foo() {
    yield 'a'
    yield 'b'
}
function* bar() {
    yield 'x'
    yield* foo();
    yield 'y'
}
for(let item of bar()){
    console.log(item)
}
*/

/*
let read = (function* () {
    yield 'hello';
    yield* 'hello';
})();

console.log(read.next())
console.log(read.next())*/

/*
var clock = function* () {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
};
var demo =clock();
console.log(demo.next())
console.log(demo.next())
console.log(demo.next())*/

