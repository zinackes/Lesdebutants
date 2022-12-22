var header_list = document.querySelectorAll("a");
var accueil = document.querySelector(".active");
var header_all = document.querySelector("a");

header_list.forEach((value) => {
    value.addEventListener("click", () =>{
        accueil.classList.remove("active");

        for (let i = 0; i < 4; i++){
            header_all.classList.remove("active");
            console.log("test");
        }

        value.classList.add("active");
        console.log(value);
    })
})