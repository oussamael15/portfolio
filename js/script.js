const pages = document.querySelectorAll(".page")
const links = document.querySelectorAll("nav a")

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = link.getAttribute("href");
        pages.forEach(page => {
            page.classList.remove("active");
        })
        links.forEach(link => {
            link.classList.remove("active");
        })
        const active = document.querySelector(target);
        active.classList.add("active");
        link.classList.add("active");
    })

})
