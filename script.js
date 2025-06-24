// Change this to her birthday (MM-DD)
const birthday = "10-24"; // October 24

function getNextBirthday() {
  const today = new Date();
  const [month, day] = birthday.split('-').map(Number);
  let year = today.getFullYear();
  let bday = new Date(year, month - 1, day);
  if (bday < today) bday.setFullYear(year + 1);
  return bday;
}

function updateCountdown() {
  const now = new Date();
  const bday = getNextBirthday();
  const timeLeft = bday - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
