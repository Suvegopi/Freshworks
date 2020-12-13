/*jshint esversion: 6 */
var express = require('express');
var fs = require('fs');
const { nextTick } = require('process');
var data = fs.readFileSync('data.json');
var words = JSON.parse(data);
console.log(data);
const app = express();
app.get('/', function (req, res) {
    res.send(words);
    next();
});
app.get('/add/:words', function (req, res) {
    var data = req.params;
    var words = data.words;
    var str = JSON.stringify(words);
    fs.writeFile('data.json', str, finished);
    function finished(err) { 
        console.log('all written');
    }
    res.send('ok');

});

app.listen(3001);
