const interval = setInterval(() => {
  console.log("Hello World!");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Interval cleared!");
}, 5000);
