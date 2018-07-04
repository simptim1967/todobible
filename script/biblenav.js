// Navigate to page for specified bible book/chapter/verse
function GoToVerse() {
    // Get verse reference from input box and convert to lower case
    var textBox = document.getElementById("vref");
    var vref = textBox.value.toLowerCase();

    // Check that a reference was input & warn if not
    if (vref.length == 0) {
        // No reference input
        alert("Please enter a bible reference (e.g. 'John 3:16').");
        textBox.focus();
        return;
    }

    // Check format of reference is valid & warn if not
    // First test the pattern <bookname> <chapter>:<verse>-<verse>
    var pattern0 = /[1-3]?[ ]?[a-z]+ \d{1,3}:\d{1,3}-\d{1,3}/i;
    var pattern1 = /[1-3]?[ ]?[a-z]+ \d{1,3}:\d{1,3}/i;
    var pattern2 = /[1-3]?[ ]?[a-z]+ \d{1,3}/i;
    var pattern3 = /[1-3]?[ ]?[a-z]/i;

    // Attempt to match pattern 0 <bookname> <chapter>:<verse>-<verse>
    var results = vref.match(pattern0);
    if (results == null || results[0] != vref) {
        // Now try pattern 1 <bookname> <chapter>:<verse>
        results = vref.match(pattern1);
        if (results == null || results[0] != vref) {
            // Now try pattern 2 <bookname> <chapter>
            results = vref.match(pattern2);
            if (results == null || results[0] != vref) {
                // Now try pattern 3 <bookname>
                results = vref.match(pattern3);
                if (results == null || results[0] != vref) {
                    // default to chapter 1
                    vref += " 1:1";
                }
                else {
                    // Invalid reference format
                    alert("Invalid reference format. Please enter a bible reference in the format: <bookname> <chapter>[:<verse>]");
                    return;
                }
            }
            else {
                vref += ":1";
            }
        }
    }

    // Extract book name
    var bookName = vref.substring(0, vref.indexOf(" ", 2));
    bookName = bookName.replace(" ", "");

    // find specified bookname in list
    var booklist = "#genesis#exodus#leviticus#numbers#deuteronomy#joshua#judges#ruth#1samuel#2samuel#1kings#2kings#1chronicles#2chronicles#ezra#nehemiah#esther#job#psalms#proverbs#ecclesiastes#song of solomon#isaiah#jeremiah#lamentations#ezekiel#daniel#hosea#joel#amos#obadiah#jonah#micah#nahum#habakkuk#zepheniah#haggai#zechariah#malachi#matthew#mark#luke#john#acts#romans#1corinthians#2corinthians#galatians#ephesians#philippians#colossians#1thessalonians#2thessalonians#1timothy#2timothy#titus#philemon#hebrews#james#1peter#2peter#1john#2john#3john#jude#revelation#";
    var i = booklist.indexOf("#" + bookName);
    if (i == -1) {
        // Not found so report as invalid
        alert("Invalid book name!");
        return;
    }

    // Obtain full book name in case user specified only a partial name
    var tmp = booklist.substr(i + 1);
    var realBookName = tmp.substr(0, tmp.indexOf("#"));
    if (realBookName == "song of solomon") {
        // Adjust the page name for song of solomon
        realBookName = "song_of_solomon";
    }

    // Compute book number to determine maximum number of chapters in book
    var oldLen = tmp.length - 1;
    tmp = tmp.replace(/#/g, '');
    var bookNumber = 66 - (oldLen - tmp.length);

    // Extract chapter number
    var chapter = vref.substring(vref.indexOf(" ", 2) + 1, vref.indexOf(":"));

    // Validate chapter number for specified book
    var chapterCount = [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22];
    if (chapter < 0 || chapter > chapterCount[bookNumber - 1]) {
        // Invalid chapter number
        alert("Invalid chapter number!");
        return;
    }

    // Extract verse number
    var verse = vref.substr(vref.indexOf(":") + 1);

    // Validate verse number for specified chapter
    // TODO:

    // Construct page name
    var page = "../kjv/" + realBookName + "_" + chapter + ".html";
    if (verse.length != 0 && verse != '1') {
        page += "?goto=" + verse;
    }

    // Navigate to bible chapter page
    window.location = page;
}
