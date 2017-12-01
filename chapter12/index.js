/*
* promise
* */
/*
function timeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms, 'done');
    })
};
timeout(5000).then(function (value) {
    console.log(value)
})*/

/*
let promise = new Promise(function (resolve, reject) {
    console.log('promise');
    resolve()
});
promise.then(function () {
    console.log('resolve')
});
console.log(2)*/

/*
const promise = new Promise(function (resolve, reject) {
    try {
        throw new Error('3333333');
    }catch (e) {
        reject(e)
    }
});
promise.catch(function (e) {
    console.log(e)
})*/

/*
const promise = new Promise(function (resolve, reject) {
    resolve(x + 1);
});
promise.then(function (dat) {
    console.log(dat)
});
console.log(999);

process.on('unhandledRejection', function (err, p) {
    throw err
})
*/

/*const promise = function () {
    return new Promise(function (resolve, reject) {
        resolve(1)
    })
};
promise().catch(function (error) {
    console.log(`ok${error}`)
}).then(function (data) {
    console.log('niubile')
})*/

