
const body = document.body;
const html = document.documentElement;
const cards = document.querySelectorAll(".website-card").length;
const screenHeight = window.screen.height;
const cardHeight = screenHeight * 0.8;
const pageHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
);
console.log("Page Height: " + pageHeight + "px" + " | Cards: " + cards + " | Cards Pxs: " + cardHeight + "px");

function targetCardPxs(scroll) {
    let activeCard;
    for (let i = 1; i <= cards; i++) {
        if (scroll >= (cardHeight * i) - screenHeight) {
            // console.log(scroll);
            activeCard = i;
        }
    }
    console.log(activeCard);
    return activeCard;
}

function changeOpacity(cardNum) {
    let currentCard = cardNum - 1;
    let previousCard = cardNum - 2;
    let nextCard = cardNum;
    document.getElementsByClassName("website-card")[currentCard].style.opacity = 1;
    document.getElementsByClassName("website-card")[currentCard].style.transform = "scale(1)";
    if (previousCard >= 0) {
        document.getElementsByClassName("website-card")[previousCard].style.opacity = 0.1;
        document.getElementsByClassName("website-card")[previousCard].style.transform = "scale(0.75)";
    }
    if (nextCard <= cards-1) {
        document.getElementsByClassName("website-card")[nextCard].style.opacity = 0.1;
        document.getElementsByClassName("website-card")[nextCard].style.transform = "scale(0.75)";
    }
}
window.addEventListener('scroll', () => {
    let cardVeiwing = targetCardPxs(window.scrollY);
    changeOpacity(cardVeiwing);
});
