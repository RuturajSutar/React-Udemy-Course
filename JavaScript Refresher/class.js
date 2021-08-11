// class One {
//     name = "Rutu";
//     f1 = () => {
//         console.log("Tony");
//     }
// }
// const o = new One();
// console.log(o.name);
// o.f1();


class One {
    name = "Rutu";
    f1(){
        console.log("Tony");
    }
}
const o = new One();
console.log(o.name);
o.f1();

// class Two {
//     constructor(){
//         this.age = 21;
//     }
//     getAge(){
//         return this.age;
//     }
// }
// const t = new Two();
// console.log(t.getAge());


// class Three {
//     constructor(){
//         this.gen = "Male";
//     }
//     getGen(){
//         return this.gen;
//     }
// }


// class Two extends Three {
//     constructor(){
//         super();
//         this.age = 21;
//     }
//     getAge(){
//         return this.age;
//     }
// }
// const t = new Two();
// console.log(t.getAge());
// console.log(t.getGen());



// class Three {
//     constructor(){
//         this.gen = "Male";
//     }
//     getGen = () => {
//         return this.gen;
//     }
// }


// class Two extends Three {
//     constructor(){
//         super();
//         this.age = 21;
//     }
//     getAge = () => {
//         return this.age;
//     }
// }
// const t = new Two();
// console.log(t.getAge());
// console.log(t.getGen());


class Three {
    constructor(){
        this.gen = "Male";
    }
    getGen(){
        return this.gen;
    }
}


class Two extends Three {
    constructor(){
        super();
        this.age = 21;
        this.gen = "Female";
    }
    getAge(){
        return this.age;
    }
}
const t = new Two();
console.log(t.getAge());
console.log(t.getGen());
const z = new Three();
console.log(z.getGen());



