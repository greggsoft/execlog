const exec = require('child_process').exec;

var streamLog = function (stream) {
    stream.on('data', function (chunk) {
        if (chunk[chunk.length - 1] == '\n') {
            chunk = chunk.slice(0, -1);
        }
        console.log(chunk);
    });
};

var execLog = function (child) {
    streamLog(child.stdout);
    streamLog(child.stderr);
    return child;
};

module.exports = function (cmd, cb) {
    return execLog(exec(cmd, cb));
};

module.exports.execLog = execLog;
