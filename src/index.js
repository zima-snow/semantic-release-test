require('dotenv').config();

const execSemanticRelease = require('./semanticRelease');

const main = async () => {
  await execSemanticRelease();
};

main();
