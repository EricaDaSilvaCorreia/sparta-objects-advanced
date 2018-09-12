// console.log('Howdy');

//  object literal : are not dynamic, they are not reusable

// const book1 = {
//   title : 'The Way of Kings',
//   author : 'Brandon Sanderson',
//   year : 2002,
//   getSummary : function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`
//     //`between these `` it's literal`
//     //this is refering to the object.
//   } //close getSummary
//
// }//close book1
//
// console.log(book1);
//
// console.log(book1.getSummary());

// Object Constructor : dynamic, reusable.

// function Book(title, author, year) {
//   this.title = title;//title = the key and this.title is the value
//   this.author = author;
//   this.year = year;
//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
//
//
// }

// const book1 = new Book ('Winds of Winter','George RR Martin', 2055 )
// const book2 = new Book ('Doors of Stone','Patrick Rothfuss', 2022 )
//
// console.log(book1);
// console.log(Object.values(book2));

//Prototypes : Are accessible for everything else
//
// function Book(title, author, year) {
//   this.title = title;//title = the key and this.title is the value
//   this.author = author;
//   this.year = year;
// }
//
// function Author(name, nationality,dob) {
//   this.name = name;
//   this.nationality = nationality;
//   this.dob = dob;
// }
// // Adding prototype to Object
//
// Book.prototype.getSummary = function ()  {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// }
//
// Object.prototype.logSomething = function () {
//   console.log('Something');
//   return 'Something';
// }
//
// Array.prototype.description = function () {
//   console.log('this is an array');
//   return 'this is an array';
// }
//
// const book1 = new Book ('Goblet of Fire', 'JK Rowling', 2005);
//
// const author1 = new Author ('Bazaar of Bad Dreams', 'Stephen King', 1990);
//
// const array1 = [1,2,3,4,5];
//
// const array2 = ['1','2','3','4','5'];
// array1.description();
//
// console.log(book1.getSummary());
// console.log(author1.logSomething());

// Classes
class Car {
  constructor(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getSummary(){
    return `The ${this.color} ${this.make} ${this.model} was made in ${this.year}`;
  }
}

const car1 = new Car ('BMW','X5',2010, 'black');

console.log(car1);
console.log(car1.getSummary());
