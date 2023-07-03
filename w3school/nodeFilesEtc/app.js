var http = require('http');
var mongo = require('mongodb')

var getingDate = require('./getDate')
var url = require('url')

var fs = require('fs')

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' })

    // TASK-------------------------------------------1
    // res.end('good')

    // TASK-------------------------------------------2
    // console.log(getingDate.geting());

    // TASK-------------------------------------------3
    // res.write(req.url);

    // TASK-------------------------------------------4
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.write(txt)


    // TASK-------------------------------------------5
    // fs.readFile('asdf.html', function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end()
    // })


    // TASK-------------------------------------------6
    // fs.appendFile('ASDF.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });


    // fs.open('mynewfile2.txt', 'w', function (err, file) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });


    // fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });


    // fs.appendFile('mynewfile3.txt', ' This is my text. AND UPDATED', function (err) {
    //     if (err) throw err;
    //     console.log('Updated!');
    // });


    // fs.unlink('poiu.txt', function (err) {
    //     if (err) throw err;
    //     console.log('Updated!');
    // });

    // fs.rename('gjgj.txt', 'mynewfile4.txt', function (){})


    // TASK----------------------------------------------6

    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });


}).listen(8080)

