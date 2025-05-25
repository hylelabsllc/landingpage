const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/images/logo.svg');
const outputDir = path.join(__dirname, '../public');

async function generateFavicon() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate PNG for the main size
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon.png'));

    // Generate ICO file
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(outputDir, 'favicon.ico'));

    console.log('Favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 