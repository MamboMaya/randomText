const express = require('express')
const app = express()
const path = require('path')
const loremIpsum = require('lorem-ipsum')


app.get('/', function(req, res) {
  res.send('yo homie... go check out the lorem ipsum page!')
})

app.get('/lorem', function (req, res) {
  const output = loremIpsum()
  res.send(output)
})

//NOT DONE WITH HARD MODE YET!! Still working on it

// app.get('/lorem/:num', function(req, res){
//   const num = loremIpsum.count
//   const output = loremIpsum({
//     count: num
//   })
//   res.send(output)
// })

app.listen(3000, function() {
  console.log('good to go! checkout localhost:3000');
})
