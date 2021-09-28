class User {
  // constructor is only for obj prop
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  login() {
    console.log(this.name, 'logged in');
  }

  // for method chaining
  getName() {
    console.log(this.name);
    return this;
  }

  getAge() {
    console.log(this.age);
    return this;
  }
}

class Admin extends User {
  openDashboard() {
    console.log('dashboard opened');
  }
}

const u1 = new User('nico', 20);
const u2 = new User('akbar', 21);
const a1 = new Admin('pras', 19);

// u1.getAge().getName();
