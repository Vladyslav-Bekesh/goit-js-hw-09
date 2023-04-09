import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
};
refs.form.addEventListener('submit', event => {
  event.preventDefault();
  createPromise()
    .then(x => {
      Notiflix.Notify.success(`${x}`);
    })
    .catch(x => {
      Notiflix.Notify.failure(`${x}`);
    });
});

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve('Sol lucet omnibus');
    }
    reject('Qui timide rogat docet negare');
  });
  return promise;
}
