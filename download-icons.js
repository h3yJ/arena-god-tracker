const fs = require('fs');
const path = require('path');
const https = require('https');

const champions = require('./src/data/champions.json');
const version = '15.13.1'; // use the same version you used for the JSON
const baseURL = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;
const outputDir = path.join(__dirname, 'public/icons');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const champList = Object.values(champions.data);

champList.forEach((champ) => {
  const fileName = champ.image.full;
  const url = baseURL + fileName;
  const filePath = path.join(outputDir, fileName);

  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      file.on('finish', () => console.log(`Saved ${fileName}`));
    } else {
      console.log(`Failed to download ${fileName}`);
    }
  });
});
