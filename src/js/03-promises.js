import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
};
let timerId = null;

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  setTimeout(() => {
    let pos = 1;
    while (pos <= refs.inputAmount.value) {
      
      createPromise(pos, refs.inputStep.value)
        .then(saccesfullMessage => {
          Notiflix.Notify.success(`${saccesfullMessage}`);
          // console.log(`done|, pos:${pos}`);
        })
        .catch(unSaccesfullMessage => {
          Notiflix.Notify.failure(`${unSaccesfullMessage}`);
          // console.log(`not done|, pos:${pos}`);
        });
      
      pos += 1;
    }
  }, refs.inputDelay.value);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    console.log(position);
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`work, ${delay} pos:${position}`);
      } else {
        reject(`NOT work, ${delay} pos:${position}`);
      }
    }, delay);
  });

}
