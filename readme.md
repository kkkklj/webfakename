# webfakename
- 根据浏览器指纹自动生成姓名

webfakename(sex,options).then(result => {
  ...
})
```js
/**
 * sex值：0男1女
  options可为{
    surname:[...]，
    boy:[...]，
    girl:[...]
  }
  或者直接为数组，为数组将直接用于名
  []
*/
```


```js
import anyname from 'webfakename';
anyname(0).then(fakename => {
  console.log(fakename);
})
```