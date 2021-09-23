//classes
//class can constain fields, methods, constructor

class Employee{
    //id, name, salary, email, address,city
    //declaring fields
    empId: number;
    empName: string;

    //constructor,used for initializing the values
    constructor(id:number, name:string){
        this.empId = id;
        this.empName = name
    }

    display():void{
        console.log(`ID: ${this.empId}, Name: ${this.empName}`)
    }
}

// let emp1 = new Employee(1, "Naveen");
// emp1.display();

class Permanent extends Employee{
    //constructor,used for initializing the values
    position:string;
    constructor(position:string, id:number, name:string){
        super(id, name);
        this.position= position;
    }

    display():void{
        super.display();
        console.log(`Role: ${this.position},ID: ${this.empId}, Name: ${this.empName}`)
    }
}

let emp1 = new Permanent('Developer',1, "Naveen");
emp1.display();