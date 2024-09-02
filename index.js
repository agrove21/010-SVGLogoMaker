const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shapes");
const generateSvg = require("./lib/generateSvg");

const prompt = inquirer.createPromptModule();

async function init() {
  const answers = await prompt([
    {
      type: "list",
      name: "shape",
      message: "Select a shape for your logo:",
      choices: ["Square", "Circle", "Triangle"],
    },
    {
      type: "input",
      name: "color",
      message: "What color would you like for your shape?",
    },
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for your logo text:",
      validate: function (input) {
        if (input.length > 3) {
          return "Text must be three characters or less.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like for your text?",
    },
  ]);

  let shape;
  switch (answers.shape) {
    case "Square":
      shape = new Square();
      break;
    case "Circle":
      shape = new Circle();
      break;
    case "Triangle":
      shape = new Triangle();
      break;
  }

  shape.setColor(answers.color);
  generateSvg(shape, answers.text, answers.textColor);
  console.log("Generated logo.svg");
}

init();