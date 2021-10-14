const openYourBook = document.querySelector(".main");
const addMenu = document.querySelector(".menu-main");
var isOpen = false;

openYourBook.addEventListener("click", (e) => {
    if(isOpen == false && e.target.className == "showMenu") {
        addMenu.classList.add("active");
        isOpen = true;

    } else if(e.target.className == "menu-closeX"){
        addMenu.classList.remove("active");
        isOpen = false;
    }
})