const details = [{name:"AKASH",age:20,department:"ECE"},
                 {name:"Athish",age:21,department:"CSE"},
                 {name:"Avesh",age:19,department:"IT"}];

console.log(details[2].age)
details.push({name:"Sheshank",age:20,department:"ECE"});
console.log(details);
//----------forEach()---------------


details.forEach(det => console.log(det))


//-----------map()----------------

const mapped = details.map(ele => ele.department)
console.log(mapped)

//----------filter()-------------

const filtered = details.filter(element => element.department==="ECE");
console.log(filtered)

//----------reduce()------------

const maximum_age = details.reduce((max,age1) => age1.age>max.age?age1:max);
console.log(maximum_age)
