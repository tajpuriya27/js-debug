/*
original email: dummyemail2@gmail.com
Email to show: d**********@gmail.com */

// const orgEmail = "dummyemail2@gmail.com";
const orgEmail = "test@gmail.com";

const regex = /(?<!^).*?(?=@)/;
const expectedOutput = orgEmail.replace(regex, (match) =>
  "*".repeat(match.length)
);
console.log(
  "original email: " + orgEmail + "\nEmail to show: " + expectedOutput
);

let emailInArr = orgEmail.split("@");
let firstPart = emailInArr[0];
let secondPart = emailInArr[1];
let emailToShow =
  firstPart[0] + "*".repeat(firstPart.length - 1) + "@" + secondPart;

console.log(emailToShow);
