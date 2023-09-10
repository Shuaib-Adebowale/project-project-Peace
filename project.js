const openMenu = document.getElementById("fa-bars-icon");
const closeMenu = document.getElementById("fa-bars-icon-1")


const iconFa = document.querySelector(".icon-fa")
openMenu.addEventListener("click", (e)=>{
    e.preventDefault

    iconFa.style.visibility = "visible";
})

closeMenu.addEventListener("click", (e)=>{
    e.preventDefault

    iconFa.style.visibility = "hidden"
})

