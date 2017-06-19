const express = require('express')
const app = express()
const path = require('path')
const loremIpsum = require('lorem-ipsum'),
 output = loremIpsum({
   count: 1,
 })
 console.log(loremIpsum.count);
const num = loremIpsum.count

app.get('/', function(req, res) {
  res.send('welcome, homie... go check out the lorem ipsum page!')
})

app.get('/lorem', function (req, res) {
  res.send(output)
})
app.get(`/lorem/${num}`, function(req, res){
  res.send(output)
})

app.listen(3000, function() {
  console.log('good to go! checkout localhost:3000');
})
