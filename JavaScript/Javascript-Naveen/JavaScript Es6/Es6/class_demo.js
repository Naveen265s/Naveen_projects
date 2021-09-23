class Person{
    constructor(){
        this.pid=1;
        this.pname = 'Ram';
        this.city = 'Nellore';
    }
}
let person = new Person();
console.log(person.Pid+" "+person.Pname);

class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
    }
}

var obj=new student('Naveen', 20);
display(obj);