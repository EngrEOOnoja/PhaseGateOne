const prompt = require('prompt-sync')();
const questions = [{1: "At a party do you:",
a : "Interact with many including strangers", b : "Interact with a few known to you",},
{2: "Are you more:", a : "Realistic than speculative", b : "Speculative than realistic",},
{3: "Is it worse to:",  a: "Have your head in the clouds",  b : "Be in a rut",},
{4: "Are you more impressed by:",  a : "Principles",
 b : "Emotions"},
{5: "Are more drawn toward the:", a : "Convincin", b : "Touching"},
{6: "Do you prefer to work:",  a : "To deadlines", b : "Just whenever"},
{7: "Do you tend to choose:",  a : "Rather carefully", b : "Somewhat impulsively"},
{8: "At parties do you:", a : "Stay late with increasing energy", b : "Leave early with decreased energy"},
{9: "Are you more attracted to:",  a  : "Sensible people", b : "Imaginative people"},
{10: "Are you more interested in:", a : "What is actual", b : "What is possible"},
{11: "In judging others are you more swayed by:", a : "Laws than circumstances", b : "Circumstances than laws"},
{12: "In approaching others is your inclination to be somewhat:", a : "Objective", b : "Personal"}, 
{13: "Are you more:"
["a : Punctual",
"b : Leisurely"]},
{14: "Does it bother you more having things:",
a : "Incomplete",
b : "Completed"},
{15: "In your social groups do you:",
a : "Keep abreast of other’s happenings",
b : "Get behind on the news"},
{16: "In doing ordinary things are you more likely to:",
a : "Do it the usual way",
b : "Do it your own way"},
{17: "Writers should:",
a : "Say what they mean and mean what they say",
b : "Express things more by use of analogy"},
{18: "Which appeals to you more:",
a : "Consistency of thought",
b : "Harmonious human relationships"},
{19: "Are you more comfortable in making:",
a : "Logical judgments",
b : "Value judgments"},
{20: "Do you want things:",
a : "Settled and decided",
b : "Unsettled and undecided"}];
let answers = [];

for (let i = 0; i < questions.length; i++) {
  console.log(questions[i].question);
  console.log(`A: ${questions[i].a}`);
  console.log(`B: ${questions[i].b}`);
  let answer = prompt('Enter your answer (A/B): ').toUpperCase();
  while (answer !== 'A' && answer !== 'B') {
    answer = prompt('Invalid input. Please enter A or B: ').toUpperCase();
  }
  answers.push(answer);
}
console.log(answers);
