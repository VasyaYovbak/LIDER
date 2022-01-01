class Partners {
    constructor() {
        this.partners_logo_link = [
            "https://static.wixstatic.com/media/00af0b_1b61b582da7d430b9b7a111c78f3371a~mv2.png/v1/fill/w_1293,h_722,al_c/00af0b_1b61b582da7d430b9b7a111c78f3371a~mv2.png",
            "resources/images/lpnu_logo.png",
            "https://i.pinimg.com/originals/15/b1/46/15b146e36609936e0d3336a1f4265770.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"];
        this.current_partner_index = [0, 1, 2];
    }

    change_partners(direction) {
        const partners_logo = document.querySelectorAll(".partner_logo");
        for (let i = 0; i < this.current_partner_index.length; i++) {
            if (this.current_partner_index[i] + direction < 0) {
                this.current_partner_index[i] = this.partners_logo_link.length - 1
            } else
                this.current_partner_index[i] = (this.current_partner_index[i] + direction) % this.partners_logo_link.length;
        }
        for (let i = 0; i < partners_logo.length; i++) {
            let image = document.createElement("img")
            image.setAttribute("src", this.partners_logo_link[this.current_partner_index[i]])
            partners_logo[i].innerHTML = ""
            partners_logo[i].append(image)
        }
    }

    addListenerToArrow() {
        const Arrows = document.querySelectorAll(".arrow")
        Arrows[0].addEventListener("click", () => {
            this.change_partners(-1);
        })
        Arrows[1].addEventListener("click", () => {
            this.change_partners(1);
        })
    }
}

export {Partners}


