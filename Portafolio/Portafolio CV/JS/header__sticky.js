window.onscroll = function () {
    let scrollNew = window.pageYOffset;
    let scrollInicial = window.pageYOffset;
    
    if (scrollNew > 120 
        ? d.querySelector(".header").classList.add("is--sticky")
        : d.querySelector(".header").classList.remove("is--sticky"));
    
    if (scrollInicial > 500
        ? d.querySelector(".scroll__top").classList.add("on")
        : d.querySelector(".scroll__top").classList.remove("on"));
}