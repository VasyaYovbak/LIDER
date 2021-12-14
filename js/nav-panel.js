class NavPanel {
    toggleNav() {
        document.body.classList.toggle("nav_open");
    }
    addListenerToLanguage() {
        const language = document.querySelector(".lang_menu");
        const lang_list = document.querySelector("ul");
        language.addEventListener("click", () => {
            lang_list.classList.toggle("visible");
        })
        document.querySelector("main a").addEventListener("click",()=>{
            this.toggleNav();
        })
        document.querySelector("nav.nav a.nav_close").addEventListener("click",()=>{
            this.toggleNav();
        })
    }
}

export {NavPanel}

