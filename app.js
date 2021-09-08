console.log("MERGED CLASS 1 ES6")

var arr = [1,2,3,4];
console.log(arr[2]);

var [one, two, three, four, five] = [1,2,3,4]; //ES6 Destructuring
console.log(three);
console.log(four);
console.log(five);


function getscores() {
    return [90,100];
}

let [x,y,z] = getscores();
console.log(x);
console.log(y);
console.log(z);



//Object Destructuring

const obj = {
    fullname: "Vaishnavi",
    email: "xyz@gmail.com",
    age: 20
}

console.log(obj.email)

let {dum, age, email, fullname} = obj;
console.log(fullname)
console.log(dum)

let person = {
    firstname: "Vaishnavi",
    lastname: "Bisen",
    age1: 20,
    middlename: "xyz"
}
let {age1, firstname, lastname, middlename="" } = person;
console.log(age1);
console.log(firstname);
console.log(lastname);
console.log(middlename);

// function add(x, y) {
//     return x+y;
// }
// console.log(add(10, 20));

// let add = function(x,y) {
//     return x+y;
// }
// console.log(add(10,20))

let add = (x, y) => {
    return x + y;
  };
  console.log(add(10, 20));
  
  const counter = {
    count: 1,
    vaishnavi: function() {
        return ++(this.count);
    },
    // key: this
}
console.log(counter)
console.log(counter.vaishnavi());
console.log(counter.vaishnavi());
console.log(counter.vaishnavi());
console.log(counter)