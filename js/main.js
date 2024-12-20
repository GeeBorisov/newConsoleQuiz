let btnNext = document.querySelectorAll('[data-nav="next"]');
let btnPrev = document.querySelectorAll('[data-nav="prev"]');

let answers = {
  2: null,
  3: null,
  4: null,
  5: null,
};

btnNext.forEach(function (button) {
  button.addEventListener('click', function () {
    let thisCard = this.closest('[data-card]');
    let thisCardNumber = parseInt(thisCard.dataset.card);

    if (thisCard.dataset.validate == 'novalidate') {
      navigate('next', thisCard);
    } else {
      saveAnswer(thisCardNumber, getherCardData(thisCardNumber));
      navigate('next', thisCard);
    }
  });
});

btnPrev.forEach(function (button) {
  button.addEventListener('click', function () {
    let thisCard = this.closest('[data-card]');
    navigate('prev', thisCard);
  });
});

function navigate(direction, thisCard) {
  let thisCardNumber = parseInt(thisCard.dataset.card);
  let nextCard;
  if (direction == 'next') {
    nextCard = thisCardNumber + 1;
  } else {
    nextCard = thisCardNumber - 1;
  }

  thisCard.classList.add('hidden');
  document.querySelector(`[data-card="${nextCard}"]`).classList.remove('hidden');
}

function getherCardData(number) {
  let question;
  let result = [];
  let currentCard = document.querySelector(`[data-card="${number}"]`);

  question = currentCard.querySelector('[data-question]').innerText;

  let radioValues = currentCard.querySelectorAll('[type="radio"]');
  radioValues.forEach(function (item) {
    if (item.checked) {
      result.push({
        name: item.name,
        value: item.value,
      });
    }
  });

  let checkboxValues = currentCard.querySelectorAll('[type="checkbox"]');
  checkboxValues.forEach(function (item) {
    if (item.checked) {
      result.push({
        name: item.name,
        value: item.value,
      });
    }
  });

  let inputValues = currentCard.querySelectorAll(
    '[type = "text"], [type = "email"], [type = "number"]',
  );
  inputValues.forEach(function (item) {
    itemValue = item.value;
    if (itemValue.trim() != '') {
      result.push({
        name: item.name,
        value: item.value,
      });
    }
  });

  let data = {
    question: question,
    answer: result,
  };

  return data;
}

function saveAnswer(number, data) {
  answers[number] = data;
}
