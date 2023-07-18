// https://docs.google.com/document/d/1TzOzLbaZs3aFab6-oeQ3YjkZku3ANKPgB1uTrcoH4c4/edit

// 1 Write a function that finds the most frequent character in a string (case insensitive)

const charCounter = new Object();
const str = "AAaaAAABDDEEDDC";
let maxCount = 0;
let maxChar = "";

for (let i = 0; i < str.length; i++) {
  if (charCounter.hasOwnProperty(str.charAt(i))) {
    charCounter[str.charAt(i)]++;
  } else {
    charCounter[str.charAt(i)] = 1;
  }
  if (charCounter[str.charAt(i)] > maxCount) {
    maxCount = charCounter[str.charAt(i)];
    maxChar = str.charAt(i);
  }
}

console.log(maxChar + ' occurs ' + maxCount + ' times');


// ********************************
// 2 Create simple HTML form with text field and buttons “Set” and “Clear”. 
// On submit form set item to local storage with key “num23” and value from the text field. 
// On click “Clear” button clean up text field and delete item “num23” from local storage.
// On page load get item “num23” from local storage, create paragraph element, set according value into paragraph, and insert it before form.Paint paragraph in red if item value is odd and in green if item value is even.

// Text field should accept only numbers.
// Form should not be submitted if the field value is empty.
// Disable “Set” button if the field value is empty.


// ********************************
// 3 Write script that will parse query params from url and transform it into object with according key and value.
// URL example:
// http://localhost:63342/test/index.html?em=world&ew=book

// Object example:
// {
// 	“em” : ”world”,
//   “ew” : ”book”
// }

const url = 'http://localhost:63342/test/index.html?em=world&ew=book';
const urlPrep = url.slice(url.indexOf("?"), -1);
console.log(urlPrep);

const urlParams = new URLSearchParams(urlPrep);
const params = Object.fromEntries(urlParams);
console.log(params);


// ********************************
// 4 Write script that displays a list of products from server response data. (you may take design of the product card from this task)

// Request URL:
// https://mate-academy.github.io/react_phone-catalog/_new/products.json
// Request method: GET
// Server returns encoded JSON string in base64

const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      if (!response.ok) {
        return Promise.reject(
          `${response.status} - ${response.statusText}`
        );
      }
      return response.json();
    })
}

getData()
  .then(result => {
    console.log('SUCCESS', result);
  })
  .catch(error => {
    console.warn('ERROR', error);
  });
