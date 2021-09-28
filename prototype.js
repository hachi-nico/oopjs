// how class works under the hood
function User(name, age) {
  // constructor
  this.name = name;
  this.age = age;
}

// add method to constructor function with proto
User.prototype.login = function () {
  console.log(this.name, 'logged in');
};

User.prototype.logout = function () {
  console.log(this.name, 'logged out');
};

// inherit User class props
function Admin(...args) {
  User.apply(this, args);
  this.role = 'hr';
}

// inherit User class methods
Admin.prototype = Object.create(User.prototype);

const u1 = new User('nico', 20);
const u2 = new User('akbar', 21);
const a1 = new Admin('pras', 19);
