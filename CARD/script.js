const title = document.querySelector(".card-content h2");
const cardHeader = document.querySelector(".card-header");

title.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "black";
    cardHeader.style.transform = "scaleX(-1)";
});

title.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "#b7e4ef"; 
    cardHeader.style.transform = "scaleX(1)";
});
