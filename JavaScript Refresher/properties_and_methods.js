// class One {
//     name = "Ruturaj";
//     myName = () => {
//         return this.name;
//     }
// }

// const z = new One();
// console.log(z.name);
// console.log(z.myName());


// class Three {
//     gen = "Male";
//     getGen = () => {
//         return this.gen;
//     }
// }


// class Two extends Three {
//     age = 21;
//     getAge = () => {
//         return this.age;
//     }
// }
// const t = new Two();
// console.log(t.getAge());
// console.log(t.getGen());



class Three {
    gen = "Male";
    getGen = () => {
        return this.gen;
    }
}


class Two extends Three {
    age = 21;
    gen = "Female";
    getAge = () => {
        return this.age;
    }
}
const t = new Two();
console.log(t.getAge());
console.log(t.getGen());
const z = new Three();
console.log(z.getGen());