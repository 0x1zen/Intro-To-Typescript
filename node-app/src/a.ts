
// Types
type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };

  type TechLead=Employee & Manager;

  const t:TechLead={
    name:"Raj",
    startDate:new Date(),
    department:"Computer"
  }
type User = {
	firstName: string;
	lastName: string;
	age: number
}

type GreetArg=number | string | boolean;

function greet(id:GreetArg){

}
greet(true);


// Interfaces

// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const e=new Employee("Raj",15)
// e.greet("Hello");
