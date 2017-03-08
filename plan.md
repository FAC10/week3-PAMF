
### Fetch

function fetch (url, callback) makes generic HTTP calls and outputs api data

### The Movie DB

function movieDB (callback) outputs an object with the name of a random popular movie.

### Giphy

function giphy ({ film:filmName }, callback) adds an array containing a set of 10 gif links per word to an object.

### Data Handling

function dataHandling ({ object }, callback) outputs an object with a string answer and an array of gif links like:
  {
    answer: "Example Title",
    clues: [
            ['gif 1 of Example', 'gif 2 of Example', 'gif 3 of Example'],
            ['gif 1 of Title', 'gif 2 of Title', 'gif 3 of Title']
           ]
  }
function checkResults (string) checks if the answer is correct;

### View (DOM)

function prepareForDom ({ handledDataObject }, callback) build DOM elements based on the object

### Input

function inputForm ((event) {
  gets form data and compares it to
  })
