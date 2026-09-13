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
const cardSpaceGap = (pageHeight - cardSpace)/5;
console.log("Page Height: " + pageHeight + "px" + " | Cards: " + cards + " | Cards Pxs: " + cardHeight + "px");

function targetCardPxs(scroll) {
    let activeCard;
    for (let i = 1; i <= cards; i++) {
        if ( scroll >= (cardHeight*i)-screenHeight ) {
            // console.log(scroll);
            activeCard = i;
            
        }
        
        
    }
    console.log(activeCard);
     
}

window.addEventListener('scroll', () => {
    targetCardPxs(window.scrollY);
});
