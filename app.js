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


//////////////////////////////////////////////////////////////////////////////////////////////

console.log("MERGED CLASS 2 ES6");

let ranks = [1, 2, 3, 4, 5 ,6];

console.log(
  ranks.map((e, index) => {
    return e * 100;
  })
);

console.log(
  ranks.forEach((e, index) => {
    console.log(e*100);
    return e * 100;
  })
);

let newmaparr = ranks.map((e, index) => {
    console.log(e)
    if(e%2===0)
        return e
})
console.log(newmaparr);

let newfilterarr = ranks.filter((e, index) => {
    console.log(e)
    if(e%2===0)
        return e
})
console.log(newfilterarr);

let concert = true;

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT");
        }
        else {
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    }, 2000);
});

// let attendConcert = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (concert) {
//             resolve("BOB ATTENDED THE CONCERT");
//         }
//         else {
//             reject("BOB FAILED TO ATTEND THE CONCERT");
//         }
//     }, 2000);
// });

// console.log(attendConcert)
console.log(attendConcert)

// attendConcert.then((data)=>console.log(data));

// attendConcert.catch((error)=>console.log(error));

attendConcert.then((data)=>console.log(data)).catch((error)=>console.log(error));

console.log("HI, I WON'T WAIT FOR ANYONE")

console.log("HI, I AM DYNING, I DON'T WANT TO WAIT")

//-------------------------------------------------------------------------//
//async and await



// async function asyfuncname() {
//   try {
//     let result = await attendConcert;
//     console.log(result)
//   }
//   catch(e) {
//     console.log(e)
//   }
// }
// asyfuncname()

let asyfuncname = async() => {
    try {
      let result = await attendConcert;
      console.log(result)
    }
    catch(e) {
      console.log(e)
    }
  }
  asyfuncname()
  
  console.log("HI, I WON'T WAIT FOR ANYONE")
  
  console.log("HI, I AM DYNING, I DON'T WANT TO WAIT")


