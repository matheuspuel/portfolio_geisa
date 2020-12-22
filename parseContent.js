const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'content');
const targetFile = path.join(__dirname, 'src', 'content.json');

const result = fs.readdirSync(sourceDir)
  .filter(collection => !path.extname(collection))
  .reduce((object, collection) => {
    const collectionResult = fs.readdirSync(path.join(sourceDir, collection))
      .filter(document => path.extname(document) === '.json')
      .map(document => require(path.join(sourceDir, collection, document)));
    return {...object, [collection]: collectionResult}
  }, {})

fs.writeFileSync(targetFile, JSON.stringify(result))

