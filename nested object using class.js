class Address{
    constructor(street,city,country){
        this.street = street;
        this.country = country;
        this.city = city;
    }
}
class person{
    constructor(name,age,...add){
        this.name = name;
        this.age = age;
        this.add = new Address(...add);
    }
}

const akash = new person("AKASH",20,"278/M2","Chavadi street","Namakkal");
console.log(akash.add.city)
