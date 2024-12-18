let btnNext = document.querySelectorAll('[data-nav="next"]');
let btnPrev = document.querySelectorAll('[data-nav="prev"]');

btnNext.forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    let thisCard = this.closest('[data-card]');
    let thisCardNumber = parseInt(thisCard.dataset.card);
    let nextCard = thisCardNumber + 1;

    thisCard.classList.add("hidden");
    document.querySelector(`[data-card="${nextCard}"]`).classList.remove('hidden');

  });
});

btnPrev.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      let thisCard = this.closest('[data-card]');
      let thisCardNumber = parseInt(thisCard.dataset.card);
      let nextCard = thisCardNumber - 1;
  
      thisCard.classList.add("hidden");
      document.querySelector(`[data-card="${nextCard}"]`).classList.remove('hidden');
  
    });
  });
