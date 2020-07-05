var fs = require("fs");

// Initialise arrays for OT and NT bible books
var BookNames = [
  "genesis",
  "exodus",
  "leviticus",
  "numbers",
  "deuteronomy",
  "joshua",
  "judges",
  "ruth",
  "1samuel",
  "2samuel",
  "1kings",
  "2kings",
  "1chronicles",
  "2chronicles",
  "ezra",
  "nehemiah",
  "esther",
  "job",
  "psalms",
  "proverbs",
  "ecclesiastes",
  "song_of_solomon",
  "isaiah",
  "jeremiah",
  "lamentations",
  "ezekiel",
  "daniel",
  "hosea",
  "joel",
  "amos",
  "obadiah",
  "jonah",
  "micah",
  "nahum",
  "habakkuk",
  "zephaniah",
  "haggai",
  "zechariah",
  "malachi",
  "matthew",
  "mark",
  "luke",
  "john",
  "acts",
  "romans",
  "1corinthians",
  "2corinthians",
  "galatians",
  "ephesians",
  "philippians",
  "colossians",
  "1thessalonians",
  "2thessalonians",
  "1timothy",
  "2timothy",
  "titus",
  "philemon",
  "hebrews",
  "james",
  "1peter",
  "2peter",
  "1john",
  "2john",
  "3john",
  "jude",
  "revelation",
];
var ChapterCounts = [
  50,
  40,
  27,
  36,
  34,
  24,
  21,
  4,
  31,
  24,
  22,
  25,
  29,
  36,
  10,
  13,
  10,
  42,
  150,
  31,
  12,
  8,
  66,
  52,
  5,
  48,
  12,
  14,
  3,
  9,
  1,
  4,
  7,
  3,
  3,
  3,
  2,
  14,
  4,
  28,
  16,
  24,
  21,
  28,
  16,
  16,
  13,
  6,
  6,
  4,
  4,
  5,
  3,
  6,
  4,
  3,
  1,
  13,
  5,
  5,
  3,
  5,
  1,
  1,
  1,
  22,
];

function IndexBibleWordsForBook(bookName, chapterCount) {
  // Initialise file output
  var sOutput = "";
  //-Loop through each chapter of book in turn
  for (var chapter = 1; chapter <= chapterCount; chapter++) {
    // Compute bible book chapter filename
    var biblePage = bookName + "_" + chapter;

    console.log("Chapter ", chapter);
    // Determine JSON data filename for this chapter
    var jsonFile =
      __dirname + "\\..\\json\\kjv\\bible-page\\" + biblePage + ".json";

    // Read bible chapter data
    var json = JSON.parse(fs.readFileSync(jsonFile, "utf8"));

    // Process chapter items
    for (var i = 0; i < json.items.length; i++) {
      var item = json.items[i];
      if (item.type === "verse") {
        console.log(item.number, item.plainText);
        // Split verse into separate words
        var word = "";
        var eow = false;
        for (var c = 0; c < item.plainText.length; c++) {
          var ch = item.plainText[c];
          switch (ch) {
            case " ":
              eow = true;
              break;
            case ",":
              eow = true;
              break;
            case ".":
              eow = true;
              break;
            case ";":
              eow = true;
              break;
            case ":":
              eow = true;
              break;
            case "(":
              eow = true;
              break;
            case ")":
              eow = true;
              break;
            case "?":
              eow = true;
              break;
            case "!":
              eow = true;
              break;
            default:
              word += ch;
          }
          if (c === item.plainText.length) {
            ch = "EOL";
            eow = true;
          }
          // Was the end of a word reached?
          if (eow) {
            if (word.length > 0) {
              // Output word
              var sLine =
                json.book.number +
                "," +
                chapter +
                "," +
                item.number +
                "," +
                word +
                "\n";
              sOutput += sLine;
              console.log(sLine);
            }
            word = "";
            eow = false;
          }
        }
      }
    }
    // !!!

    // Determine output data filename for bible book
    var outputFile = __dirname + "\\index\\" + bookName + "-word-index.txt";

    // Save output
    console.log("Saving word index to ", outputFile);
    fs.writeFileSync(outputFile, sOutput, "utf8");
  }
}

function IndexBibleWordsForAllBooks(bookNames, chapterCounts) {
  //-Loop through each book in turn
  for (var i = 0; i < bookNames.length; i++) {
    //-Process book
    IndexBibleWordsForBook(bookNames[i], chapterCounts[i]);
  }
}

// Generate bible word index for each book of the bible
// IndexBibleWordsForAllBooks(BookNames, ChapterCounts);

// Generate word index for Ephesians
IndexBibleWordsForBook("ephesians", 6);
