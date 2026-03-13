const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let position = 0;

next.addEventListener("click", () => {
position -= 200;
track.style.transform = `translateX(${position}px)`;
});

prev.addEventListener("click", () => {
position += 200;
track.style.transform = `translateX(${position}px)`;
});