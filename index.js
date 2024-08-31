const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shape');
const generateSvg = require('./lib/generateSvg');

async function init() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Which shape would you like for your logo?',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like the shape to be?',
        }
    ]);

    let shape;
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }

    shape.setColor(answers.color);
    generateSvg(shape);
    console.log('Generated logo.svg');
}

init();