const execlog = require('./index');

execlog('echo "It works!"', function (err) {
    console.assert(!err, 'It doesn\'t work :(');
});

const execLog = require('./index').execLog;
const exec = require('child_process').exec;

execLog(exec('echo "It works again!"', function (err) {
    console.assert(!err, 'It doesn\'t work :(');
}));
