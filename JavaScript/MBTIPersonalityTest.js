const prompt = require('prompt-sync')();
let userName = prompt("Enter your name: ");

const questions = [
{opt: "At a party do you:", a : "Interact with many including strangers", b : "Interact with a few known to you", },
{opt: "Are you more:", a : "Realistic than speculative", b : "Speculative than realistic",},
{opt: "Is it worse to:",  a: "Have your head in the clouds",  b : "Be in a rut",},
{opt: "Are you more impressed by:",  a : "Principles", b : "Emotions"},
{opt: "Are more drawn toward the:", a : "Convincin", b : "Touching"},
{opt: "Do you prefer to work:",  a : "To deadlines", b : "Just whenever"},
{opt: "Do you tend to choose:",  a : "Rather carefully", b : "Somewhat impulsively"},
{opt: "At parties do you:", a : "Stay late with increasing energy", b : "Leave early with decreased energy"},
{opt: "Are you more attracted to:",  a  : "Sensible people", b : "Imaginative people"},
{opt: "Are you more interested in:", a : "What is actual", b : "What is possible"},
{opt: "In judging others are you more swayed by:", a : "Laws than circumstances", b : "Circumstances than laws"},
{opt: "In approaching others is your inclination to be somewhat:", a : "Objective", b : "Personal"}, 
{opt: "Are you more:", a : "Punctual", b : "Leisurely"},
{opt: "Does it bother you more having things:", a : "Incomplete", b : "Completed"},
{opt: "In your social groups do you:", a : "Keep abreast of other’s happenings", b : "Get behind on the news"},
{opt: "In doing ordinary things are you more likely to:", a : "Do it the usual way", b : "Do it your own way"},
{opt: "Writers should:", a : "Say what they mean and mean what they say", b : "Express things more by use of analogy"},
{opt: "Which appeals to you more:", a : "Consistency of thought", b : "Harmonious human relationships"},
{opt: "Are you more comfortable in making:", a : "Logical judgments", b : "Value judgments"},
{opt: "Do you want things:", a : "Settled and decided", b : "Unsettled and undecided"},
];



let scores = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0
};

// To record answers for display
let answers = [];

for (let index = 0; index < questions.length; index++) {
  const quest = questions[index];
  console.log(`\n${index + 1}. ${quest.opt}`);
  console.log(`A: ${quest.a}`);
  console.log(`B: ${quest.b}`);
  let answer = prompt('Enter your answer (A/B): ').toUpperCase();
  
  while (answer !== 'A' && answer !== 'B') {
    answer = prompt('Invalid input. Please enter A or B: ').toUpperCase();
  }

    questionNumber = index + 1;
    answers.push({
    questionNumber ,
    
        choice: answer,
    choiceText: answer === 'A' ? quest.a : quest.b
  });
  
  
  // Determine trait group based on question number
  const questNum = index + 1;
  if ([1, 5, 9, 13, 17].includes(questNum)) {
    answer === 'A' ? scores.E++ : scores.I++;
  } else if ([2, 6, 10, 14, 18].includes(questNum)) {
    answer === 'A' ? scores.S++ : scores.N++;
  } else if ([3, 7, 11, 15, 19].includes(questNum)) {
    answer === 'A' ? scores.T++ : scores.F++;
  } else if ([4, 8, 12, 16, 20].includes(questNum)) {
    answer === 'A' ? scores.J++ : scores.P++;
  }
}

let result = '';
result += scores.E >= scores.I ? 'E' : 'I';
result += scores.S >= scores.N ? 'S' : 'N';
result += scores.T >= scores.F ? 'T' : 'F';
result += scores.J >= scores.P ? 'J' : 'P';


console.log(" ");
console.log(userName);
console.log(`Your MBTI personality type is: ${result}`);

console.log(`\nYour Answers are:`);
answers.forEach((a) => {
  console.log(`${a.questionNumber}. ${a.questionText}`); 
  console.log(`   → You answered: ${a.choice} - ${a.choiceText}`);
});