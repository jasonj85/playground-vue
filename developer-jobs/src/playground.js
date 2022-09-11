const axios = require("axios");

const url = "http://localhost:3000/jobs";

axios
  .get(url)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });
