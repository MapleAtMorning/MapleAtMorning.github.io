let cards = document.getElementsByClassName("stylizer");
let cardnum = 1;

function changeCard(){
    console.log(cardnum)
    cards[cardnum].classList.replace("z1", "z0")
    if (cardnum >= 2){
        cardnum = 0;
    };
    cardnum++;
    cards[cardnum].classList.replace("z0", "z1");
};

// Didn't have time to test. Please test.