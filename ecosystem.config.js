module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: 'index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-237-106-26.us-west-2.compute.amazonaws.com',
      key: 'C:/Users/Brian/.ssh/TestKeyPair.pem',
      ref: 'origin/master',
      repo: 'https://github.com/bstahly/NodeTutorial.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}