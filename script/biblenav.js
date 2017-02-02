// Navigate to prayer page in a separate sized window
function wopen(url)
{
  // Fudge factors for window decoration space.
  // In my tests these work well on all platforms & browsers.
  var name = "popup";
  var w = 770;
  var h = 480;
  w += 32;
  h += 96;
  wleft = (screen.width - w) / 2;
  wtop = (screen.height - h) / 2;
  // IE5 and other old browsers might allow a window that is
  // partially offscreen or wider than the screen. Fix that.
  // (Newer browsers fix this for us, but let's be thorough.)
  if (wleft < 0) {
    w = screen.width;
    wleft = 0;
  }
  if (wtop < 0) {
    h = screen.height;
    wtop = 0;
  }
  var win = window.open(url,
    name,
    'width=' + w + ', height=' + h + ', ' +
    'left=' + wleft + ', top=' + wtop + ', ' +
    'location=no, menubar=no, ' +
    'status=no, toolbar=no, scrollbars=no, resizable=no');
  // Just in case width and height are ignored
  win.resizeTo(w, h);
  // Just in case left and top are ignored
  win.moveTo(wleft, wtop);
  win.focus();
}

// Navigate to page for specified bible book/chapter/verse
function GoToVerse()
{
  // Get verse reference from input box and convert to lower case
  var textBox = document.getElementById("vref");
  var vref = textBox.value.toLowerCase();

  // Check that a reference was input & warn if not
  if (vref.length == 0)
  {
   // No reference input
   alert("Please enter a verse reference (e.g. 'John 3:16').");
   textBox.focus();
   return;
  }
  
  // Check format of reference is valid & warn if not
  // First test the pattern <bookname> <chapter>:<verse>
  var pattern1 = /[1-3]?[ ]?[a-z]+ \d{1,3}:\d{1,3}/i;
  var pattern2 = /[1-3]?[ ]?[a-z]+ \d{1,3}/i;
  var pattern3 = /[1-3]?[ ]?[a-z]/i;

  var results = vref.match(pattern1);
  if (results == null || results[0]!=vref)
  {
   // Now try pattern with no verse specified <bookname> <chapter>
   var results = vref.match(pattern2);
   if (results == null || results[0]!=vref)
   {
     var results = vref.match(pattern3);
     if (results == null || results[0]!=vref)
     {
       // default to chapter 1
       vref += " 1:1";
     }
     else
     {
       // Invalid reference format
       alert("Invalid reference format. Please enter a verse reference in the format: <bookname> <chapter>[:<verse>]");
       return;
     }
   }
   else
   {
     // default to verse 1
     vref += ":1";
   }
  }

  // Extract book name
  var bookName = vref.substring(0,vref.indexOf(" ",2));
  bookName = bookName.replace(" ","");
  
  // find specified bookname in list
  var booklist = "#genesis#exodus#leviticus#numbers#deuteronomy#joshua#judges#ruth#1samuel#2samuel#1kings#2kings#1chronicles#2chronicles#ezra#nehemiah#esther#job#psalms#proverbs#ecclesiastes#song of solomon#isaiah#jeremiah#lamentations#ezekiel#daniel#hosea#joel#amos#obadiah#jonah#micah#nahum#habakkuk#zepheniah#haggai#zechariah#malachi#matthew#mark#luke#john#acts#romans#1corinthians#2corinthians#galatians#ephesians#philippians#colossians#1thessalonians#2thessalonians#1timothy#2timothy#titus#philemon#hebrews#james#1peter#2peter#1john#2john#3john#jude#revelation#";
  var i = booklist.indexOf("#" + bookName);
  if (i == -1)
  {
      // Not found so report as invalid
      alert("Invalid book name!");
      return;
  }

  // Obtain full book name in case user specified only a partial name
  var tmp = booklist.substr(i + 1);
  var realBookName = tmp.substr(0, tmp.indexOf("#"));
  if (realBookName == "song of solomon")
  {
      // Adjust the page name for song of solomon
      realBookName = "song_of_solomon";
  }

  // Compute book number to determine maximum number of chapters in book
  var oldLen = tmp.length - 1;
  tmp = tmp.replace(/#/g, '');
  var bookNumber = 66 - (oldLen - tmp.length);

    // Extract chapter number
  var chapter = vref.substring(vref.indexOf(" ",2)+1,vref.indexOf(":"));

  // Validate chapter number for specified book
  var chapterCount = [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22];
  if (chapter < 0 || chapter > chapterCount[bookNumber - 1])
  {
      // Invalid chapter number
      alert("Invalid chapter number!");
      return;
  }
  
  // Extract verse number
  var verse = vref.substr(vref.indexOf(":") + 1);

    // Validate verse number for specified chapter
    // TODO:
  
  // Construct page name
  var page = realBookName + "_" + chapter + ".html";
  if (verse.length != 0 && verse != '1')
     page += "?goto=" + verse;

  // Navigate to bible chapter page
  window.location = page;  
}
