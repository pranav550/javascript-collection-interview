const person = {
    name: 'John',
    age: 21,
}

const copy = person;
console.log(copy); // {name: "John", age: 21}
copy.name = 'Peter';
console.log(copy.name); // Peter
console.log(person.name); // Peter


// program to clone the object

// declaring object
//////////////////////////////////////////////////

// cloning the object
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);

//////////////////////////////////////////////////

// cloning the object
const clonePerson = { ... person}

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);


/////////////////////////////////////////////

const clonePerson = JSON.parse(JSON.stringify(person));

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);