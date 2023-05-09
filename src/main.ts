// import * as Methods from './module';
// import average, {add as addTwo, multiply, subtract} from "./module";
// import jekhono from './module';

// const add = (param1: number, param2: number, param3: number): number => {
//     return param1 + param2 + param3;
// }

// const result =average(4, 5);


// import add from './utils/add';
// import multiply from './utils/multiply';
// import average from './utils/average';

import methods from './utils/index';


const result = methods.addTwo(4, 5);
const result2 = methods.multiply(4, 5);
const result3 = methods.average(4, 5);