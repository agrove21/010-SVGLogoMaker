const fs = require("fs");

function generateSvg(shape, text, textColor) {
  const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;
  fs.writeFileSync("./examples/logo.svg", svgContent);
}

module.exports = generateSvg;
