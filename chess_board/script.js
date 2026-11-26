
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        let cell = document.createElement("div");
        cell.style.width = "50px";
        cell.style.height = "50px";

        if ((row + col) % 2 === 0) {
          cell.style.backgroundColor = "white";
        } else {
          cell.style.backgroundColor = "black";
        }

        board.appendChild(cell);
      }
    }