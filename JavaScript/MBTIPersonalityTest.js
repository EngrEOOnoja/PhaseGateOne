const prompt = require('prompt-sync')();
const question = [{1: "At a party do you:",
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
{16: "In doing ordinary things are you more
likely to:"
a : "Do it the usual way",
b : "Do it your own way"},
{17: "Writers should:",
a : "Say what they mean and mean what they
say”,
b : "Express things more by use of analogy"},
{18: "Which appeals to you more:"
a : "Consistency of thought",
b : "Harmonious human relationships"},
{19: "Are you more comfortable in making:"
a : "Logical judgments",
b : "Value judgments"},
{20: "Do you want things:"
[a : "Settled and decided",
b : "Unsettled and undecided"}]


}

/*
//const userInput = prompt('Enter Choose Option: ');
for (const word in question) {
	if (word === ){
		console.log(`${word}: ${person[word]}`);
	}
}




There are a few issues with your code:

1. Inconsistent object structure: Your question array has objects with different structures. Some objects have numbered properties (e.g., 1, 2, etc.), while others have string properties (e.g., "11: In judging others are you more swayed by:"). It's better to use a consistent structure for all objects.
2. Missing quotes: Some of your property names are missing quotes. For example, a : "Convincin" should be "a" : "Convincin".
3. Typo in string: There's a typo in one of your strings: "Just whenever” should be "Just whenever".
4. Incorrect array syntax: Some of your objects are using array syntax incorrectly. For example, ["a : Punctual", "b : Leisurely"] should be {a: "Punctual", b: "Leisurely"}.

Here's a corrected version of your question array:


const questions = [
  {
    question: "At a party do you:",
    a: "Interact with many including strangers",
    b: "Interact with a few known to you",
  },
  {
    question: "Are you more:",
    a: "Realistic than speculative",
    b: "Speculative than realistic",
  },
  {
    question: "Is it worse to:",
    a: "Have your head in the clouds",
    b: "Be in a rut",
  },
  // Add the rest of your questions here...
];


You can then loop through the questions and prompt the user for answers:


for (let i = 0; i < questions.length; i++) {
  console.log(questions[i].question);
  console.log(`A: ${questions[i].a}`);
  console.log(`B: ${questions[i].b}`);
  let answer = prompt('Enter your answer (A/B): ').toUpperCase();
  // Process the answer...
}*/







