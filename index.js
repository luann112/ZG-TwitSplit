function Education() {
    this.education = "B.Tech";
}

Person = new Education ();
Person.name = "Michael";
Person.surname = "Hicks";
var Person;
Person.residence = "Bagalore";
Person.age = 23;
Object.freeze(Person);
console.log(delete Person.name);
for (var item in Person) {
    console.log(item);
}