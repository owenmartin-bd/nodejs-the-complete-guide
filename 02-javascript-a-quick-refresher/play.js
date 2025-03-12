// const name = 'Owen';
// let age = 40;
// const hasHobbies = true;

// age = 41;

// const summarizeUser = (userName, userAge, userHasHobby) => {
//     return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
// }

// const add = (a, b) => a + b;
// const addOne = a => a + 1;

// console.log(add(1, 2));
// console.log(addOne(1));

// console.log(summarizeUser(name, age, hasHobbies));

// const person = {
//     name: 'Owen',
//     age: 40,
//     greet() {
//         console.log('Hi, I am ' + this.name);
//     }
// }

// const printName = ({ name }) => {
//     console.log(name);
// }

// printName(person);

// const {name, age} = person;
// console.log(name, age);

// // const copiedPerson = {...person};
// // console.log(copiedPerson);

// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// // for(let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies)

// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//     return args;
// };

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);

console.log('Hello!');
console.log('Hi!');