let d = document;

d.addEventListener('click', e => {
    if(e.target.matches(".header__toggle") || e.target.matches(".header__toggle *")){
        d.querySelector(".section__nav").classList.add("is--active")
    }
    if(e.target.matches(".btn_close") || e.target.matches(".section__nav") || e.target.matches(".menu")){
        d.querySelector(".section__nav").classList.remove("is--active")
    }
})