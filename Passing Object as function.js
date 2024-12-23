function display({name,last,age,job = "Software deleloper"}){
    console.log(`The name is ${name} ${last} and his age is ${age} and his role is ${job} `);
}


const person = {
    name : "Arjun",
    last : "B",
    age : 20,
    job : "Web developer"
}
const person1 = {
    name : "Arun",
    last : "R",
    age : 21,
    //job : "UI-UX designer",
}
display(person1)
