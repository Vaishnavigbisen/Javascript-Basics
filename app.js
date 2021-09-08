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
