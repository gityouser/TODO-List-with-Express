const express = require('express');
//Instantinate express
const app = express();
const bodyParser = require('body-parser');
const todoList = [{name: 'First item', completed:false}];

// Tell it to look for files in 'public'
app.use(express.static('public'));
app.use(bodyParser.json());
// Handles a GET request - 1st argument is the path (/todo), the second one, is the callback that responds.
app.get('/todo', (request, response) => { //app.METHOD(PATH, HANDLER)
  console.log('I received a get request!');
  console.log(todoList);
  response.send(todoList);
})

app.post('/todo', (request, response) => {
  console.log('I received a POST request!');
  console.log(request.body);
  todoList.push(request.body);
  console.log(todoList);
  // response.send();
})









// Start/listen on port
app.listen(5000);
