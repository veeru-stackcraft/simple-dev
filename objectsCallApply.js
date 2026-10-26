const person = {
  name: 'Veeru',
  surname: 'Bandaru',
  cityAndState: function (city, state) {
    console.log(this.name, this.surname + ' is from ' + city + ', ' + state);
  },
};

const user = person.cityAndState;

user.call(person, 'Mcl', 'AP');
user.call(person, 'Nadikudi', 'AP');
user.apply(person, ['guntur', 'Andra Pradesh']);

console.log('in JS file');
