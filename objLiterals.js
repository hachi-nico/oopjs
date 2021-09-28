const User = {
  name: 'Nico',
  age: 20,

  login() {
    console.log(this.name, 'logged in');
  },
};

User.login();
