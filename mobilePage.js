const cards = document.getElementsByClassName('stylizer')
let cardnum = 1

window.onresize = windowCheck

function changeCard () {
  cards[cardnum].classList.replace('z1', 'z0')
  if (cardnum >= 2) {
    cardnum = 0
  } else {
    cardnum++
  };
  cards[cardnum].classList.replace('z0', 'z1')
};

function windowCheck () {
  if ((window.innerWidth < 800 && cards[0].classList.contains('animateLeft')) || (window.innerWidth < 800 && cards[2].classList.contains('animateRight'))) {
    console.log('removed')
    cards[0].classList.remove('animateLeft')
    cards[2].classList.remove('animateRight')
  } else if ((window.innerWidth >= 800 && !cards[0].classList.contains('animateLeft')) || (window.innerWidth >= 800 && !cards[2].classList.contains('animateRight'))) {
    console.log('added')
    cards[0].classList.add('animateLeft')
    cards[2].classList.add('animateRight')
  } else {
    return
  };

  if(window.innerWidth > 800 && Array.from(cards[1].classList).includes("z0")){
    cards[0].classList.replace('z1', 'z0')
    cards[1].classList.replace('z0', 'z1')
    cards[2].classList.replace('z1', 'z0')
  }

};
windowCheck()

document.getElementById('pageButton').addEventListener('click', changeCard)
