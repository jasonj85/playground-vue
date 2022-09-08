const interval = setInterval(() => {
  console.log("Hello World!");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Interval cleared!");
}, 5000);

//https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png
