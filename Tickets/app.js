
const numberEl = document.getElementById('number1');
const buttonEl = document.getElementById('button1');

setInterval(() => {
  const currentNumber = numberEl.textContent;

  if (!isNaN(currentNumber)) {
    let number1 = parseInt(currentNumber, 10) - 1;

    if (number1 === 0) {
      number1 = 0;
      buttonEl.style.visibility = "hidden";
      buttonEl.disabled = true;
    } else if (number1 < 0) {
      number1 = 0;
      buttonEl.style.visibility = "hidden";
      buttonEl.disabled = true;
    } else {
      buttonEl.style.visibility = "visible";
      buttonEl.disabled = false;
    }
    numberEl.textContent = number1;
  }
}, 40000);

const numberEla = document.getElementById('number2');
const buttonEla = document.getElementById('button2');

setInterval(() => {
  const currentNumber = numberEla.textContent;

  if (!isNaN(currentNumber)) {
    let number1 = parseInt(currentNumber, 10) - 1;

    if (number1 === 0) {
      number1 = 0;
      buttonEla.style.visibility = "hidden";
      buttonEla.disabled = true;
    } else if (number1 < 0) {
      number1 = 0;
      buttonEla.style.visibility = "hidden";
      buttonEla.disabled = true;
    } else {
      buttonEla.style.visibility = "visible";
      buttonEla.disabled = false;
    }
    numberEla.textContent = number1;
  }
}, 50000);

const numberElb = document.getElementById('number3');
const buttonElb = document.getElementById('button3');

setInterval(() => {
  const currentNumber = numberElb.textContent;

  if (!isNaN(currentNumber)) {
    let number1 = parseInt(currentNumber, 10) - 1;

    if (number1 === 0) {
      number1 = 0;
      buttonElb.style.visibility = "hidden";
      buttonElb.disabled = true;
    } else if (number1 < 0) {
      number1 = 0;
      buttonElb.style.visibility = "hidden";
      buttonElb.disabled = true;
    } else {
      buttonElb.style.visibility = "visible";
      buttonElb.disabled = false;
    }
    numberElb.textContent = number1;
  }
}, 60000);

