document.addEventListener('DOMContentLoaded', function () {
    const toAnimate = document.querySelectorAll(".fade");
    for (const element of toAnimate) {
        element.classList.remove("fade");
    }

    document.addEventListener('mousemove', parallax);

    function parallax(e) {
        this.querySelectorAll(".mouse").forEach(element => {
            const speed = element.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 200;
            const y = (window.innerHeight - e.pageY * speed) / 200;
            element.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    document.querySelectorAll(".centres_box").forEach(element => {
        element.addEventListener('mouseenter', (e) => {

        })
    })

    const links = document.querySelectorAll(".nav_menu ul li a");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }
    document.getElementById("logo").addEventListener("click", clickHandler);

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop - 80,
            behavior: "smooth"
        });
    }
})


