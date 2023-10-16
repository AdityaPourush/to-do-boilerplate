// input tag
var inputText = document.getElementById("input");
// btn tag
var subBtn = document.getElementById("button");

// to do list
var todoListTag = document.getElementById("todolist");

// array to store to do elements, initiall empty
var todoArr = [];

// when add button is clicked
subBtn.addEventListener("click", addItemToArray);

// if input is on focus and enter is clicked addItemToArray should be called
inputText.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        addItemToArray();
    }
});

function addItemToArray() {
    // event.target.value == inputText.value

    // push the value to array if it is not empty string
    if (inputText.value != "") {
        todoArr.push(inputText.value);
    }
    // reset the value to empty string
    inputText.value = "";

    display();
}

function display() {
    // clear out previous old ones everytime we add one item to array and display it
    todoListTag.innerHTML = "";
    // map through array and display
    todoArr.map((curr, i) => {
        // structure of li tag
        var listItem = `<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
      </li>`;
        // insert it inside ul tag
        todoListTag.innerHTML += listItem;
    });
}

function deleteItem(index) {
    // delete the element
    todoArr.splice(index, 1);
    display();
}

function editItem(index) {
    var newValue = prompt("Pls Edit");
    todoArr.splice(index, 1, newValue);
    display();
}

// reset the to do list
document.getElementById("reset").addEventListener("click", () => {
    todoArr = [];
    display();
});
