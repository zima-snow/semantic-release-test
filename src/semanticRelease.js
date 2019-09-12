const semanticRelease = require('semantic-release');

const execSemanticRelease = async () => {
  try {
    const result = await semanticRelease({
      // Core options
      branch: 'master',
      repositoryUrl: 'https://github.com/zima-snow/semantic-release-test.git',
      // Shareable config
      // extends: 'my-shareable-config',
      // Plugin options
      // githubUrl: 'https://my-ghe.com',
      // githubApiPathPrefix: '/api-prefix'
    }, {
      env: { ...process.env },
    });
  
    if (result) {
      const {lastRelease, commits, nextRelease, releases} = result;
  
      console.log(`Published ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`);
  
      if (lastRelease.version) {
        console.log(`The last release was "${lastRelease.version}".`);
      }
  
      for (const release of releases) {
        console.log(`The release was published with plugin "${release.pluginName}".`);
      }
    } else {
      console.log('No release published.');
    }
  } catch (err) {
    console.error('The automated release failed with %O', err);
  }
};

module.exports = execSemanticRelease;
