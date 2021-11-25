function toggleNav() {
    document.body.classList.toggle("nav_open");
}

const language = document.querySelector(".lang_menu");
const lang_list = document.querySelector("ul");
language.addEventListener("click", ()=>{
    lang_list.classList.toggle("visible");
})