const updateTimer = (isoDate, timerObj) => {
  const date = new Date(isoDate);

  setInterval(() => {
    const timeTillDate = date - Date.now();
    const sec = Math.floor(timeTillDate / 1000);
    const min = Math.floor(sec / 60);
    const hrs = Math.floor(min / 60);

    // updating the same obj
    timerObj.sec = sec % 60;
    timerObj.min = min % 60;
    timerObj.hrs = hrs;
  }, 500);
};

const timerObj = {
  hrs: 0,
  min: 0,
  sec: 0,
};

const isoDate = "2024-02-25T00:00:00.000-07:00";

updateTimer(isoDate, timerObj);

setInterval(() => {
  console.log(timerObj);
}, 1000);
