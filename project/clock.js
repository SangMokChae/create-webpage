const time = document.querySelector("h4");

function loadTime() {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const amPm = hour >= 12 ? 'Pm' : 'Am';
  time.innerText = `${amPm} ${hour < 10 ? `0${hour}`: hour >= 13 ? `${hour-12}`: hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}

function init() {
  loadTime();
  setInterval(loadTime, 1000);
}
init();