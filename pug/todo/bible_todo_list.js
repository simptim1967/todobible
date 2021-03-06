const TODO_FILE = "bible_todo_list";
var pug = require('pug');
var fs = require('fs');

// Determine pug template filename 
var templateFile = __dirname + "\\" + TODO_FILE + ".pug";

// Determine JSON data filename 
var jsonFile = __dirname + "\\..\\..\\json\\todo\\" + TODO_FILE + ".json";

var json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

// Setup options/locals data
var data = {
  pretty: true,
  topics: json
};

// compile template file
var func = pug.compileFile(templateFile, data);

// Render template file
var html = func({topics: json});

// Output html
console.log(html);
