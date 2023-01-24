const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;  


app.set('view engine', 'ejs');
let myName = 'Nicole';

app.get('/', (req, res) => {
  //res.send('<!DOCTYPE html><html lang="en"><h1>Hello World, is it November?</h1>')
  res.send(`<h3> Hi, ${myName} </h3>`)
})


app.get('/show', (req, res) => {

    // res.sendFile('index.html');

    res.sendFile('index.html' , { root : __dirname});


})

app.get('/ejs', (req, res) => {
    //ejs stuff goes here
    res.render('index');
})

console.log('in the node console');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})