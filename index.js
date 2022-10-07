//   __  __          _    _ ______ _    _ ______
//  |  \/  |   /\   | |  | |  ____| |  | |___  /
//  | \  / |  /  \  | |__| | |__  | |  | |  / /
//  | |\/| | / /\ \ |  __  |  __| | |  | | / /
//  | |  | |/ ____ \| |  | | |    | |__| |/ /__
//  |_|  |_/_/    \_\_|  |_|_|     \____//_____|

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Who Wants To win this Hackthon and win Millions? \n"
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue("HOW TO PLAY")} 
    I will ask you a few question related to Coding.
    If you get any question wrong I will be ${chalk.bgRed("killed")}
    So get all the questions right...
  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking answer...").start();
  await sleep();

  if (isCorrect) {
    spinner.success({
      text: `Nice work ${playerName}. That's a correct answer`,
    });
  } else {
    spinner.error({ text: `Game over, you suck ${playerName}!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What is your name?",
    default() {
      return "Player";
    },
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Congrats , ${playerName} !\n You win`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");

    console.log(
      chalk.green(
        `Programming isn't about what you know; it's about making the command line look cool`
      )
    );
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "Inside which HTML element do we put the JavaScript?\n",
    choices: [
      "<scripting>",
      "<js>",
      "<script>", // Correct
      "<javascript>",
    ],
  });

  return handleAnswer(answers.question_1 === "<script>");
}

async function question2() {
  const answers = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: "Where is the correct place to insert a JavaScript?\n",
    choices: [
      "The <head> section",
      "The <body> section",
      "The <main> section",
      "Both the <head> section and the <body> section are correct", // Correct
    ],
  });
  return handleAnswer(
    answers.question_2 ===
      "Both the <head> section and the <body> section are correct"
  );
}

async function question3() {
  const answers = await inquirer.prompt({
    name: "question_3",
    type: "list",
    message:
      "What is the correct syntax for referring to an external script called 'xxx.js'?\n",
    choices: [
      "<script name='xxx.js'>",
      "<script href='xxx.js'>",
      "<script src='xxx.js'>", // Correct
      "<script file='xxx.js'>",
    ],
  });

  return handleAnswer(answers.question_3 === "<script src='xxx.js'>");
}

async function question4() {
  const answers = await inquirer.prompt({
    name: "question_4",
    type: "list",
    message: "How do you write 'Hello World' in an alert box?\n",
    choices: [
      "msg('Hello World');",
      "alert('Hello World');", // Correct
      "alertBox('Hello World');",
      "msgBox('Hello world');",
    ],
  });
  return handleAnswer(answers.question_4 === "alert('Hello World');");
}

async function question5() {
  const answers = await inquirer.prompt({
    name: "question_5",
    type: "list",
    message: "How to write an IF statement in JavaScript?\n",
    choices: [
      "if i = 5 then",
      "if i = 5",
      "if (i == 5)", // Correct
      "if i == 5 then",
    ],
  });

  return handleAnswer(answers.question_5 === "if (i == 5)");
}

async function question6() {
  const answers = await inquirer.prompt({
    name: "question_6",
    type: "list",
    message: "How does a FOR loop start?\n",
    choices: [
      "for (i = 0; i <= 5)",
      "for (i <= 5; i++)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)", // Correct
    ],
  });

  return handleAnswer(answers.question_6 === "for (i = 0; i <= 5; i++)");
}

async function question7() {
  const answers = await inquirer.prompt({
    name: "question_7",
    type: "list",
    message: "How can you add a comment in a JavaScript?\n",
    choices: [
      "//This is a comment", // Correct
      "'This is a comment",
      "<!--This is a comment-->",
      "/*This is a comment*/",
    ],
  });

  return handleAnswer(answers.question_7 === "//This is a comment");
}

async function question8() {
  const answers = await inquirer.prompt({
    name: "question_8",
    type: "list",
    message: "How do you round the number 7.25, to the nearest integer?\n",
    choices: [
      "rnd(7.25)",
      "Math.rnd(7.25)",
      "round(7.25)",
      "Math.round(7.25)", // Correct
    ],
  });

  return handleAnswer(answers.question_8 === "Math.round(7.25)");
}

async function question9() {
  const answers = await inquirer.prompt({
    name: "question_9",
    type: "list",
    message: "How do you find the number with the highest value of x and y?\n",
    choices: [
      "ceil(x, y)",
      "Math.ceil(x, y)",
      "top(x, y)",
      "Math.max(x, y)", // Correct
    ],
  });

  return handleAnswer(answers.question_9 === "Math.max(x, y)");
}

async function question10() {
  const answers = await inquirer.prompt({
    name: "question_10",
    type: "list",
    message: "Which event occurs when the user clicks on an HTML element?\n",
    choices: [
      "onchange",
      "onmouseclick",
      "onmouseover",
      "onclick", // Correct
    ],
  });

  return handleAnswer(answers.question_10 === "onclick");
}

// Run it with top-level await
console.clear();

await welcome();

await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();

winner();
