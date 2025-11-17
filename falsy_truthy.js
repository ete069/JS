/* 
Data yang dianggap false :
false (boolean)
0 dan -0
" ", ' ', ` ` (string kosong)
null
undefined
Nan (Not a Number)
*/

// Selain yang di atas dianggap true semua

const a = 0;
const b = -0;
const c = "";
const d = '';
const e = ``;
const f = null;
const g = undefined;
const h = parseInt("K");

let i = a ? "True" : "False";
let j = b ? "True" : "False";
let k = c ? "True" : "False";
let l = d ? "True" : "False";
let m = e ? "True" : "False";
let n = f ? "True" : "False";
let o = g ? "True" : "False";
let p = h ? "True" : "False";

console.info(i);
console.info(j);
console.info(k);
console.info(l);
console.info(m);
console.info(n);
console.info(o);
console.info(p);

const q = "false"; // true karena ada isinya
let r = q ? "True" : "False";
console.info(r);

// Program ini memperlihatkan data falsy/data yang dianggap false
// dan data truthy/data yang dianggap true