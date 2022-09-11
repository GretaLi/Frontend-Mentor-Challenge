const form = document.querySelector(".form");
const listContainer = document.querySelector(".form-list");
const inputText = document.querySelector("input[type='text']");
const itemLeft = document.querySelector("#itemLeft");
// localStorage.clear();

form.addEventListener("submit", () => {
  // get the input values
  let todoText = inputText.value;

  // TODO LIST DISPLAY

  // create a todo
  let todo = document.createElement("li");
  todo.classList.add("todo");
  todo.setAttribute("draggable", "true");
  let text = document.createElement("p");
  text.classList.add("todo-text");
  text.innerText = todoText;
  todo.appendChild(text);

  // create complete btn and  delete btn
  let completeBtn = createCompleteBtn();
  let deleteBtn = createDeleteBtn();

  todo.appendChild(completeBtn);
  todo.appendChild(deleteBtn);

  todo.style.animation = "easeIn 0.3s ease forwards";

  // LOCAL STORAGE

  // create an object
  let myTodo = {
    todoText: todoText, //property name: input value,
    todoCompleted: false,
  };

  // store data into an array of objects
  // myListArr = [{myTodo}, {myTodo}, {myTodo}...]
  let myList = localStorage.getItem("list"); // create a key called 'list'
  if (myList == null) {
    localStorage.setItem("list", JSON.stringify([myTodo]));
  } else {
    let myListArr = JSON.parse(myList);
    myListArr.push(myTodo);
    localStorage.setItem("list", JSON.stringify(myListArr));
  }

  inputText.value = ""; // clear the text input
  listContainer.appendChild(todo);
  itemCounter();
  dragItems();
});

//--------- load data from localStorage ----------
loadData();
function loadData() {
  let myList = localStorage.getItem("list");
  if (myList !== null) {
    let myListArr = JSON.parse(myList);
    myListArr.forEach((item) => {
      // create a todo
      let todo = document.createElement("li");
      todo.classList.add("todo");
      todo.setAttribute("draggable", "true");

      let text = document.createElement("p");
      text.classList.add("todo-text");
      text.innerText = item.todoText;
      todo.appendChild(text);

      // create complete btn and delete btn
      let completeBtn = createCompleteBtn();
      let deleteBtn = createDeleteBtn();

      if (item.todoCompleted == true) {
        todo.classList.add("todo-completed");
      }

      todo.appendChild(completeBtn);
      todo.appendChild(deleteBtn);

      listContainer.appendChild(todo);
    });
  }
  itemCounter();

  return;
}

//--------- button functions ----------

// create complete btn
function createCompleteBtn() {
  let completeBtn = document.createElement("button");
  completeBtn.setAttribute("type", "button");
  completeBtn.classList.add("todo-btn--complete");
  completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeBtn.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    todoItem.classList.toggle("todo-completed");
    let isCompleted = todoItem.classList.contains("todo-completed");

    let text = todoItem.children[0].innerText;
    let myListArr = JSON.parse(localStorage.getItem("list"));
    myListArr.forEach((item, index) => {
      if (item.todoText == text && isCompleted) {
        myListArr[index].todoCompleted = true;
        localStorage.setItem("list", JSON.stringify(myListArr));
      } else if (item.todoText == text && !isCompleted) {
        myListArr[index].todoCompleted = false;
        localStorage.setItem("list", JSON.stringify(myListArr));
      }
    });
    itemCounter();
  });
  return completeBtn;
}

// create a delete btn
function createDeleteBtn() {
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.classList.add("todo-btn--delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

  deleteBtn.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    todoItem.style.animation = "easeOut 0.3s ease forwards";
    removeItem(todoItem);
  });
  return deleteBtn;
}

// clear completed items btn
clearComplete();
function clearComplete() {
  let clearBtn = document.querySelector("#clearCompleted");
  clearBtn.addEventListener("click", () => {
    let completeItems = document.querySelectorAll(".todo-completed");
    completeItems.forEach((item) => {
      item.style.animation = "easeOut 0.3s ease forwards";
      removeItem(item);
    });
  });
  return;
}

// remove items function
function removeItem(todoItem) {
  todoItem.addEventListener("animationend", () => {
    // remove from local storage
    let text = todoItem.children[0].innerText;
    let myListArr = JSON.parse(localStorage.getItem("list"));
    myListArr.forEach((item, index) => {
      if (item.todoText == text) {
        myListArr.splice(index, 1);
        localStorage.setItem("list", JSON.stringify(myListArr));
      }
    });
    todoItem.remove();
    itemCounter();
  });
  return;
}

//--------- tabs functions ----------

const tabContainer = document.querySelector(".form-tabs");
const tabs = document.querySelectorAll(".form-tabs button");

tabContainer.addEventListener("click", (e) => {
  tabs.forEach((tab) => {
    tab.classList.remove("text-primary");
  });

  if (e.target.id == "tabAll") {
    e.target.classList.add("text-primary");
    listContainer.classList.remove("active");
    listContainer.classList.remove("completed");
    itemCounter();
    return;
  }

  if (e.target.id == "tabActive") {
    e.target.classList.add("text-primary");
    listContainer.classList.add("active");
    listContainer.classList.remove("completed");
    itemCounter();
    return;
  }

  if (e.target.id == "tabCompleted") {
    e.target.classList.add("text-primary");
    listContainer.classList.remove("active");
    listContainer.classList.add("completed");
    itemCounter();
    return;
  }
});

//--------- item counter  ----------
function itemCounter() {
  let countAll = document.querySelectorAll(".todo").length;
  let countCompleted = document.querySelectorAll(".todo-completed").length;
  let countActive = countAll - countCompleted;

  if (listContainer.classList.contains("active")) {
    itemLeft.innerText = `${countActive} items left`;
    return;
  }

  if (listContainer.classList.contains("completed")) {
    itemLeft.innerText = `${countCompleted} items left`;
    return;
  }
  itemLeft.innerText = `${countAll} items left`;
  return;
}

//--------- dark theme toggle ----------

const themeToggleBtn = document.querySelector(".toggle-theme");
const body = document.querySelector("body");
const headerContainer = document.querySelector("header .container");

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  if (body.classList.contains("light")) {
    themeToggleBtn.style.animation = "rotateLight 0.5s ease-in-out forwards";
    return;
  }

  if (body.classList.contains("dark")) {
    themeToggleBtn.style.animation = "rotateDark 0.5s ease-in-out forwards";
    return;
  }
});

// draggable function
dragItems();

function dragItems() {
  document.querySelectorAll("[draggable='true']").forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
      // 查詢當前 todo item 放進 draggable Arr
      // 再從 localStorage 提取資料放進 list arr
      // 以 text 比對 draggable Arr 和 lsit arr
      // 遇到相同 text 時，把 list arr 的資料抓起來丟進新 new List Arr 中
      // 全部比對完後就是新的順序
      // 再把 new List Arr 儲存進 localStorage
      const draggableArr = [...document.querySelectorAll("[draggable='true']")];

      const listArr = JSON.parse(localStorage.getItem("list"));
      let newListArr = [];

      for (let j = 0; j < draggableArr.length; j++) {
        for (let i = 0; i < listArr.length; i++) {
          if (listArr[i].todoText == draggableArr[j].innerText) {
            newListArr.push(listArr[i]);
          }
        }
      }
      localStorage.setItem("list", JSON.stringify(newListArr));
    });
  });

  listContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(listContainer, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      listContainer.appendChild(draggable);
    } else {
      listContainer.insertBefore(draggable, afterElement);
    }
  });

  function getDragAfterElement(container, y) {
    const draggableElement = [
      ...container.querySelectorAll(".todo:not(.dragging)"),
    ];
    return draggableElement.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
}
