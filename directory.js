var fs = require("fs");

fs.makedir("lib", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Directory Created");
  }
});
