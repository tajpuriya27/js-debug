/*
original email: dummyemail2@gmail.com
Email to show: d**********@gmail.com */

const orgEmail = "dummyemail2@gmail.com";

const regex = /(?<!^).*?(?=@)/;
const expectedOutput = orgEmail.replace(regex, (match) =>
  "*".repeat(match.length)
);
console.log(
  "original email: " + orgEmail + "\nEmail to show: " + expectedOutput
);
