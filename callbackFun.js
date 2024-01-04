debugger;
function a(callback) {
  callback(); // Call the callback function
  //   console.log("Function a started");
  // Perform some actions
  console.log("Function a finished");
}

function b() {
  console.log("Function b executed");
}

a(b); // function a is executed first and then function b is executed
