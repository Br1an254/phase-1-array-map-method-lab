// const { transform } = require("babel-core");

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let tutorial = []
  const capitalized = tutorials.map(tutorialItems => {
    const words = tutorialItems.split(' ');
    const capitalizedWords = words.map(word => {
     return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return capitalizedWords.join(' ')
  })
  Object.assign(tutorial, capitalized)
  return tutorial
}

console.log(titleCased())