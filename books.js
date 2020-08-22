var bookNew = {
  name: "Anna Karenina",
  genre: "Comedy",
  available: true,
  owner: ""
};

var clientNew = {
  firstName: "Antony",
  lastName: "Grader",
  haveBook: "" || "No rents",
  fullName: function() {return this.firstName + " " + this.lastName;}
};

let booksCatalog = [
  bookNew
];

let clients = [
  clientNew
];
