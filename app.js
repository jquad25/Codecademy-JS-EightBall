/*This program checks whether or not a user has entered a username, takes a question, and responds with one of 8 questions like a Magic Eight ball.*/

let userName = "";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = "Am I secretly a unicorn?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch( randomNumber) {
  case 1: eightBall = "It is certain";
    break;
  case 2: eightBall = "It is decidely so";
    break;
  case 3: eightBall = "Reply hazy, try again";
    break;
  case 4: eightBall = "Cannot predict now";
    break;
  case 5: eightBall = "Do not count on it";
    break;
  case 6: eightBall = "My sources say no";
    break;
  case 7: eightBall = "Outlook not so good";
    break;
  case 8: eightBall = "Signs point to yes";
    break;
  default: eightBall = "Who knows";
}

console.log(eightBall);