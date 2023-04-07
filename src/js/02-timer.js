//! FLATPIKR

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//* FLATPEKR options

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

//! REFERENCES
const refs = {
  btnStart: document.querySelector('[data-start]'),
  timeInput: document.getElementById('datetime-picker'),
  daysCounter: document.querySelector('[data-days]'),
  hoursCounter: document.querySelector('[data-hours]'),
  minutesCounter: document.querySelector('[data-minutes]'),
  secondsCounter: document.querySelector('[data-seconds]'),
};

//! LISTENERS AND START VALUES
refs.btnStart.addEventListener('click', startTimer);
refs.timeInput.addEventListener('change', buttonActiveSwitch);

const fp = flatpickr(refs.timeInput, options);

//! FUNCTIONS

function calculateTimeRemain(currentTime) {
  if (fp.selectedDates[0] - currentTime > 1000) {
    const { days, hours, minutes, seconds } = convertMs(
      fp.selectedDates[0] - currentTime
    );
    refs.daysCounter.textContent = days;
    refs.hoursCounter.textContent = hours;
    refs.minutesCounter.textContent = minutes;
    refs.secondsCounter.textContent = seconds;
  } else {
    alert('Please choose a date in the future');
    return;
  }
}

function startTimer() {
  const dateCurrent = new Date();
  const timerID = setInterval(calculateTimeRemain(dateCurrent), 1000);
}

function buttonActiveSwitch() {
  refs.btnStart.disabled = false;
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
