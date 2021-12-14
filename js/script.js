import "../scss/style.scss";
const partners_logo_link = [
    "https://static.wixstatic.com/media/00af0b_1b61b582da7d430b9b7a111c78f3371a~mv2.png/v1/fill/w_1293,h_722,al_c/00af0b_1b61b582da7d430b9b7a111c78f3371a~mv2.png",
    "resources/images/lpnu_logo.png",
    "https://i.pinimg.com/originals/15/b1/46/15b146e36609936e0d3336a1f4265770.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
]
let current_partner_index = [0, 1, 2];

const partners_logo = document.querySelectorAll(".partner_logo")
function change_partners(direction) {
    for (let i = 0;i<current_partner_index.length;i++) {
        if (current_partner_index[i] + direction <0){
            current_partner_index[i] = partners_logo_link.length-1
        }else
        current_partner_index[i] = (current_partner_index[i] + direction) % partners_logo_link.length;
    }
    for (let i = 0; i < partners_logo.length; i++) {
        let image = document.createElement("img")
        image.setAttribute("src",  partners_logo_link[current_partner_index[i]])
        partners_logo[i].innerHTML = ""
        partners_logo[i].append(image)
    }
}

change_partners(0);

const Arrows=document.querySelectorAll(".arrow")
Arrows[0].addEventListener("click",()=>{
    change_partners(-1);
})
Arrows[1].addEventListener("click",()=>{
    change_partners(1);
})


function toggleNav() {
    document.body.classList.toggle("nav_open");
}

const language = document.querySelector(".lang_menu");
const lang_list = document.querySelector("ul");
language.addEventListener("click", ()=>{
    lang_list.classList.toggle("visible");
})

