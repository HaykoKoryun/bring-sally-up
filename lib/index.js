const { spawn } = require('child_process');
const path = require('path');
const argv = require('yargs').argv;
const Promise = require('rsvp').Promise;

const av = require('av');
const vorbis = require('vorbis.js');

const file = argv._[0];
const directive = argv._[1];
const args = 
[ '-f'
, `${file}.yml`
, directive
];

if(directive == 'up')
{ args.push('-d');
}

const player = av.Player.fromFile(path.resolve(__dirname, './bring-sally-up.ogg'));

const command = spawn
( 'docker-compose'
, args
);

command.stdout.on('data', (data) => {
  console.log(`${data}`);
});

command.stderr.on('data', (data) => {
  console.log(`${data}`);
});

player.play();

Promise.all
([
  new Promise((resolve, reject) =>
  { player.on('end', () =>
    { resolve();
    });
  })
, new Promise((resolve, reject) =>
  { command.on('close', (code) =>
    { resolve();
    });
  })
])
.then(() =>
{ process.exit();
})
.catch((err)=>
{
});