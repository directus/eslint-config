function   greet( name :  string) {
	return "Hello, " +   name;  }

export class Person{
	  name:string;
	  age:number;
	  constructor(name:string, age:number){
		   this.name = name;
		   this.age = age;
	  }
	greet() {
		  return 'Hello, ' + this.name + ' and you are ' + this.age + ' years old.';
	   }
  }

export const numbers: number[] = [1, 2 , 3, 4 ,5];

greet( "Kay" );
