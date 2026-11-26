let addButton = document.getElementById('add');
addButton.addEventListener('click',addTask);
function addTask() {
      let input = document.getElementById("taskInput");
      let text = input.value.trim();
      if (text === "") return;

      let li = document.createElement("li");

      let leftDiv = document.createElement("div");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      let span = document.createElement("span");
      span.innerText = " " + text;

      checkbox.onchange = function () {
        if (checkbox.checked) {
          span.classList.add("done");
        } else {
          span.classList.remove("done");
        }
      };

      leftDiv.appendChild(checkbox);
      leftDiv.appendChild(span);

      let btnDiv = document.createElement("div");

      let upBtn = document.createElement("button");
      upBtn.innerText = "Up";
      upBtn.onclick = function () {
        if (li.previousElementSibling) {
          li.parentNode.insertBefore(li, li.previousElementSibling);
        }
      };

      let downBtn = document.createElement("button");
      downBtn.innerText = "Down";
      downBtn.onclick = function () {
        if (li.nextElementSibling) {
          li.parentNode.insertBefore(li.nextElementSibling, li);
        }
      };

      let delBtn = document.createElement("button");
      delBtn.innerText = "Delete";
      delBtn.onclick = function () {
        li.remove();
      };

      btnDiv.appendChild(upBtn);
      btnDiv.appendChild(downBtn);
      btnDiv.appendChild(delBtn);

      li.appendChild(leftDiv);
      li.appendChild(btnDiv);

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }