const blockInputs = document.querySelectorAll(
  '.block:not(.block-big) .block-input'
);

const bigBlockInput = document.querySelector('.block-big .block-input');

let sum = 0;

const checkSum = () => {
  sum = 0;
  blockInputs.forEach((el) => {
    sum += Number(el.value);
  });
  if (sum != 0) bigBlockInput.value = sum;
};

blockInputs.forEach((el) => {
  el.addEventListener('input', () => {
    console.log(el);
    checkSum();
  });
});

checkSum();
