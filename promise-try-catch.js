/*****
    Defining a promise and using try-catch to handle errors.
*****/

function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulate asynchronous operation with setTimeout
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data successfully fetched!");
      } else {
        reject("Error fetching data!");
      }
    }, 1000);
  });
}

// fetchData("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => {
//     console.log(data); // "Data successfully fetched!"
//   })
//   .catch((error) => {
//     console.error(error); // "Error fetching data!"
//   });

// same as above but with try-catch
async function fetchAsyncData(url) {
  try {
    const data = await fetchData(url);
    console.log(data); // "Data successfully fetched!"
  } catch (error) {
    console.error(error); // "Error fetching data!"
  }
}
fetchAsyncData("https://jsonplaceholder.typicode.com/posts");

const promise1 = fetchData("https://jsonplaceholder.typicode.com/posts/1");
const promise2 = fetchData("https://jsonplaceholder.typicode.com/posts/2");

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results[0], results[1]); // Data from both APIs
  })
  .catch((error) => {
    console.error(error);
  });

// same as above but with try-catch
async function fetchAllAsyncData() {
  try {
    const [result1, result2] = await Promise.all([
      fetchData("https://jsonplaceholder.typicode.com/posts/1"),
      fetchData("https://jsonplaceholder.typicode.com/posts/2"),
    ]);
    console.log(result1, result2); // Data from both APIs
  } catch (error) {
    console.error(error);
  }
}
