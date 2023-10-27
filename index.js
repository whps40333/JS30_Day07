// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(
  (element) => new Date().getFullYear() - element.year > 19
);
console.log({ isAdult });

// const isAdult = people.some(
//   element=> new Date().getFullYear() - element.year > 19
// )

// Array.prototype.every() // is everyone 19 or older?
const isAllAdult = people.every(
  (element) => new Date().getFullYear() - element.year > 19
);

// const isAdult = people.every(
//   element => new Date().getFullYear() - element.year > 19
// );
console.log({ isAllAdult });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find((obj) => obj.id === 823423);
// const findComment = comments.find(obj => obj.id === 823425);
console.log({ findComment });

// Array.prototype.findIndex()
// Find the comment with this ID
const findCommentIndex = comments.findIndex((obj) => obj.id === 823423);
// const findCommentindex = comments.findIndex(obj => obj.id === 823435);
console.log({ findCommentIndex });
// delete the comment with the ID of 823423

const newComments = [
  ...comments.slice(0, findCommentIndex),
  ...comments.slice(findCommentIndex + 1),
];

// const newComments = [
//   ...comments.slice(0,findCommentIndex),
//   ...comments.slice(findCommentIndex+1);
// ]
console.table(newComments);

// 另一方式 splice
comments.splice(findCommentIndex, 1);
// comments.splice(findCommentIndex,1);
console.log(comments);
