'use strict';

//Displaying functions
function showCatalog() { //Function that displays all books
  let i = 0;
  let text = "";
  for (i; i < booksCatalog.length; i++) {
    text += booksCatalog[i].name + " " + booksCatalog[i].genre + "<br>";
  };
  document.getElementById("demo2").innerHTML = text;
  document.getElementById("head").innerHTML = "Books";
};


  function showClients() {//Functions that displays all clients
    let i = 0;
    let text = "";
    for (i; i < clients.length; i++) {
      text += clients[i].fullName() + "<br>";
    };
    document.getElementById("demo2").innerHTML = text;
    document.getElementById("head").innerHTML = "Clients";
  };

//"Add a new item" functions
  function addBook(bookName, bookGenre) {//Adds a new book to catalog
    booksCatalog.push({
      name: bookName,
      genre: bookGenre,
      owner:""
    });
  };


  function addClient(firstName, lastName) {//Adds a new client record
    clients.push( {
      firstName: firstName,
      lastName: lastName,
      haveBook: "",
      fullName: function() {return this.firstName + " " + this.lastName;}
      });
      sortClientsByName();
  };


//Sorting functions
function sortBooksByName(){//Sorting books by name
  booksCatalog.sort(function(a, b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x > y) {return 1;}
    if (x < y) {return -1;}
    return 0;
  });
  showCatalog();
};


function sortBooksByNameReverse(){//Reverse sorting books by name
  booksCatalog.sort(function(a, b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x > y) {return -1;}
    if (x < y) {return 1;}
    return 0;
  });
  showCatalog();
};


function sortClientsByName() {
  clients.sort(function(a, b) {
    let x = a.firstName.toLowerCase();
    let y = b.firstName.toLowerCase();
    if (x > y) {return 1;}
    if (x < y) {return -1;}
    return 0;
  });
};


//Manipulate client-book relations
function assignBook(clientFullName, bookName) {//Assigns book to client
  let i = 0;
  outer: for (i; i < clients.length; i++) {
    if (clients[i].fullName() == clientFullName) {
      clients[i].haveBook = bookName;
      break outer;
    };
  };
};

function changeBookOwner(clientFullName, bookName) {//Assigns client to book
  let i = 0;
  outer: for (i; i < booksCatalog.length; i++) {
    if (booksCatalog[i].name == bookName) {
      booksCatalog[i].owner = clientFullName;
      break outer;
    };
  };
};

function rent(clientFullName, bookName) {
  assignBook(clientFullName, bookName);
  changeBookOwner(clientFullName, bookName);
  return "Rent successful";
};
