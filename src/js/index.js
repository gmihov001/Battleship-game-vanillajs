window.onload = () => {
  var parent = document.querySelector(".container");

  for (var i = 0; i < 10; i++) {
    var row = document.createElement("div");
    parent.appendChild(row);
    row.style.display = "flex";

    for (var j = 0; j < 10; j++) {
      var cell = document.createElement("div");
      row.appendChild(cell);
      cell.innerHTML = Math.floor(Math.random() * 2);
      cell.style.border = "1px solid grey";
      cell.style.padding = "15px";
      if (cell.innerHTML == 1) cell.style.background = "gray";
    }
  }
