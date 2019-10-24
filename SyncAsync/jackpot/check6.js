const get6 = require("./get6");
const randomnumber = require("./pick6");

get6(800).then(data => {
  console.log(data.bnusNo);
  console.log(data.realNumbers);
  console.log(randomnumber);
});
