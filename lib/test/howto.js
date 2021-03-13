const {
    heapPerm,
    heapPermIterative,
    combAll,
    combAllStrict
} = require('js-combperm');

let arrayOrigin  = ['a', 'b', 'c', 'd', 'e'];

let permArray = heapPerm(arrayOrigin);
//console.log(permArray);

let permArrayIt = heapPermIterative(arrayOrigin);
//console.log(permArrayIt);

let combArray = combAll(arrayOrigin);
//console.log(combArray);

let combArrayStrict = combAllStrict(arrayOrigin, 'f', 3, true);
console.log(combArrayStrict);