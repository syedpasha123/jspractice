function wish() {
    var a = 'Happy birthday';
    console.log(a);
}

wish();

// let

    function wish() {
        let a='Happy birthday'
        console.log(a);
    }

    wish();


    // 2. const

    // TO create a const array:
const Fruits = ["Apple", "Banana", "Mango"];

// To change an element:
Fruits[0] = "Kiwi";

// To add an element:
Fruits.push("Tomato");

//3.function and function expression

function Add(a, b){
    let c = a + b;
    return c;   
}
console.log("Addition : " + Add(1, 3));

//function expression

var add = function(a, b){
    let c = a + b;
    return c;
}

console.log("addition: " + add(1, 3));

//arrow function

//   with

var a = (hello) => {
    return "Hello World!";
  }

  console.log(a);

  //without arrow
var a = function(hello) {
    return "Hello World!";
  }
console.log(a);
  

//literals
var string1= "mohammed"
var string2= "syed"
var string3 = "pasha"
var literals =`${string1}  ${string2} ${string3}  ${string3} `;
console.log(literals);

// destructing array 
//without
 const cities = ['bangalore', 'mumbai', 'delhi'];
 const kolar = cities[1];
 const srinivaspur = cities[2];
 const chintamani = cities[3];
  
   console.log(cities); 

//with
  const city = ['bangalore', 'mumbai', 'delhi'];
  

  const [kolarOne, srinivaspurOne, chintamaniOne] = city;
  console.log(city);
