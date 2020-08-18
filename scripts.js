function showCatalog() { //Function that displays all the books
  let i = 0;
  let x;
  let text = "";
  for (i; i < booksCatalog.length; i++) {
    text += booksCatalog[i].name + " " + booksCatalog[i].genre + "<br>";
  };
  document.getElementById("demo2").innerHTML = text;};


  function addBook(bookName, bookGenre) {//Adds a new book to catalog
    booksCatalog.push({
      name: bookName,
      genre: bookGenre,
      available: true});
  };


//Sorting functions
function sortByName(){//Sorting books by name
  booksCatalog.sort(function(a, b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x > y) {return 1;}
    if (x < y) {return -1;}
    return 0;
  });
  showCatalog();
};


function sortByNameReverse(){//Reverse sorting books by name
  booksCatalog.sort(function(a, b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x > y) {return -1;}
    if (x < y) {return 1;}
    return 0;
  });
  showCatalog();
};


function her() {
  let i = 0;
  for (i; i < booksCatalog.length; i++) {
    if (booksCatalog[i] == "Western") {return 1}
    return 0;
  }


}


function show() {
let x;
let text = "";
for (x in bookNew) {
  text += bookNew[x] + ", ";
}
document.getElementById("demo1").innerHTML = text;}
