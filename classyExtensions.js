class Cat extends Animal {
	constructor(name) {
		super(name);
		this.name = name;
	}

	speak() {
		return this.name + ' meows.';
	}
}

// can also do it like

// class Cat extends Animal {
//   speak() {
//     return this.name + ' meows';
//   }
// }