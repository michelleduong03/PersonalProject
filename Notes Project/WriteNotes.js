const notesContainer = document.querySelector(".notes");
const button = document.querySelector(".button");
let notes = document.querySelectorAll (".input");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function storage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

button.addEventListener ("click", ()=> {
    let input = document.createElement ("p");
    let img = document.createElement("img");
    input.className = "input";
    input.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(input).appendChild(img);
})

notesContainer.addEventListener ("click", function(x) {
    if (x.target.tagName === "IMG") {
        x.target.parentElement.remove();
        storage();
    }
    else if(x.target.tagName === "P") {
        notes = document.querySelectorAll(".input");
        notes.forEach(note => {
            note.onkeyup = function() {
                storage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand ("insertLineBreak");
        event.preventDefault();
    }
})

function logout () {
    window.location.href = "Notes.html";
}