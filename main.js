


btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".lang-dropdown")) {
        menu.classList.remove("show");
    }
});
const inner = document.querySelector(".inner");
const cards = document.querySelectorAll(".card");

let index = 0;
const cardWidth = cards[0].offsetWidth + 20; // width + gap
const total = cards.length;
const visible = 5;

document.querySelector(".right").addEventListener("click", () => {
    index++;
    if (index > total - visible) index = 0; // infinite loop
    inner.style.transform = `translateX(-${index * cardWidth}px)`;
});

document.querySelector(".left").addEventListener("click", () => {
    index--;
    if (index < 0) index = total - visible; // infinite loop
    inner.style.transform = `translateX(-${index * cardWidth}px)`;    
});
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(json => {
    var img1 = document.getElementById("img1");

    console.log(json);

    img1.setAttribute("src", json[0].image);
    img1.style.width = "100%"
    img1.style.height = "30vh"
})

