const fs = require('fs');

function generateSvg(shape) {
    const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
    ${shape.render()}
</svg>
`;
    fs.writeFileSync('./examples/logo.svg', svgContent);
}

module.exports = generateSvg;