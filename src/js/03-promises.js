import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
Notiflix.Notify.info('Sol lucet omnibus');
setTimeout(() => {Notiflix.Notify.info('Sol lucet omnibus')}, 1000);