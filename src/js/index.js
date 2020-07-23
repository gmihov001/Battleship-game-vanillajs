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

  const fire = () => {
    var fired =
      parent.childNodes[Math.floor(Math.random() * 10)].childNodes[
        Math.floor(Math.random() * 10)
      ];
    fired.style.background = "red";
  };

  var button = document.createElement("button");
  button.innerHTML = "FIRE!";
  button.style.background = "red";
  parent.appendChild(button);
  button.addEventListener("click", fire);
};
