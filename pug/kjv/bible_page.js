const TEMPLATE_FILE = "bible_page.pug";
var pug = require('pug');
var fs = require('fs');

// Determine pug template filename 
var templateFile = __dirname + "\\" + TEMPLATE_FILE;

var otBookName = ["genesis", "exodus", "leviticus", "numbers", "deuteronomy", "joshua", "judges", "ruth", "1samuel", "2samuel","1kings","2kings","1chronicles", "2chronicles", "ezra", "nehemiah", "esther","job","psalms","proverbs","ecclesiastes","song_of_solomon","isaiah","jeremiah","lamentations","ezekiel","daniel","hosea","joel","amos","obadiah","jonah","micah","nahum","habakkuk","zephaniah","haggai","zechariah","malachi"];
var otChapterCount = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4];
var ntBookName = ["matthew","mark","luke","john","acts","romans", "1corinthians", "2corinthians", "galatians", "ephesians", "philippians", "colossians", "1thessalonians", "2thessalonians","1timothy","2timothy","titus","philemon","hebrews","james","1peter","2peter","1john","2john","3john","jude","revelation"];
var ntChapterCount   = [28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];

//-Loop through each OT book in turn
for (var i = 0; i<39; i++) {
  //-Output OT book chapters
  var chapter=1;
  while (chapter <= otChapterCount[i]) {
    // Compute bible page name 
    var biblePage = otBookName[i] + "_" + chapter;

    // Determine JSON data filename for bible page
    var jsonFile = __dirname + "\\..\\..\\json\\kjv\\" + biblePage + ".json";

    // Read bible page data
    var json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

    // Setup options/locals data
    var data = {
      pretty: true,
      page: json
    };

    // compile template file
    var func = pug.compileFile(templateFile, data);

    // Render template file
    var html = func({page: json});

    // Determine html data filename for bible page
    var htmlFile = __dirname + "\\..\\..\\..\\live\\kjv\\" + biblePage + ".html";

    // Save html
    console.log(biblePage + ".html");
    fs.writeFileSync(htmlFile, html, 'utf8');

    // Next chapter
    ++chapter;
  }
}
//End of OT book output
                
//-Loop through each NT book in turn
for (var i = 0; i<27; i++) {
  //-Output NT book chapters
  var chapter=1;
  while (chapter <= ntChapterCount[i]) {
    // Compute bible page name 
    var biblePage = ntBookName[i] + "_" + chapter;

    // Determine JSON data filename for bible page
    var jsonFile = __dirname + "\\..\\..\\json\\kjv\\" + biblePage + ".json";

    // Read bible page data
    var json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

    // Setup options/locals data
    var data = {
      pretty: true,
      page: json
    };

    // compile template file
    var func = pug.compileFile(templateFile, data);

    // Render template file
    var html = func({page: json});

    // Determine html data filename for bible page
    var htmlFile = __dirname + "\\..\\..\\..\\live\\kjv\\" + biblePage + ".html";

    // Save html
    console.log(biblePage + ".html");
    fs.writeFileSync(htmlFile, html, 'utf8');

    // Next chapter
    ++chapter;
  }
}
//End of NT book output

