const one = [1,2,3];
const two = [...one , 4 , 5];
const three = [one , 6 , 7];
console.log(one);
console.log(two);
console.log(three);


const four = {
    name : "Rutu",
    age : 21
}

const five = {
    ...four,
    height : 180
}

console.log(four);
console.log(five);

const six = (...args) => {
    return args.sort();
}

console.log(six(4,2,1,5,3));