class Employee{
	constructor(id, name, salary){
		this.id = id;
		this.name = name;
		this.salary = salary;
    }
	display(){
		console.log(`id=${this.id}, name=${this.name}, salary=${this.salary}`);
    }
}

class FullTimeEmployee extends Employee{
	constructor(id, name, salary, benefits){
		super(id, name, salary);
		this.benefits = benefits;
    }
}