const body = document.body;
const html = document.documentElement;
const cards = document.querySelectorAll(".website-card").length;
const screenHeight = window.screen.height;
const cardHeight = screenHeight * 0.9;
const pageHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
);
const cardSpace = cardHeight * cards;
const cardsPxs = Math.floor((cardSpace) / cards);
console.log("Page Height: " + pageHeight + "px" + " | Cards: " + cards + " | Cards Pxs: " + cardsPxs + "px");

function targetCardPxs(scroll) {
    let activeCard = 1;
    for (let i = 1; i <= cards; i++) {
        if (scroll >= cardsPxs) {
            console.log(scroll);
            activeCard = i;
        }
    }
    console.log(activeCard);
}

window.addEventListener('scroll', () => {
    targetCardPxs(window.scrollY);
});
 