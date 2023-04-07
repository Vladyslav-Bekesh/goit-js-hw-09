//! REFERENSES
const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
  colorChangeId: null,
};

refs.btnStart.addEventListener('click', colorChangeStart);
refs.btnStop.addEventListener('click', colorChangeStop);

//*START VALUES
refs.btnStop.disabled = true;

//! FUNCTIONS
function colorChangeStart(event) {
  event.preventDefault();
  refs.colorChangeId = setInterval(bodyChangeColor, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function colorChangeStop(event) {
  event.preventDefault();
  clearInterval(refs.colorChangeId);
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;
}

function bodyChangeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
