const textBox = document.getElementById("textBox");
const btn = document.getElementById("btn");

const newWrapper = document.querySelector(".new-wrapper");
const inProgressWrapper = document.querySelector(".inprogress-wrapper");
const doneWrapper = document.querySelector(".done-wrapper");

const items = document.querySelectorAll(".item");
const menus = document.querySelectorAll(".menu-section");

let selected = null;

btn.addEventListener("click", () => {
    if(textBox.value == null || textBox.value == "" || textBox.value.trim() == ""){
        alert("Ticket details should not be empty!");
    } else {
        let div = document.createElement("div");
        div.classList.add("item");
        div.setAttribute("draggable", "true");

        let p = document.createElement("p");
        p.innerText = textBox.value.toUpperCase();
        p.classList.add("details");

        div.appendChild(p);

        let icon = document.createElement("span");
        icon.textContent = "drag_indicator";
        icon.classList.add("icon");
        icon.classList.add("material-symbols-outlined");

        div.appendChild(p);
        div.appendChild(icon);

        div.addEventListener("dragstart", (event) => {
            selected = event.target;
            console.log(selected)
        })

        newWrapper.appendChild(div);

        textBox.value = "";
    }
})

menus.forEach((menu) => {
    menu.addEventListener("dragover", (event) => {
        event.preventDefault();
        menu.classList.add("dragged-on");
    })

    menu.addEventListener("dragleave", (event) => {
        event.preventDefault();
        menu.classList.remove("dragged-on");
    })


    menu.addEventListener("drop", (event) => {
        event.preventDefault();
        console.log(selected)
        menu.appendChild(selected);
        menu.classList.remove("dragged-on");
    })
})