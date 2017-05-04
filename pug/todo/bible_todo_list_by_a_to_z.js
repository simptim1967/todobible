const TODO_FILE = "bible_todo_list_by_a_to_z";
var pug = require('pug');
var fs = require('fs');

// Determine pug template filename from command line arg
var templateFile = __dirname + "\\" + TODO_FILE + ".pug";

// Determine JSON data filename from command line arg
var jsonFile = __dirname + "\\" + TODO_FILE + ".json";

var json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

// Setup options/locals data
var data = {
  pretty: true,
  letters: json
};

// compile template file
var func = pug.compileFile(templateFile, data);

// Render template file
var html = func({letters: json});

// Output html
console.log(html);
