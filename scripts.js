let x;
let text = "";
for (x in bookNew) {
  text += bookNew[x] + ", ";
}
document.getElementById("demo1").innerHTML = text;
document.getElementById("demo2").innerHTML = JSON.stringify(booksCatalog);
