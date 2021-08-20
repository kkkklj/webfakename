const MD5 = require('md5')
let { boy, girl, surname } = require('./data');
const FingerprintJS = require('@fingerprintjs/fingerprintjs');
const strToName = (sex,options) => {//0男1女
    
    const fpPromise = FingerprintJS.load()
    return fpPromise.then(fp => fp.get()).then(result => {
        const str = result.visitorId;
        let numStr = (+ ('0x' + MD5(str, 16).slice(0, 16))) + '';
        let _surname
        if(options&&options.surname) {
            surname = options.surname;
        }
        _surname = surname[(+numStr[0, 3]) % surname.length];
        const fn = (sex, indexArr) => {
            let arr;
            if(options) {
                if(Array.isArray(options)) {
                    arr = options
                } else if(options.boy && sex == 0) {
                    arr = options.boy
                } else if(options.girl && sex == 1) {
                    arr = options.girl
                } else {
                    throw 'webfakename：配置参数异常'
                }
            } else {
                if (sex == 0) {
                    arr = boy;
                } else {
                    arr = girl;
                }
            }
            let len = arr.length;
            return indexArr.map(item => arr[(+item) % len]).join('')
        }
        return _surname + fn(sex, [numStr.slice(3, 6), numStr.slice(6, 9)]);
    })

}

module.exports = strToName