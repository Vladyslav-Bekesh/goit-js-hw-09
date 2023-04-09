//! FLATPIKR

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//! REFERENCES
const refs = {
  btnStart: document.querySelector('[data-start]'),
  timeInput: document.getElementById('datetime-picker'),
  daysCounter: document.querySelector('[data-days]'),
  hoursCounter: document.querySelector('[data-hours]'),
  minutesCounter: document.querySelector('[data-minutes]'),
  secondsCounter: document.querySelector('[data-seconds]'),
};

let timerID = null;
let TIMER_DEADLINE = null;
refs.btnStart.disabled = true;

//* FLATPEKR options

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < options.defaultDate) {
      alert('Please choose a date in the future');
      return;
    }
    refs.btnStart.disabled = false;
    alert('you choosed correct date');

    TIMER_DEADLINE = selectedDates[0];
  },
};

//! LISTENERS AND START VALUES
refs.btnStart.addEventListener('click', startTimer);

const fp = flatpickr(refs.timeInput, options);

//! FUNCTIONS

function startTimer() {
  timerID = setInterval(() => {
    const now = Date.now();
    const diff = TIMER_DEADLINE - now;
    if (diff < 1000) {
      clearInterval(timerID);
      refs.timeInput = false;
      refs.btnStart.disabled = false;

      refs.daysCounter.textContent = '00';
      refs.hoursCounter.textContent = '00';
      refs.minutesCounter.textContent = '00';
      refs.secondsCounter.textContent = '00';

      alert('WAKE UP. TIME TO LIVE');
    }
    const { days, hours, minutes, seconds } = convertMs(diff);

    refs.daysCounter.textContent = days.toString().padStart(2, '0');
    refs.hoursCounter.textContent = hours.toString().padStart(2, '0');
    refs.minutesCounter.textContent = minutes.toString().padStart(2, '0');
    refs.secondsCounter.textContent = seconds.toString().padStart(2, '0');

    refs.timeInput = true;
    refs.btnStart.disabled = true;
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
