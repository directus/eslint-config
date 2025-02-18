function   greet( name ) {
	return "Hello, " +   name; }

export class Person{
	  name;
	  age;
	  constructor(name, age){
		   this.name = name;
		   this.age = age;
	  }
	greet() {
		  return 'Hello, ' + this.name + ' and you are ' + this.age + ' years old.';
	   }
  }

export const numbers = [1, 2 , 3, 4 ,5];

greet( "Kay" );
