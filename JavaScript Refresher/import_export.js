// import one from "./import_export_2.js";
// import {two as t} from "./import_export_3.js";
// import {three as tr} from "./import_export_3.js";

// console.log(one.name);
// console.log(t.age);
// console.log(tr)

import * as bundled from "./import_export_3.js";
console.log(bundled.two.age);
console.log(bundled.three);