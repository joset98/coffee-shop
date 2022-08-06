let btnMenu = document.querySelector("#menu-btn");
let btnSearch = document.querySelector("#search-btn");
let btnCart = document.querySelector("#cart-btn");

let navbar = document.querySelector(".navbar");
let searchForm = document.querySelector(".search-form");
let cartItemContainer = document.querySelector(".cart-item-container");

btnMenu.addEventListener('click', function () {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItemContainer.classList.remove("active");

});

btnSearch.addEventListener('click', function () {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItemContainer.classList.remove("active");

});

btnCart.addEventListener('click', function () {
    cartItemContainer.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");

});