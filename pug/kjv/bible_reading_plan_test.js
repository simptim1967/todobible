// Test that the daily plan does indeed read through the OT once and NT twice

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var dayCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var displayName = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
];
var idName = [
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
var chapterCount = [
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

var dailyReading = {
  month: [
    {
      // Jan
      days: [
        {
          // 1    Genesis 1, 2; Luke 1
          books: [
            { book: 1, chapters: [1, 2] },
            { book: 42, chapters: [1] },
          ],
        },
        {
          // 2	Genesis 3, 4, 5; Luke 2
          books: [
            { book: 1, chapters: [3, 4, 5] },
            { book: 42, chapters: [2] },
          ],
        },
        {
          // 3	Genesis 6, 7, 8; Luke 3
          books: [
            { book: 1, chapters: [6, 7, 8] },
            { book: 42, chapters: [3] },
          ],
        },
        {
          // 4	Genesis 9, 10, 11; Luke 4
          books: [
            { book: 1, chapters: [9, 10, 11] },
            { book: 42, chapters: [4] },
          ],
        },
        {
          // 5	Genesis 12, 13, 14; Luke 5
          books: [
            { book: 1, chapters: [12, 13, 14] },
            { book: 42, chapters: [5] },
          ],
        },
        {
          // 6	Genesis 15, 16, 17; Luke 6
          books: [
            { book: 1, chapters: [15, 16, 17] },
            { book: 42, chapters: [6] },
          ],
        },
        {
          // 7	Genesis 18, 19; Psalm 3; Luke 7
          books: [
            { book: 1, chapters: [18, 19] },
            { book: 19, chapters: [3] },
            { book: 42, chapters: [7] },
          ],
        },
        {
          // 8	Genesis 20, 21, 22; Luke 8
          books: [
            { book: 1, chapters: [20, 21, 22] },
            { book: 42, chapters: [8] },
          ],
        },
        {
          // 9	Genesis 23, 24; Luke 9
          books: [
            { book: 1, chapters: [23, 24] },
            { book: 42, chapters: [9] },
          ],
        },
        {
          // 10	Genesis 25, 26; Psalm 6; Luke 10
          books: [
            { book: 1, chapters: [25, 26] },
            { book: 19, chapters: [6] },
            { book: 42, chapters: [10] },
          ],
        },
        {
          // 11	Genesis 27, 28; Psalm 4; Luke 11
          books: [
            { book: 1, chapters: [27, 28] },
            { book: 19, chapters: [4] },
            { book: 42, chapters: [11] },
          ],
        },
        {
          // 12	Genesis 29, 30; Luke 12
          books: [
            { book: 1, chapters: [29, 30] },
            { book: 42, chapters: [12] },
          ],
        },
        {
          // 13	Genesis 31, 32, 33; Luke 13
          books: [
            { book: 1, chapters: [31, 32, 33] },
            { book: 42, chapters: [13] },
          ],
        },
        {
          // 14	Genesis 34, 35, 36; Luke 14
          books: [
            { book: 1, chapters: [34, 35, 36] },
            { book: 42, chapters: [14] },
          ],
        },
        {
          // 15	Genesis 37, 38; Psalm 7; Luke 15
          books: [
            { book: 1, chapters: [37, 38] },
            { book: 19, chapters: [7] },
            { book: 42, chapters: [15] },
          ],
        },
        {
          // 16	Genesis 39, 40, 41; Luke 16
          books: [
            { book: 1, chapters: [39, 40, 41] },
            { book: 42, chapters: [16] },
          ],
        },
        {
          // 17	Genesis 42, 43; Psalm 5; Luke 17
          books: [
            { book: 1, chapters: [42, 43] },
            { book: 19, chapters: [5] },
            { book: 42, chapters: [17] },
          ],
        },
        {
          // 18	Genesis 44, 45, 46; Luke 18
          books: [
            { book: 1, chapters: [44, 45, 46] },
            { book: 42, chapters: [18] },
          ],
        },
        {
          // 19	Genesis 47, 48; Psalm 10; Luke 19
          books: [
            { book: 1, chapters: [47, 48] },
            { book: 19, chapters: [10] },
            { book: 42, chapters: [19] },
          ],
        },
        {
          // 20	Genesis 49, 50; Psalm 8; Luke 20
          books: [
            { book: 1, chapters: [49, 50] },
            { book: 19, chapters: [8] },
            { book: 42, chapters: [20] },
          ],
        },
        {
          // 21	Exodus 1, 2; Psalm 88; Luke 21
          books: [
            { book: 2, chapters: [1, 2] },
            { book: 19, chapters: [88] },
            { book: 42, chapters: [21] },
          ],
        },
        {
          // 22	Exodus 3, 4, 5; Luke 22
          books: [
            { book: 2, chapters: [3, 4, 5] },
            { book: 42, chapters: [22] },
          ],
        },
        {
          // 23	Exodus 6, 7, 8; Luke 23
          books: [
            { book: 2, chapters: [6, 7, 8] },
            { book: 42, chapters: [23] },
          ],
        },
        {
          // 24	Exodus 9, 10, 11; Luke 24
          books: [
            { book: 2, chapters: [9, 10, 11] },
            { book: 42, chapters: [24] },
          ],
        },
        {
          // 25	Exodus 12, 13; Psalm 21; Acts 1
          books: [
            { book: 2, chapters: [12, 13] },
            { book: 19, chapters: [21] },
            { book: 44, chapters: [1] },
          ],
        },
        {
          // 26	Exodus 14, 15, 16; Acts 2
          books: [
            { book: 2, chapters: [14, 15, 16] },
            { book: 44, chapters: [2] },
          ],
        },
        {
          // 27	Exodus 17, 18, 19, 20; Acts 3
          books: [
            { book: 2, chapters: [17, 18, 19, 20] },
            { book: 44, chapters: [3] },
          ],
        },
        {
          // 28	Exodus 21, 22; Psalm 12; Acts 4
          books: [
            { book: 2, chapters: [21, 22] },
            { book: 19, chapters: [12] },
            { book: 44, chapters: [4] },
          ],
        },
        {
          // 29	Exodus 23, 24; Psalm 14; Acts 5
          books: [
            { book: 2, chapters: [23, 24] },
            { book: 19, chapters: [14] },
            { book: 44, chapters: [5] },
          ],
        },
        {
          // 30	Exodus 25, 26, 27; Acts 6
          books: [
            { book: 2, chapters: [25, 26, 27] },
            { book: 44, chapters: [6] },
          ],
        },
        {
          // 31	Exodus 28, 29; Acts 7
          books: [
            { book: 2, chapters: [28, 29] },
            { book: 44, chapters: [7] },
          ],
        },
      ],
    },
    {
      // Feb
      days: [
        // 1 Exodus 30-32; Acts 8
        {
          books: [
            { book: 2, chapters: [30, 31, 32] },
            { book: 44, chapters: [8] },
          ],
        },
        // 2 Exodus 33-34; Psalm 16; Acts 9
        {
          books: [
            { book: 2, chapters: [33, 34] },
            { book: 19, chapters: [16] },
            { book: 44, chapters: [9] },
          ],
        },
        // 3 Exodus 35-36; Acts 10
        {
          books: [
            { book: 2, chapters: [35, 36] },
            { book: 44, chapters: [10] },
          ],
        },
        // 4 Exodus 37-38; Psalm 19; Acts 11
        {
          books: [
            { book: 2, chapters: [37, 38] },
            { book: 19, chapters: [19] },
            { book: 44, chapters: [11] },
          ],
        },
        // 5 Exodus 39-40; Psalm 15; Acts 12
        {
          books: [
            { book: 2, chapters: [39, 40] },
            { book: 19, chapters: [15] },
            { book: 44, chapters: [12] },
          ],
        },
        // 6 Leviticus 1-3; Acts 13
        {
          books: [
            { book: 3, chapters: [1, 2, 3] },
            { book: 44, chapters: [13] },
          ],
        },
        // 7 Leviticus 4-6; Acts 14
        {
          books: [
            { book: 3, chapters: [4, 5, 6] },
            { book: 44, chapters: [14] },
          ],
        },
        // 8 Leviticus 7-9; Acts 15
        {
          books: [
            { book: 3, chapters: [7, 8, 9] },
            { book: 44, chapters: [15] },
          ],
        },
        // 9 Leviticus 10-12; Acts 16
        {
          books: [
            { book: 3, chapters: [10, 11, 12] },
            { book: 44, chapters: [16] },
          ],
        },
        // 10 Leviticus 13-14; Acts 17
        {
          books: [
            { book: 3, chapters: [13, 14] },
            { book: 44, chapters: [17] },
          ],
        },
        // 11 Leviticus 15-17; Acts 18
        {
          books: [
            { book: 3, chapters: [15, 16, 17] },
            { book: 44, chapters: [18] },
          ],
        },
        // 12 Leviticus 18-19; Psalm 13; Acts 19
        {
          books: [
            { book: 3, chapters: [18, 19] },
            { book: 19, chapters: [13] },
            { book: 44, chapters: [19] },
          ],
        },
        // 13 Leviticus 20-22; Acts 20
        {
          books: [
            { book: 3, chapters: [20, 21, 22] },
            { book: 44, chapters: [20] },
          ],
        },
        // 14 Leviticus 23-24; Psalm 24; Acts 21
        {
          books: [
            { book: 3, chapters: [23, 24] },
            { book: 19, chapters: [24] },
            { book: 44, chapters: [21] },
          ],
        },
        // 15 Leviticus 25; Psalms 25-26; Acts 22
        {
          books: [
            { book: 3, chapters: [25] },
            { book: 19, chapters: [25, 26] },
            { book: 44, chapters: [22] },
          ],
        },
        // 16 Leviticus 26-27; Acts 23
        {
          books: [
            { book: 3, chapters: [26, 27] },
            { book: 44, chapters: [23] },
          ],
        },
        // 17 Numbers 1-2; Acts 24
        {
          books: [
            { book: 4, chapters: [1, 2] },
            { book: 44, chapters: [24] },
          ],
        },
        // 18 Numbers 3-4; Acts 25
        {
          books: [
            { book: 4, chapters: [3, 4] },
            { book: 44, chapters: [25] },
          ],
        },
        // 19 Numbers 5-6; Psalm 22; Acts 26
        {
          books: [
            { book: 4, chapters: [5, 6] },
            { book: 19, chapters: [22] },
            { book: 44, chapters: [26] },
          ],
        },
        // 20 Numbers 7; Psalm 23; Acts 27
        {
          books: [
            { book: 4, chapters: [7] },
            { book: 19, chapters: [23] },
            { book: 44, chapters: [27] },
          ],
        },
        // 21 Numbers 8-9; Acts 28
        {
          books: [
            { book: 4, chapters: [8, 9] },
            { book: 44, chapters: [28] },
          ],
        },
        // 22 Numbers 10-11; Psalm 27; Mark 1
        {
          books: [
            { book: 4, chapters: [10, 11] },
            { book: 19, chapters: [27] },
            { book: 41, chapters: [1] },
          ],
        },
        // 23 Numbers 12-13; Psalm 90; Mark 2
        {
          books: [
            { book: 4, chapters: [12, 13] },
            { book: 19, chapters: [90] },
            { book: 41, chapters: [2] },
          ],
        },
        // 24 Numbers 14-16; Mark 3
        {
          books: [
            { book: 4, chapters: [14, 15, 16] },
            { book: 41, chapters: [3] },
          ],
        },
        // 25 Numbers 17-18; Psalm 29; Mark 4
        {
          books: [
            { book: 4, chapters: [17, 18] },
            { book: 19, chapters: [29] },
            { book: 41, chapters: [4] },
          ],
        },
        // 26 Numbers 19-20; Psalm 28; Mark 5
        {
          books: [
            { book: 4, chapters: [19, 20] },
            { book: 19, chapters: [28] },
            { book: 41, chapters: [5] },
          ],
        },
        // 27 Numbers 21-23; Mark 6-7
        {
          books: [
            { book: 4, chapters: [21, 22, 23] },
            { book: 41, chapters: [6, 7] },
          ],
        },
        // 28 Numbers 24-27; 1 Corinthians 13
        {
          books: [
            { book: 4, chapters: [24, 25, 26, 27] },
            { book: 46, chapters: [13] },
          ],
        },
        // 29 Matthew 5-7
        {
          books: [{ book: 40, chapters: [5, 6, 7] }],
        },
      ],
    },
    {
      // Mar
      days: [
        // 1 Numbers 28-29; Mark 8
        {
          books: [
            { book: 4, chapters: [28, 29] },
            { book: 41, chapters: [8] },
          ],
        },
        // 2 Numbers 30-31; Mark 9
        {
          books: [
            { book: 4, chapters: [30, 31] },
            { book: 41, chapters: [9] },
          ],
        },
        // 3 Numbers 32-33; Mark 10
        {
          books: [
            { book: 4, chapters: [32, 33] },
            { book: 41, chapters: [10] },
          ],
        },
        // 4 Numbers 34-36; Mark 11
        {
          books: [
            { book: 4, chapters: [34, 35, 36] },
            { book: 41, chapters: [11] },
          ],
        },
        // 5 Deuteronomy 1-2; Mark 12
        {
          books: [
            { book: 5, chapters: [1, 2] },
            { book: 41, chapters: [12] },
          ],
        },
        // 6 Deuteronomy 3-4; Psalm 36; Mark 13
        {
          books: [
            { book: 5, chapters: [3, 4] },
            { book: 19, chapters: [36] },
            { book: 41, chapters: [13] },
          ],
        },
        // 7 Deuteronomy 5-6; Psalm 43; Mark 14
        {
          books: [
            { book: 5, chapters: [5, 6] },
            { book: 19, chapters: [43] },
            { book: 41, chapters: [14] },
          ],
        },
        // 8 Deuteronomy 7-9; Mark 15
        {
          books: [
            { book: 5, chapters: [7, 8, 9] },
            { book: 41, chapters: [15] },
          ],
        },
        // 9 Deuteronomy 10-12; Mark 16
        {
          books: [
            { book: 5, chapters: [10, 11, 12] },
            { book: 41, chapters: [16] },
          ],
        },
        // 10 Deuteronomy 13-15; Galatians 1
        {
          books: [
            { book: 5, chapters: [13, 14, 15] },
            { book: 48, chapters: [1] },
          ],
        },
        // 11 Deuteronomy 16-18; Psalm 38; Galatians 2
        {
          books: [
            { book: 5, chapters: [16, 17, 18] },
            { book: 19, chapters: [38] },
            { book: 48, chapters: [2] },
          ],
        },
        // 12 Deuteronomy 19-21; Galatians 3
        {
          books: [
            { book: 5, chapters: [19, 20, 21] },
            { book: 48, chapters: [3] },
          ],
        },
        // 13 Deuteronomy 22-24; Galatians 4
        {
          books: [
            { book: 5, chapters: [22, 23, 24] },
            { book: 48, chapters: [4] },
          ],
        },
        // 14 Deuteronomy 25-27; Galatians 5
        {
          books: [
            { book: 5, chapters: [25, 26, 27] },
            { book: 48, chapters: [5] },
          ],
        },
        // 15 Deuteronomy 28-29; Galatians 6
        {
          books: [
            { book: 5, chapters: [28, 29] },
            { book: 48, chapters: [6] },
          ],
        },
        // 16 Deuteronomy 30-31; Psalm 40; 1 Corinthians 1
        {
          books: [
            { book: 5, chapters: [30, 31] },
            { book: 19, chapters: [40] },
            { book: 46, chapters: [1] },
          ],
        },
        // 17 Deuteronomy 32-34; 1 Corinthians 2
        {
          books: [
            { book: 5, chapters: [32, 33, 34] },
            { book: 46, chapters: [2] },
          ],
        },
        // 18 Joshua 1-2; Psalm 37; 1 Corinthians 3
        {
          books: [
            { book: 6, chapters: [1, 2] },
            { book: 19, chapters: [37] },
            { book: 46, chapters: [3] },
          ],
        },
        // 19 Joshua 3-6; 1 Corinthians 4
        {
          books: [
            { book: 6, chapters: [3, 4, 5, 6] },
            { book: 46, chapters: [4] },
          ],
        },
        // 20 Joshua 7-8; Psalm 69; 1 Corinthians 5
        {
          books: [
            { book: 6, chapters: [7, 8] },
            { book: 19, chapters: [69] },
            { book: 46, chapters: [5] },
          ],
        },
        // 21 Joshua 9-11; 1 Corinthians 6
        {
          books: [
            { book: 6, chapters: [9, 10, 11] },
            { book: 46, chapters: [6] },
          ],
        },
        // 22 Joshua 12-14; 1 Corinthians 7
        {
          books: [
            { book: 6, chapters: [12, 13, 14] },
            { book: 46, chapters: [7] },
          ],
        },
        // 23 Joshua 15-17; 1 Corinthians 8
        {
          books: [
            { book: 6, chapters: [15, 16, 17] },
            { book: 46, chapters: [8] },
          ],
        },
        // 24 Joshua 18-20; 1 Corinthians 9
        {
          books: [
            { book: 6, chapters: [18, 19, 20] },
            { book: 46, chapters: [9] },
          ],
        },
        // 25 Joshua 21-22; Psalm 47; 1 Corinthians 10
        {
          books: [
            { book: 6, chapters: [21, 22] },
            { book: 19, chapters: [47] },
            { book: 46, chapters: [10] },
          ],
        },
        // 26 Joshua 23-24; Psalm 44; 1 Corinthians 11
        {
          books: [
            { book: 6, chapters: [23, 24] },
            { book: 19, chapters: [44] },
            { book: 46, chapters: [11] },
          ],
        },
        // 27 Judges 1-3; 1 Corinthians 12
        {
          books: [
            { book: 7, chapters: [1, 2, 3] },
            { book: 46, chapters: [12] },
          ],
        },
        // 28 Judges 4-5; Psalms 39, 41; 1 Corinthians 13
        {
          books: [
            { book: 7, chapters: [4, 5] },
            { book: 19, chapters: [39, 41] },
            { book: 46, chapters: [13] },
          ],
        },
        // 29 Judges 6-7; Psalm 52; 1 Corinthians 14
        {
          books: [
            { book: 7, chapters: [6, 7] },
            { book: 19, chapters: [52] },
            { book: 46, chapters: [14] },
          ],
        },
        // 30 Judges 8; Psalm 42; 1 Corinthians 15
        {
          books: [
            { book: 7, chapters: [8] },
            { book: 19, chapters: [42] },
            { book: 46, chapters: [15] },
          ],
        },
        // 31 Judges 9-10; Psalm 49; 1 Corinthians 16
        {
          books: [
            { book: 7, chapters: [9, 10] },
            { book: 19, chapters: [49] },
            { book: 46, chapters: [16] },
          ],
        },
      ],
    },
    {
      // Apr
      days: [
        // 01 Judges 11-12; Psalm 50; 2 Corinthians 1
        {
          books: [
            { book: 7, chapters: [11, 12] },
            { book: 19, chapters: [50] },
            { book: 47, chapters: [1] },
          ],
        },
        // 02 Judges 13-16; 2 Corinthians 2
        {
          books: [
            { book: 7, chapters: [13, 14, 15, 16] },
            { book: 47, chapters: [2] },
          ],
        },
        // 03 Judges 17-18; Psalm 89; 2 Corinthians 3
        {
          books: [
            { book: 7, chapters: [17, 18] },
            { book: 19, chapters: [89] },
            { book: 47, chapters: [3] },
          ],
        },
        // 04 Judges 19-21; 2 Corinthians 4
        {
          books: [
            { book: 7, chapters: [19, 20, 21] },
            { book: 47, chapters: [4] },
          ],
        },
        // 05 Ruth 1-2; Psalms 53, 61; 2 Corinthians 5
        {
          books: [
            { book: 8, chapters: [1, 2] },
            { book: 19, chapters: [53] },
            { book: 47, chapters: [5] },
          ],
        },
        // 06 Ruth 3-4; Psalm 64-65; 2 Corinthians 6
        {
          books: [
            { book: 8, chapters: [3, 4] },
            { book: 19, chapters: [64, 65] },
            { book: 47, chapters: [6] },
          ],
        },
        // 07 1 Samuel 1-2; Psalm 66; 2 Corinthians 7
        {
          books: [
            { book: 9, chapters: [1, 2] },
            { book: 19, chapters: [66] },
            { book: 47, chapters: [7] },
          ],
        },
        // 08 1 Samuel 3-5; Psalm 77; 2 Corinthians 8
        {
          books: [
            { book: 9, chapters: [3, 4, 5] },
            { book: 19, chapters: [77] },
            { book: 47, chapters: [8] },
          ],
        },
        // 09 1 Samuel 6-7; Psalm 72; 2 Corinthians 9
        {
          books: [
            { book: 9, chapters: [6, 7] },
            { book: 19, chapters: [72] },
            { book: 47, chapters: [9] },
          ],
        },
        // 10 1 Samuel 8-10; 2 Corinthians 10
        {
          books: [
            { book: 9, chapters: [8, 9, 10] },
            { book: 47, chapters: [10] },
          ],
        },
        // 11 1 Samuel 11-12; 1 Chronicles 1; 2 Corinthians 11
        {
          books: [
            { book: 9, chapters: [11, 12] },
            { book: 13, chapters: [1] },
            { book: 47, chapters: [11] },
          ],
        },
        // 12 1 Samuel 13; 1 Chronicles 2-3; 2 Corinthians 12
        {
          books: [
            { book: 9, chapters: [13] },
            { book: 13, chapters: [2, 3] },
            { book: 47, chapters: [12] },
          ],
        },
        // 13 1 Samuel 14; 1 Chronicles 4; 2 Corinthians 13
        {
          books: [
            { book: 9, chapters: [14] },
            { book: 13, chapters: [4] },
            { book: 47, chapters: [13] },
          ],
        },
        // 14 1 Samuel 15-16; 1 Chronicles 5; Matthew 1
        {
          books: [
            { book: 9, chapters: [15, 16] },
            { book: 13, chapters: [5] },
            { book: 40, chapters: [1] },
          ],
        },
        // 15 1 Samuel 17; Psalm 9; Matthew 2
        {
          books: [
            { book: 9, chapters: [17] },
            { book: 19, chapters: [9] },
            { book: 40, chapters: [2] },
          ],
        },
        // 16 1 Samuel 18; 1 Chronicles 6; Psalm 11; Matthew 3
        {
          books: [
            { book: 9, chapters: [18] },
            { book: 13, chapters: [6] },
            { book: 19, chapters: [11] },
            { book: 40, chapters: [3] },
          ],
        },
        // 17 1 Samuel 19; 1 Chronicles 7; Psalm 59; Matthew 4
        {
          books: [
            { book: 9, chapters: [19] },
            { book: 13, chapters: [7] },
            { book: 19, chapters: [59] },
            { book: 40, chapters: [4] },
          ],
        },
        // 18 1 Samuel 20-21; Psalm 34, Matthew 5
        {
          books: [
            { book: 9, chapters: [20, 21] },
            { book: 19, chapters: [34] },
            { book: 40, chapters: [5] },
          ],
        },
        // 19 1 Samuel 22; Psalms 17, 35; Matthew 6
        {
          books: [
            { book: 9, chapters: [22] },
            { book: 19, chapters: [17, 35] },
            { book: 40, chapters: [6] },
          ],
        },
        // 20 1 Samuel 23; Psalms 31, 54; Matthew 7
        {
          books: [
            { book: 9, chapters: [23] },
            { book: 19, chapters: [31, 54] },
            { book: 40, chapters: [7] },
          ],
        },
        // 21 1 Samuel 24; Psalms 57-58; 1 Chronicles 8; Matthew 8
        {
          books: [
            { book: 9, chapters: [24] },
            { book: 19, chapters: [57, 58] },
            { book: 13, chapters: [8] },
            { book: 40, chapters: [8] },
          ],
        },
        // 22 1 Samuel 25-26; Psalm 63; Matthew 9
        {
          books: [
            { book: 9, chapters: [25, 26] },
            { book: 19, chapters: [63] },
            { book: 40, chapters: [9] },
          ],
        },
        // 23 1 Samuel 27; Psalm 141; 1 Chronicles 9; Matthew 10
        {
          books: [
            { book: 9, chapters: [27] },
            { book: 19, chapters: [141] },
            { book: 13, chapters: [9] },
            { book: 40, chapters: [10] },
          ],
        },
        // 24 1 Samuel 28-29; Psalm 109; Matthew 11
        {
          books: [
            { book: 9, chapters: [28, 29] },
            { book: 19, chapters: [109] },
            { book: 40, chapters: [11] },
          ],
        },
        // 25 1 Samuel 30-31; 1 Chronicles 10; Matthew 12
        {
          books: [
            { book: 9, chapters: [30, 31] },
            { book: 13, chapters: [10] },
            { book: 40, chapters: [12] },
          ],
        },
        // 26 2 Samuel 1; Psalm 140; Matthew 13
        {
          books: [
            { book: 10, chapters: [1] },
            { book: 19, chapters: [140] },
            { book: 40, chapters: [13] },
          ],
        },
        // 27 2 Samuel 2; 1 Chronicles 11; Psalm 142; Matthew 14
        {
          books: [
            { book: 10, chapters: [2] },
            { book: 13, chapters: [11] },
            { book: 19, chapters: [142] },
            { book: 40, chapters: [14] },
          ],
        },
        // 28 2 Samuel 3; 1 Chronicles 12; Matthew 15
        {
          books: [
            { book: 10, chapters: [3] },
            { book: 13, chapters: [12] },
            { book: 40, chapters: [15] },
          ],
        },
        // 29 2 Samuel 4-5; Psalm 139; Matthew 16
        {
          books: [
            { book: 10, chapters: [4, 5] },
            { book: 19, chapters: [139] },
            { book: 40, chapters: [16] },
          ],
        },
        // 30 2 Samuel 6; 1 Chronicles 13; Psalm 68; Matthew 17
        {
          books: [
            { book: 10, chapters: [6] },
            { book: 13, chapters: [13] },
            { book: 19, chapters: [68] },
            { book: 40, chapters: [17] },
          ],
        },
      ],
    },
    {
      // May
      days: [
        // 1. 1 Chronicles 14-15; Psalm 132; Matthew 18
        {
          books: [
            { book: 13, chapters: [14, 15] },
            { book: 19, chapters: [132] },
            { book: 40, chapters: [18] },
          ],
        },
        // 2. 1 Chronicles 16; Psalm 106; Matthew 19
        {
          books: [
            { book: 13, chapters: [16] },
            { book: 19, chapters: [106] },
            { book: 40, chapters: [19] },
          ],
        },
        // 3. 2 Samuel 7; 1 Chronicles 17; Psalm 2; Matthew 20
        {
          books: [
            { book: 10, chapters: [7] },
            { book: 13, chapters: [17] },
            { book: 19, chapters: [2] },
            { book: 40, chapters: [20] },
          ],
        },
        // 4. 2 Samuel 8-9; 1 Chronicles 18-19; Matthew 21
        {
          books: [
            { book: 10, chapters: [8, 9] },
            { book: 13, chapters: [18, 19] },
            { book: 40, chapters: [21] },
          ],
        },
        // 5. 2 Samuel 10; 1 Chronicles 20; Psalm 20; Matthew 22
        {
          books: [
            { book: 10, chapters: [10] },
            { book: 13, chapters: [20] },
            { book: 19, chapters: [20] },
            { book: 40, chapters: [22] },
          ],
        },
        // 6. 2 Samuel 11-12; Psalm 51; Matthew 23
        {
          books: [
            { book: 10, chapters: [11, 12] },
            { book: 19, chapters: [51] },
            { book: 40, chapters: [23] },
          ],
        },
        // 7. 2 Samuel 13-14; Matthew 24
        {
          books: [
            { book: 10, chapters: [13, 14] },
            { book: 40, chapters: [24] },
          ],
        },
        // 8. 2 Samuel 15-16; Psalm 32; Matthew 25
        {
          books: [
            { book: 10, chapters: [15, 16] },
            { book: 19, chapters: [32] },
            { book: 40, chapters: [25] },
          ],
        },
        // 9. 2 Samuel 17; Psalm 71; Matthew 26
        {
          books: [
            { book: 10, chapters: [17] },
            { book: 19, chapters: [71] },
            { book: 40, chapters: [26] },
          ],
        },
        // 10. 2 Samuel 18; Psalm 56; Matthew 27
        {
          books: [
            { book: 10, chapters: [18] },
            { book: 19, chapters: [56] },
            { book: 40, chapters: [27] },
          ],
        },
        // 11. 2 Samuel 19-20; Psalm 55; Matthew 28
        {
          books: [
            { book: 10, chapters: [19, 20] },
            { book: 19, chapters: [55] },
            { book: 40, chapters: [28] },
          ],
        },
        // 12. 2 Samuel 21-23; 1 Thessalonians 1
        {
          books: [
            { book: 10, chapters: [21, 22, 23] },
            { book: 52, chapters: [1] },
          ],
        },
        // 13. 2 Samuel 24; 1 Chronicles 21; Psalm 30; 1 Thessalonians 2
        {
          books: [
            { book: 10, chapters: [24] },
            { book: 13, chapters: [21] },
            { book: 19, chapters: [30] },
            { book: 52, chapters: [2] },
          ],
        },
        // 14. 1 Chronicles 22-24; 1 Thessalonians 3
        {
          books: [
            { book: 13, chapters: [22, 23, 24] },
            { book: 52, chapters: [3] },
          ],
        },
        // 15. 1 Chronicles 25-27; 1 Thessalonians 4
        {
          books: [
            { book: 13, chapters: [25, 26, 27] },
            { book: 52, chapters: [4] },
          ],
        },
        // 16. 1 Kings 1; 1 Chronicles 28; Psalm 91; 1 Thessalonians 5
        {
          books: [
            { book: 11, chapters: [1] },
            { book: 13, chapters: [28] },
            { book: 19, chapters: [91] },
            { book: 52, chapters: [5] },
          ],
        },
        // 17. 1 Kings 2; 1 Chronicles 29; Psalm 95; 2 Thessalonians 1
        {
          books: [
            { book: 11, chapters: [2] },
            { book: 13, chapters: [29] },
            { book: 19, chapters: [95] },
            { book: 53, chapters: [1] },
          ],
        },
        // 18. 1 Kings 3; 2 Chronicles 1; Psalm 78; 2 Thessalonians 2
        {
          books: [
            { book: 11, chapters: [3] },
            { book: 14, chapters: [1] },
            { book: 19, chapters: [78] },
            { book: 53, chapters: [2] },
          ],
        },
        // 19. 1 Kings 4-5; 2 Chronicles 2; Psalm 101; 2 Thessalonians 3
        {
          books: [
            { book: 11, chapters: [4, 5] },
            { book: 14, chapters: [2] },
            { book: 19, chapters: [101] },
            { book: 53, chapters: [3] },
          ],
        },
        // 20. 1 Kings 6; 2 Chronicles 3; Psalm 97; Romans 1
        {
          books: [
            { book: 11, chapters: [6] },
            { book: 14, chapters: [3] },
            { book: 19, chapters: [97] },
            { book: 45, chapters: [1] },
          ],
        },
        // 21. 1 Kings 7; 2 Chronicles 4; Psalm 98; Romans 2
        {
          books: [
            { book: 11, chapters: [7] },
            { book: 14, chapters: [4] },
            { book: 19, chapters: [98] },
            { book: 45, chapters: [2] },
          ],
        },
        // 22. 1 Kings 8; 2 Chronicles 5; Psalm 99; Romans 3
        {
          books: [
            { book: 11, chapters: [8] },
            { book: 14, chapters: [5] },
            { book: 19, chapters: [99] },
            { book: 45, chapters: [3] },
          ],
        },
        // 23. 2 Chronicles 6-7; Psalm 135; Romans 4
        {
          books: [
            { book: 14, chapters: [6, 7] },
            { book: 19, chapters: [135] },
            { book: 45, chapters: [4] },
          ],
        },
        // 24. 1 Kings 9; 2 Chronicles 8; Psalm 136; Romans 5
        {
          books: [
            { book: 11, chapters: [9] },
            { book: 14, chapters: [8] },
            { book: 19, chapters: [136] },
            { book: 45, chapters: [5] },
          ],
        },
        // 25. 1 Kings 10-11; 2 Chronicles 9; Romans 6
        {
          books: [
            { book: 11, chapters: [10, 11] },
            { book: 14, chapters: [9] },
            { book: 45, chapters: [6] },
          ],
        },
        // 26. Proverbs 1-3; Romans 7
        {
          books: [
            { book: 20, chapters: [1, 2, 3] },
            { book: 45, chapters: [7] },
          ],
        },
        // 27. Proverbs 4-6; Romans 8
        {
          books: [
            { book: 20, chapters: [4, 5, 6] },
            { book: 45, chapters: [8] },
          ],
        },
        // 28. Proverbs 7-9; Romans 9
        {
          books: [
            { book: 20, chapters: [7, 8, 9] },
            { book: 45, chapters: [9] },
          ],
        },
        // 29. Proverbs 10-12; Romans 10
        {
          books: [
            { book: 20, chapters: [10, 11, 12] },
            { book: 45, chapters: [10] },
          ],
        },
        // 30. Proverbs 13-15; Romans 11
        {
          books: [
            { book: 20, chapters: [13, 14, 15] },
            { book: 45, chapters: [11] },
          ],
        },
        // 31. Proverbs 16-18; Romans 12
        {
          books: [
            { book: 20, chapters: [16, 17, 18] },
            { book: 45, chapters: [12] },
          ],
        },
      ],
    },
    {
      // Jun
      days: [
        // 1. Proverbs 19-21; Romans 13
        {
          books: [
            { book: 20, chapters: [19, 20, 21] },
            { book: 45, chapters: [13] },
          ],
        },
        // 2. Proverbs 22-24; Romans 14
        {
          books: [
            { book: 20, chapters: [22, 23, 24] },
            { book: 45, chapters: [14] },
          ],
        },
        // 3. Proverbs 25-27; Romans 15
        {
          books: [
            { book: 20, chapters: [25, 26, 27] },
            { book: 45, chapters: [15] },
          ],
        },
        // 4. Proverbs 28-29; Psalm 60; Romans 16
        {
          books: [
            { book: 20, chapters: [28, 29] },
            { book: 19, chapters: [60] },
            { book: 45, chapters: [16] },
          ],
        },
        // 5. Proverbs 30-31; Psalm 33; Ephesians 1
        {
          books: [
            { book: 20, chapters: [30, 31] },
            { book: 19, chapters: [33] },
            { book: 49, chapters: [1] },
          ],
        },
        // 6. Ecclesiastes 1-3; Psalm 45; Ephesians 2
        {
          books: [
            { book: 21, chapters: [1, 2, 3] },
            { book: 19, chapters: [45] },
            { book: 49, chapters: [2] },
          ],
        },
        // 7. Ecclesiastes 4-6; Psalm 18; Ephesians 3
        {
          books: [
            { book: 21, chapters: [4, 5, 6] },
            { book: 19, chapters: [18] },
            { book: 49, chapters: [3] },
          ],
        },
        // 8. Ecclesiastes 7-9; Ephesians 4
        {
          books: [
            { book: 21, chapters: [7, 8, 9] },
            { book: 49, chapters: [4] },
          ],
        },
        // 9. Ecclesiastes 10-12; Psalm 94; Ephesians 5
        {
          books: [
            { book: 21, chapters: [10, 11, 12] },
            { book: 19, chapters: [94] },
            { book: 49, chapters: [5] },
          ],
        },
        // 10. Song 1-4; Ephesians 6
        {
          books: [
            { book: 22, chapters: [1, 2, 3, 4] },
            { book: 49, chapters: [6] },
          ],
        },
        // 11. Song 5-8; Philippians 1
        {
          books: [
            { book: 22, chapters: [5, 6, 7, 8] },
            { book: 50, chapters: [1] },
          ],
        },
        // 12. 1 Kings 12; 2 Chronicles 10-11; Philippians 2
        {
          books: [
            { book: 11, chapters: [12] },
            { book: 14, chapters: [10, 11] },
            { book: 50, chapters: [2] },
          ],
        },
        // 13. 1 Kings 13-14; 2 Chronicles 12; Philippians 3
        {
          books: [
            { book: 11, chapters: [13, 14] },
            { book: 14, chapters: [12] },
            { book: 50, chapters: [3] },
          ],
        },
        // 14. 1 Kings 15; 2 Chronicles 13-14; Philippians 4
        {
          books: [
            { book: 11, chapters: [15] },
            { book: 14, chapters: [13, 14] },
            { book: 50, chapters: [4] },
          ],
        },
        // 15. 1 Kings 16; 2 Chronicles 15-16; Colossians 1
        {
          books: [
            { book: 11, chapters: [16] },
            { book: 14, chapters: [15, 16] },
            { book: 51, chapters: [1] },
          ],
        },
        // 16. 1 Kings 17-19; Colossians 2
        {
          books: [
            { book: 11, chapters: [17, 18, 19] },
            { book: 51, chapters: [2] },
          ],
        },
        // 17. 1 Kings 20-21; 2 Chronicles 17; Colossians 3
        {
          books: [
            { book: 11, chapters: [20, 21] },
            { book: 14, chapters: [17] },
            { book: 51, chapters: [3] },
          ],
        },
        // 18. 1 Kings 22; 2 Chronicles 18-19; Colossians 4
        {
          books: [
            { book: 11, chapters: [22] },
            { book: 14, chapters: [18, 19] },
            { book: 51, chapters: [4] },
          ],
        },
        // 19. 2 Kings 1-3; Psalm 82; 1 Timothy 1
        {
          books: [
            { book: 12, chapters: [1, 2, 3] },
            { book: 19, chapters: [82] },
            { book: 54, chapters: [1] },
          ],
        },
        // 20. 2 Kings 4-5; Psalm 83; 1 Timothy 2
        {
          books: [
            { book: 12, chapters: [4, 5] },
            { book: 19, chapters: [83] },
            { book: 54, chapters: [2] },
          ],
        },
        // 21. 2 Kings 6-7; 2 Chronicles 20; 1 Timothy 3
        {
          books: [
            { book: 12, chapters: [6, 7] },
            { book: 14, chapters: [20] },
            { book: 54, chapters: [3] },
          ],
        },
        // 22. 2 Kings 8-9; 2 Chronicles 21; 1 Timothy 4
        {
          books: [
            { book: 12, chapters: [8, 9] },
            { book: 14, chapters: [21] },
            { book: 54, chapters: [4] },
          ],
        },
        // 23. 2 Kings 10; 2 Chronicles 22-23; 1 Timothy 5
        {
          books: [
            { book: 12, chapters: [10] },
            { book: 14, chapters: [22, 23] },
            { book: 54, chapters: [5] },
          ],
        },
        // 24. 2 Kings 11-12; 2 Chronicles 24; 1 Timothy 6
        {
          books: [
            { book: 12, chapters: [11, 12] },
            { book: 14, chapters: [24] },
            { book: 54, chapters: [6] },
          ],
        },
        // 25. Joel 1-3; 2 Timothy 1
        {
          books: [
            { book: 29, chapters: [1, 2, 3] },
            { book: 55, chapters: [1] },
          ],
        },
        // 26. Jonah 1-4; 2 Timothy 2
        {
          books: [
            { book: 32, chapters: [1, 2, 3, 4] },
            { book: 55, chapters: [2] },
          ],
        },
        // 27. 2 Kings 13-14; 2 Chronicles 25; 2 Timothy 3
        {
          books: [
            { book: 12, chapters: [13, 14] },
            { book: 14, chapters: [25] },
            { book: 55, chapters: [3] },
          ],
        },
        // 28. Amos 1-3; Psalm 80; 2 Timothy 4
        {
          books: [
            { book: 30, chapters: [1, 2, 3] },
            { book: 19, chapters: [80] },
            { book: 55, chapters: [4] },
          ],
        },
        // 29. Amos 4-6; Psalms 86, 87; Titus 1
        {
          books: [
            { book: 30, chapters: [4, 5, 6] },
            { book: 19, chapters: [86, 87] },
            { book: 56, chapters: [1] },
          ],
        },
        // 30. Amos 7-9; Psalm 104; Titus 2
        {
          books: [
            { book: 30, chapters: [7, 8, 9] },
            { book: 19, chapters: [104] },
            { book: 56, chapters: [2] },
          ],
        },
      ],
    },
    {
      // Jul
      days: [
        // 1. Isaiah 1-3; Titus 3
        {
          books: [
            { book: 23, chapters: [1, 2, 3] },
            { book: 56, chapters: [3] },
          ],
        },
        // 2. Isaiah 4-5; Psalms 115-116; Jude
        {
          books: [
            { book: 23, chapters: [4, 5] },
            { book: 19, chapters: [115, 116] },
            { book: 65, chapters: [1] },
          ],
        },
        // 3. Isaiah 6-7; 2 Chronicles 26-27; Philemon
        {
          books: [
            { book: 23, chapters: [6, 7] },
            { book: 14, chapters: [26, 27] },
            { book: 57, chapters: [1] },
          ],
        },
        // 4. 2 Kings 15-16; Hosea 1; Hebrews 1
        {
          books: [
            { book: 12, chapters: [15, 16] },
            { book: 28, chapters: [1] },
            { book: 58, chapters: [1] },
          ],
        },
        // 5. Hosea 2-5; Hebrews 2
        {
          books: [
            { book: 28, chapters: [2, 3, 4, 5] },
            { book: 58, chapters: [2] },
          ],
        },
        // 6. Hosea 6-9; Hebrews 3
        {
          books: [
            { book: 28, chapters: [6, 7, 8, 9] },
            { book: 58, chapters: [3] },
          ],
        },
        // 7. Hosea 10-12; Psalm 73; Hebrews 4
        {
          books: [
            { book: 28, chapters: [10, 11, 12] },
            { book: 19, chapters: [73] },
            { book: 58, chapters: [4] },
          ],
        },
        // 8. Hosea 13-14; Psalms 100, 102; Hebrews 5
        {
          books: [
            { book: 28, chapters: [13, 14] },
            { book: 19, chapters: [100, 102] },
            { book: 58, chapters: [5] },
          ],
        },
        // 9. Micah 1-4; Hebrews 6
        {
          books: [
            { book: 33, chapters: [1, 2, 3, 4] },
            { book: 58, chapters: [6] },
          ],
        },
        // 10. Micah 5-7; Hebrews 7
        {
          books: [
            { book: 33, chapters: [5, 6, 7] },
            { book: 58, chapters: [7] },
          ],
        },
        // 11. Isaiah 8-10; Hebrews 8
        {
          books: [
            { book: 23, chapters: [8, 9, 10] },
            { book: 58, chapters: [8] },
          ],
        },
        // 12. Isaiah 11-14; Hebrews 9
        {
          books: [
            { book: 23, chapters: [11, 12, 13, 14] },
            { book: 58, chapters: [9] },
          ],
        },
        // 13. Isaiah 15-18; Hebrews 10
        {
          books: [
            { book: 23, chapters: [15, 16, 17, 18] },
            { book: 58, chapters: [10] },
          ],
        },
        // 14. Isaiah 19-21; Hebrews 11
        {
          books: [
            { book: 23, chapters: [19, 20, 21] },
            { book: 58, chapters: [11] },
          ],
        },
        // 15. Isaiah 22-24; Hebrews 12
        {
          books: [
            { book: 23, chapters: [22, 23, 24] },
            { book: 58, chapters: [12] },
          ],
        },
        // 16. Isaiah 25-28; Hebrews 13
        {
          books: [
            { book: 23, chapters: [25, 26, 27, 28] },
            { book: 58, chapters: [13] },
          ],
        },
        // 17. Isaiah 29-31; James 1
        {
          books: [
            { book: 23, chapters: [29, 30, 31] },
            { book: 59, chapters: [1] },
          ],
        },
        // 18. Isaiah 32-35; James 2
        {
          books: [
            { book: 23, chapters: [32, 33, 34, 35] },
            { book: 59, chapters: [2] },
          ],
        },
        // 19. 2 Kings 17; 2 Chronicles 28; Psalm 46; James 3
        {
          books: [
            { book: 12, chapters: [17] },
            { book: 14, chapters: [28] },
            { book: 19, chapters: [46] },
            { book: 59, chapters: [3] },
          ],
        },
        // 20. 2 Chronicles 29-31; James 4
        {
          books: [
            { book: 14, chapters: [29, 30, 31] },
            { book: 59, chapters: [4] },
          ],
        },
        // 21. 2 Kings 18-19; 2 Chronicles 32; James 5
        {
          books: [
            { book: 12, chapters: [18, 19] },
            { book: 14, chapters: [32] },
            { book: 59, chapters: [5] },
          ],
        },
        // 22. Isaiah 36-37; Psalm 76; 1 Peter 1
        {
          books: [
            { book: 23, chapters: [36, 37] },
            { book: 19, chapters: [76] },
            { book: 60, chapters: [1] },
          ],
        },
        // 23. 2 Kings 20; Isaiah 38-39; Psalm 75; 1 Peter 2
        {
          books: [
            { book: 12, chapters: [20] },
            { book: 23, chapters: [38, 39] },
            { book: 19, chapters: [75] },
            { book: 60, chapters: [2] },
          ],
        },
        // 24. Isaiah 40-42; 1 Peter 3
        {
          books: [
            { book: 23, chapters: [40, 41, 42] },
            { book: 60, chapters: [3] },
          ],
        },
        // 25. Isaiah 43-45; 1 Peter 4
        {
          books: [
            { book: 23, chapters: [43, 44, 45] },
            { book: 60, chapters: [4] },
          ],
        },
        // 26. Isaiah 46-49; 1 Peter 5
        {
          books: [
            { book: 23, chapters: [46, 47, 48, 49] },
            { book: 60, chapters: [5] },
          ],
        },
        // 27. Isaiah 50-52; Psalm 92; 2 Peter 1
        {
          books: [
            { book: 23, chapters: [50, 51, 52] },
            { book: 19, chapters: [92] },
            { book: 61, chapters: [1] },
          ],
        },
        // 28. Isaiah 53-56; 2 Peter 2
        {
          books: [
            { book: 23, chapters: [53, 54, 55, 56] },
            { book: 61, chapters: [2] },
          ],
        },
        // 29. Isaiah 57-59; Psalm 103; 2 Peter 3
        {
          books: [
            { book: 23, chapters: [57, 58, 59] },
            { book: 19, chapters: [103] },
            { book: 61, chapters: [3] },
          ],
        },
        // 30. Isaiah 60-62; John 1
        {
          books: [
            { book: 23, chapters: [60, 61, 62] },
            { book: 43, chapters: [1] },
          ],
        },
        // 31. Isaiah 63-64; Psalm 107; John 2
        {
          books: [
            { book: 23, chapters: [63, 64] },
            { book: 19, chapters: [107] },
            { book: 43, chapters: [2] },
          ],
        },
      ],
    },
    {
      // Aug
      days: [
        // 1. Isaiah 65-66; Psalm 62; John 3
        {
          books: [
            { book: 23, chapters: [65, 66] },
            { book: 19, chapters: [62] },
            { book: 43, chapters: [3] },
          ],
        },
        // 2. 2 Kings 21; 2 Chronicles 33; John 4
        {
          books: [
            { book: 12, chapters: [21] },
            { book: 14, chapters: [33] },
            { book: 43, chapters: [4] },
          ],
        },
        // 3. Nahum 1-3; John 5
        {
          books: [
            { book: 34, chapters: [1, 2, 3] },
            { book: 43, chapters: [5] },
          ],
        },
        // 4. 2 Kings 22; 2 Chronicles 34; John 6
        {
          books: [
            { book: 12, chapters: [22] },
            { book: 14, chapters: [34] },
            { book: 43, chapters: [6] },
          ],
        },
        // 5. 2 Kings 23; 2 Chronicles 35; John 7
        {
          books: [
            { book: 12, chapters: [23] },
            { book: 14, chapters: [35] },
            { book: 43, chapters: [7] },
          ],
        },
        // 6. Habakkuk 1-3; John 8
        {
          books: [
            { book: 35, chapters: [1, 2, 3] },
            { book: 43, chapters: [8] },
          ],
        },
        // 7. Zephaniah 1-3; John 9
        {
          books: [
            { book: 36, chapters: [1, 2, 3] },
            { book: 43, chapters: [9] },
          ],
        },
        // 8. Jeremiah 1-2; John 10
        {
          books: [
            { book: 24, chapters: [1, 2] },
            { book: 43, chapters: [10] },
          ],
        },
        // 9. Jeremiah 3-4; John 11
        {
          books: [
            { book: 24, chapters: [3, 4] },
            { book: 43, chapters: [11] },
          ],
        },
        // 10. Jeremiah 5-6; John 12
        {
          books: [
            { book: 24, chapters: [5, 6] },
            { book: 43, chapters: [12] },
          ],
        },
        // 11. Jeremiah 7-9; John 13
        {
          books: [
            { book: 24, chapters: [7, 8, 9] },
            { book: 43, chapters: [13] },
          ],
        },
        // 12. Jeremiah 10-12; John 14
        {
          books: [
            { book: 24, chapters: [10, 11, 12] },
            { book: 43, chapters: [14] },
          ],
        },
        // 13. Jeremiah 13-15; John 15
        {
          books: [
            { book: 24, chapters: [13, 14, 15] },
            { book: 43, chapters: [15] },
          ],
        },
        // 14. Jeremiah 16-17; Psalm 96; John 16
        {
          books: [
            { book: 24, chapters: [16, 17] },
            { book: 19, chapters: [96] },
            { book: 43, chapters: [16] },
          ],
        },
        // 15. Jeremiah 18-20; Psalm 93; John 17
        {
          books: [
            { book: 24, chapters: [18, 19, 20] },
            { book: 19, chapters: [93] },
            { book: 43, chapters: [17] },
          ],
        },
        // 16. 2 Kings 24; Jeremiah 22; Psalm 112; John 18
        {
          books: [
            { book: 12, chapters: [24] },
            { book: 24, chapters: [22] },
            { book: 19, chapters: [112] },
            { book: 43, chapters: [18] },
          ],
        },
        // 17. Jeremiah 23, 25; John 19
        {
          books: [
            { book: 24, chapters: [23, 25] },
            { book: 43, chapters: [19] },
          ],
        },
        // 18. Jeremiah 26, 35-36; John 20
        {
          books: [
            { book: 24, chapters: [26, 35, 36] },
            { book: 43, chapters: [20] },
          ],
        },
        // 19. Jeremiah 45-47; Psalm 105; John 21
        {
          books: [
            { book: 24, chapters: [45, 46, 47] },
            { book: 19, chapters: [105] },
            { book: 43, chapters: [21] },
          ],
        },
        // 20. Jeremiah 48-49; Psalm 67; 1 John 1
        {
          books: [
            { book: 24, chapters: [48, 49] },
            { book: 19, chapters: [67] },
            { book: 62, chapters: [1] },
          ],
        },
        // 21. Jeremiah 21, 24, 27; Psalm 118; 1 John 2
        {
          books: [
            { book: 24, chapters: [21, 24, 27] },
            { book: 19, chapters: [118] },
            { book: 62, chapters: [2] },
          ],
        },
        // 22. Jeremiah 28-30; 1 John 3
        {
          books: [
            { book: 24, chapters: [28, 29, 30] },
            { book: 62, chapters: [3] },
          ],
        },
        // 23. Jeremiah 31-32; 1 John 4
        {
          books: [
            { book: 24, chapters: [31, 32] },
            { book: 62, chapters: [4] },
          ],
        },
        // 24. Jeremiah 33-34; Psalm 74; 1 John 5
        {
          books: [
            { book: 24, chapters: [33, 34] },
            { book: 19, chapters: [74] },
            { book: 62, chapters: [5] },
          ],
        },
        // 25. Jeremiah 37-39; Psalm 79; 2 John
        {
          books: [
            { book: 24, chapters: [37, 38, 39] },
            { book: 19, chapters: [79] },
            { book: 63, chapters: [1] },
          ],
        },
        // 26. Jeremiah 50-51; 3 John
        {
          books: [
            { book: 24, chapters: [50, 51] },
            { book: 64, chapters: [1] },
          ],
        },
        // 27. Jeremiah 52; Revelation 1; Psalms 143-144
        {
          books: [
            { book: 24, chapters: [52] },
            { book: 66, chapters: [1] },
            { book: 19, chapters: [143, 144] },
          ],
        },
        // 28. Ezekiel 1-3; Revelation 2
        {
          books: [
            { book: 26, chapters: [1, 2, 3] },
            { book: 66, chapters: [2] },
          ],
        },
        // 29. Ezekiel 4-7; Revelation 3
        {
          books: [
            { book: 26, chapters: [4, 5, 6, 7] },
            { book: 66, chapters: [3] },
          ],
        },
        // 30. Ezekiel 8-11; Revelation 4
        {
          books: [
            { book: 26, chapters: [8, 9, 10, 11] },
            { book: 66, chapters: [4] },
          ],
        },
        // 31. Ezekiel 12-14; Revelation 5
        {
          books: [
            { book: 26, chapters: [12, 13, 14] },
            { book: 66, chapters: [5] },
          ],
        },
      ],
    },
    {
      // Sep
      days: [
        // 1. Ezekiel 15-16; Psalm 70; Revelation 6
        {
          books: [
            { book: 26, chapters: [15, 16] },
            { book: 19, chapters: [70] },
            { book: 66, chapters: [6] },
          ],
        },
        // 2. Ezekiel 17-19; Revelation 7
        {
          books: [
            { book: 26, chapters: [17, 18, 19] },
            { book: 66, chapters: [7] },
          ],
        },
        // 3. Ezekiel 20-21, Psalm 111; Revelation 8
        {
          books: [
            { book: 26, chapters: [20, 21] },
            { book: 19, chapters: [111] },
            { book: 66, chapters: [8] },
          ],
        },
        // 4. Ezekiel 22-24; Revelation 9
        {
          books: [
            { book: 26, chapters: [22, 23, 24] },
            { book: 66, chapters: [9] },
          ],
        },
        // 5. Ezekiel 25-28, Revelation 10
        {
          books: [
            { book: 26, chapters: [25, 26, 27, 28] },
            { book: 66, chapters: [10] },
          ],
        },
        // 6. Ezekiel 29-32; Revelation 11
        {
          books: [
            { book: 26, chapters: [29, 30, 31, 32] },
            { book: 66, chapters: [11] },
          ],
        },
        // 7. 2 Kings 25; 2 Chronicles 36; Jeremiah 40-41; Revelation 12
        {
          books: [
            { book: 12, chapters: [25] },
            { book: 14, chapters: [36] },
            { book: 24, chapters: [40, 41] },
            { book: 66, chapters: [12] },
          ],
        },
        // 8. Jeremiah 42-44; Psalm 48; Revelation 13
        {
          books: [
            { book: 24, chapters: [42, 43, 44] },
            { book: 19, chapters: [48] },
            { book: 66, chapters: [13] },
          ],
        },
        // 9. Lamentations 1-2; Obadiah; Revelation 14
        {
          books: [
            { book: 25, chapters: [1, 2] },
            { book: 31, chapters: [1] },
            { book: 66, chapters: [14] },
          ],
        },
        // 10. Lamentations 3-5; Revelation 15
        {
          books: [
            { book: 25, chapters: [3, 4, 5] },
            { book: 66, chapters: [15] },
          ],
        },
        // 11. Daniel 1-2; Revelation 16
        {
          books: [
            { book: 27, chapters: [1, 2] },
            { book: 66, chapters: [16] },
          ],
        },
        // 12. Daniel 3-4; Psalm 81; Revelation 17
        {
          books: [
            { book: 27, chapters: [3, 4] },
            { book: 66, chapters: [17] },
          ],
        },
        // 13. Ezekiel 33-35; Revelation 18
        {
          books: [
            { book: 26, chapters: [33, 34, 35] },
            { book: 66, chapters: [18] },
          ],
        },
        // 14. Ezekiel 36-37; Psalm 110; Revelation 19
        {
          books: [
            { book: 26, chapters: [36, 37] },
            { book: 19, chapters: [110] },
            { book: 66, chapters: [19] },
          ],
        },
        // 15. Ezekiel 38-39; Psalm 145; Revelation 20
        {
          books: [
            { book: 26, chapters: [38, 39] },
            { book: 19, chapters: [145] },
            { book: 66, chapters: [20] },
          ],
        },
        // 16. Ezekiel 40-41; Psalm 128; Revelation 21
        {
          books: [
            { book: 26, chapters: [40, 41] },
            { book: 19, chapters: [128] },
            { book: 66, chapters: [21] },
          ],
        },
        // 17. Ezekiel 42-44; Revelation 22
        {
          books: [
            { book: 26, chapters: [42, 43, 44] },
            { book: 66, chapters: [22] },
          ],
        },
        // 18. Ezekiel 45-46; Luke 1
        {
          books: [
            { book: 26, chapters: [45, 46] },
            { book: 42, chapters: [1] },
          ],
        },
        // 19. Ezekiel 47-48; Luke 2
        {
          books: [
            { book: 26, chapters: [47, 48] },
            { book: 42, chapters: [2] },
          ],
        },
        // 20. Daniel 5-6; Psalm 130; Luke 3
        {
          books: [
            { book: 27, chapters: [5, 6] },
            { book: 19, chapters: [130] },
            { book: 42, chapters: [3] },
          ],
        },
        // 21. Daniel 7-8; Psalm 137; Luke 4
        {
          books: [
            { book: 27, chapters: [7, 8] },
            { book: 19, chapters: [137] },
            { book: 42, chapters: [4] },
          ],
        },
        // 22. Daniel 9-10; Psalm 123; Luke 5
        {
          books: [
            { book: 27, chapters: [9, 10] },
            { book: 19, chapters: [123] },
            { book: 42, chapters: [5] },
          ],
        },
        // 23. Daniel 11-12; Luke 6
        {
          books: [
            { book: 27, chapters: [11, 12] },
            { book: 42, chapters: [6] },
          ],
        },
        // 24. Ezra 1; Psalms 84-85; Luke 7
        {
          books: [
            { book: 15, chapters: [1] },
            { book: 19, chapters: [84, 85] },
            { book: 42, chapters: [7] },
          ],
        },
        // 25. Ezra 2-3; Luke 8
        {
          books: [
            { book: 15, chapters: [2, 3] },
            { book: 42, chapters: [8] },
          ],
        },
        // 26. Ezra 4; Psalms 113, 127; Luke 9
        {
          books: [
            { book: 15, chapters: [4] },
            { book: 19, chapters: [113, 127] },
            { book: 42, chapters: [9] },
          ],
        },
        // 27. Haggai 1-2; Psalm 129; Luke 10
        {
          books: [
            { book: 37, chapters: [1, 2] },
            { book: 19, chapters: [129] },
            { book: 42, chapters: [10] },
          ],
        },
        // 28. Zechariah 1-3; Luke 11
        {
          books: [
            { book: 38, chapters: [1, 2, 3] },
            { book: 42, chapters: [11] },
          ],
        },
        // 29. Zechariah 4-6; Luke 12
        {
          books: [
            { book: 38, chapters: [4, 5, 6] },
            { book: 42, chapters: [12] },
          ],
        },
        // 30. Zechariah 7-9; Luke 13
        {
          books: [
            { book: 38, chapters: [7, 8, 9] },
            { book: 42, chapters: [13] },
          ],
        },
      ],
    },
    {
      // Oct
      days: [
        // 1. Zechariah 10-12; Psalm 126; Luke 14
        {
          books: [
            { book: 38, chapters: [10, 11, 12] },
            { book: 19, chapters: [126] },
            { book: 42, chapters: [14] },
          ],
        },
        // 2. Zechariah 13-14; Psalm 147; Luke 15
        {
          books: [
            { book: 38, chapters: [13, 14] },
            { book: 19, chapters: [147] },
            { book: 42, chapters: [15] },
          ],
        },
        // 3. Ezra 5-6; Psalm 138; Luke 16
        {
          books: [
            { book: 15, chapters: [5, 6] },
            { book: 19, chapters: [138] },
            { book: 42, chapters: [16] },
          ],
        },
        // 4. Esther 1-2; Psalm 150; Luke 17
        {
          books: [
            { book: 17, chapters: [1, 2] },
            { book: 19, chapters: [150] },
            { book: 42, chapters: [17] },
          ],
        },
        // 5. Esther 3-6; Luke 18 !!! changed from Esther 3-8 to reduce number of chapters
        {
          books: [
            { book: 17, chapters: [3, 4, 5, 6] },
            { book: 42, chapters: [18] },
          ],
        },
        // 6. Esther 9-10; Luke 19 !!! added Esther 7,8
        {
          books: [
            { book: 17, chapters: [7, 8, 9, 10] },
            { book: 42, chapters: [19] },
          ],
        },
        // 7. Ezra 7-8; Luke 20
        {
          books: [
            { book: 15, chapters: [7, 8] },
            { book: 42, chapters: [20] },
          ],
        },
        // 8. Ezra 9-10; Psalm 131; Luke 21
        {
          books: [
            { book: 15, chapters: [9, 10] },
            { book: 19, chapters: [131] },
            { book: 42, chapters: [21] },
          ],
        },
        // 9. Nehemiah 1-2; Psalms 133, 134; Luke 22
        {
          books: [
            { book: 16, chapters: [1, 2] },
            { book: 19, chapters: [133, 134] },
            { book: 42, chapters: [22] },
          ],
        },
        // 10. Nehemiah 3-4; Luke 23
        {
          books: [
            { book: 16, chapters: [3, 4] },
            { book: 42, chapters: [23] },
          ],
        },
        // 11. Nehemiah 5-6; Psalm 146; Luke 24
        {
          books: [
            { book: 16, chapters: [5, 6] },
            { book: 19, chapters: [146] },
            { book: 42, chapters: [24] },
          ],
        },
        // 12. Nehemiah 7-8; Acts 1
        {
          books: [
            { book: 16, chapters: [7, 8] },
            { book: 44, chapters: [1] },
          ],
        },
        // 13. Nehemiah 9-10; Acts 2
        {
          books: [
            { book: 16, chapters: [9, 10] },
            { book: 44, chapters: [2] },
          ],
        },
        // 14. Nehemiah 11-12; Psalm 1; Acts 3
        {
          books: [
            { book: 16, chapters: [11, 12] },
            { book: 19, chapters: [1] },
            { book: 44, chapters: [3] },
          ],
        },
        // 15. Nehemiah 13; Malachi 1-2; Acts 4
        {
          books: [
            { book: 16, chapters: [13] },
            { book: 39, chapters: [1, 2] },
            { book: 44, chapters: [4] },
          ],
        },
        // 16. Malachi 3-4; Psalm 148; Acts 5
        {
          books: [
            { book: 39, chapters: [3, 4] },
            { book: 19, chapters: [148] },
            { book: 44, chapters: [5] },
          ],
        },
        // 17. Job 1-2; Acts 6-7
        {
          books: [
            { book: 18, chapters: [1, 2] },
            { book: 44, chapters: [6, 7] },
          ],
        },
        // 18. Job 3-4; Acts 8-9
        {
          books: [
            { book: 18, chapters: [3, 4] },
            { book: 44, chapters: [8, 9] },
          ],
        },
        // 19. Job 5; Psalm 108; Acts 10-11
        {
          books: [
            { book: 18, chapters: [5] },
            { book: 19, chapters: [108] },
            { book: 44, chapters: [10, 11] },
          ],
        },
        // 20. Job 6-8; Acts 12
        {
          books: [
            { book: 18, chapters: [6, 7, 8] },
            { book: 44, chapters: [12] },
          ],
        },
        // 21. Job 9-10; Acts 13-14
        {
          books: [
            { book: 18, chapters: [9, 10] },
            { book: 44, chapters: [13, 14] },
          ],
        },
        // 22. Job 11-12; Acts 15-16
        {
          books: [
            { book: 18, chapters: [11, 12] },
            { book: 44, chapters: [15, 16] },
          ],
        },
        // 23. Job 13-14; Acts 17-18
        {
          books: [
            { book: 18, chapters: [13, 14] },
            { book: 44, chapters: [17, 18] },
          ],
        },
        // 24. Job 15; Acts 19-20
        {
          books: [
            { book: 18, chapters: [15] },
            { book: 44, chapters: [19, 20] },
          ],
        },
        // 25. Job 16; Acts 21-23
        {
          books: [
            { book: 18, chapters: [16] },
            { book: 44, chapters: [21, 22, 23] },
          ],
        },
        // 26. Job 17; Acts 24-26
        {
          books: [
            { book: 18, chapters: [17] },
            { book: 44, chapters: [24, 25, 26] },
          ],
        },
        // 27. Job 18; Psalm 114; Acts 27-28
        {
          books: [
            { book: 18, chapters: [18] },
            { book: 19, chapters: [114] },
            { book: 44, chapters: [27, 28] },
          ],
        },
        // 28. Job 19; Mark 1-2
        {
          books: [
            { book: 18, chapters: [19] },
            { book: 41, chapters: [1, 2] },
          ],
        },
        // 29. Job 20; Mark 3-4
        {
          books: [
            { book: 18, chapters: [20] },
            { book: 41, chapters: [3, 4] },
          ],
        },
        // 30. Job 2l; Mark 5-6
        {
          books: [
            { book: 18, chapters: [21] },
            { book: 41, chapters: [5, 6] },
          ],
        },
        // 31. Job 22; Mark 7-8
        {
          books: [
            { book: 18, chapters: [22] },
            { book: 41, chapters: [7, 8] },
          ],
        },
      ],
    },
    {
      // Nov
      days: [
        // 1. Psalm 121; Mark 9-10
        {
          books: [
            { book: 19, chapters: [121] },
            { book: 41, chapters: [9, 10] },
          ],
        },
        // 2. Job 23-24; Mark 11-12
        {
          books: [
            { book: 18, chapters: [23, 24] },
            { book: 41, chapters: [11, 12] },
          ],
        },
        // 3. Job 25; Mark 13-14
        {
          books: [
            { book: 18, chapters: [25] },
            { book: 41, chapters: [13, 14] },
          ],
        },
        // 4. Job 26-27; Mark 15-16
        {
          books: [
            { book: 18, chapters: [26, 27] },
            { book: 41, chapters: [15, 16] },
          ],
        },
        // 5. Job 28-29; Galatians 1-2
        {
          books: [
            { book: 18, chapters: [28, 29] },
            { book: 48, chapters: [1, 2] },
          ],
        },
        // 6. Job 30; Psalm 120; Galatians 3-4
        {
          books: [
            { book: 18, chapters: [30] },
            { book: 19, chapters: [120] },
            { book: 48, chapters: [3, 4] },
          ],
        },
        // 7. Job 31-32; Galatians 5-6
        {
          books: [
            { book: 18, chapters: [31, 32] },
            { book: 48, chapters: [5, 6] },
          ],
        },
        // 8. Job 33; 1 Corinthians 1-3
        {
          books: [
            { book: 18, chapters: [33] },
            { book: 46, chapters: [1, 2, 3] },
          ],
        },
        // 9. Job 34; 1 Corinthians 4-6
        {
          books: [
            { book: 18, chapters: [34] },
            { book: 46, chapters: [4, 5, 6] },
          ],
        },
        // 10. Job 35-36; 1 Corinthians 7-8
        {
          books: [
            { book: 18, chapters: [35, 36] },
            { book: 46, chapters: [7, 8] },
          ],
        },
        // 11. Psalm 122; 1 Corinthians 9-11
        {
          books: [
            { book: 19, chapters: [122] },
            { book: 46, chapters: [9, 10, 11] },
          ],
        },
        // 12. Job 37-38; 1 Corinthians 12
        {
          books: [
            { book: 18, chapters: [37, 38] },
            { book: 46, chapters: [12] },
          ],
        },
        // 13. Job 39-40; 1 Corinthians 13-14
        {
          books: [
            { book: 18, chapters: [39, 40] },
            { book: 46, chapters: [13, 14] },
          ],
        },
        // 14. Psalm 149; 1 Corinthians 15-16
        {
          books: [
            { book: 19, chapters: [149] },
            { book: 46, chapters: [15, 16] },
          ],
        },
        // 15. Job 41-42; 2 Corinthians 1-2
        {
          books: [
            { book: 18, chapters: [41, 42] },
            { book: 47, chapters: [1, 2] },
          ],
        },
        // 16. 2 Corinthians 3-6
        {
          books: [{ book: 47, chapters: [3, 4, 5, 6] }],
        },
        // 17. 2 Corinthians 7-10
        {
          books: [{ book: 47, chapters: [7, 8, 9, 10] }],
        },
        // 18. Psalm 124; 2 Corinthians 11-13
        {
          books: [
            { book: 19, chapters: [124] },
            { book: 47, chapters: [11, 12, 13] },
          ],
        },
        // 19. Matthew 1-4
        {
          books: [{ book: 40, chapters: [1, 2, 3, 4] }],
        },
        // 20. Matthew 5-7
        {
          books: [{ book: 40, chapters: [5, 6, 7] }],
        },
        // 21. Matthew 8-10
        {
          books: [{ book: 40, chapters: [8, 9, 10] }],
        },
        // 22. Matthew 11-13
        {
          books: [{ book: 40, chapters: [11, 12, 13] }],
        },
        // 23. Matthew 14-16
        {
          books: [{ book: 40, chapters: [14, 15, 16] }],
        },
        // 24. Matthew 17-19
        {
          books: [{ book: 40, chapters: [17, 18, 19] }],
        },
        // 25. Matthew 20-22
        {
          books: [{ book: 40, chapters: [20, 21, 22] }],
        },
        // 26. Matthew 23-25
        {
          books: [{ book: 40, chapters: [23, 24, 25] }],
        },
        // 27. Psalm 125; Matthew 26-27
        {
          books: [
            { book: 19, chapters: [125] },
            { book: 40, chapters: [26, 27] },
          ],
        },
        // 28. Matthew 28; 1 Thessalonians 1-3
        {
          books: [
            { book: 40, chapters: [28] },
            { book: 52, chapters: [1, 2, 3] },
          ],
        },
        // 29. 1 Thessalonians 4-5; 2 Thessalonians 1-3
        {
          books: [
            { book: 52, chapters: [4, 5] },
            { book: 53, chapters: [1, 2, 3] },
          ],
        },
        // 30. Romans 1-4
        {
          books: [{ book: 45, chapters: [1, 2, 3, 4] }],
        },
      ],
    },
    {
      // Dec
      days: [
        // 1. Romans 5-8
        {
          books: [{ book: 45, chapters: [5, 6, 7, 8] }],
        },
        // 2. Romans 9-12
        {
          books: [{ book: 45, chapters: [9, 10, 11, 12] }],
        },
        // 3. Romans 13-16
        {
          books: [{ book: 45, chapters: [13, 14, 15, 16] }],
        },
        // 4. Ephesians 1-4
        {
          books: [{ book: 49, chapters: [1, 2, 3, 4] }],
        },
        // 5. Ephesians 5-6; Psalm 119     Psalm 119:1-80 !!!
        {
          books: [
            { book: 49, chapters: [5, 6] },
            { book: 19, chapters: [119] },
          ],
        },
        // 6. Phillipians 1-4
        {
          books: [{ book: 50, chapters: [1, 2, 3, 4] }],
        },
        // 7. Colossians 1-4
        {
          books: [{ book: 51, chapters: [1, 2, 3, 4] }],
        },
        // 8. 1 Timothy 1-4
        {
          books: [{ book: 54, chapters: [1, 2, 3, 4] }],
        },
        // 9. 1 Timothy 5-6; Titus 1-3
        {
          books: [
            { book: 54, chapters: [5, 6] },
            { book: 56, chapters: [1, 2, 3] },
          ],
        },
        // 10. 2 Timothy 1-4
        {
          books: [{ book: 55, chapters: [1, 2, 3, 4] }],
        },
        // 11. Philemon; Hebrews 1-4
        {
          books: [
            { book: 57, chapters: [1] },
            { book: 58, chapters: [1, 2, 3, 4] },
          ],
        },
        // 12. Hebrews 5-8
        {
          books: [{ book: 58, chapters: [5, 6, 7, 8] }],
        },
        // 13. Hebrews 9-11
        {
          books: [{ book: 58, chapters: [9, 10, 11] }],
        },
        // 14. Hebrews 12-13; Jude ; !!! added James 1
        {
          books: [
            { book: 58, chapters: [12, 13] },
            { book: 65, chapters: [1] },
            { book: 59, chapters: [1] },
          ],
        },
        // 15. James 1-5 ; !!! removed James 1 added 1 Peter 1
        {
          books: [
            { book: 59, chapters: [2, 3, 4, 5] },
            { book: 60, chapters: [1] },
          ],
        },
        // 16. 1 Peter 1-5 !!! removed 1 Peter 1
        {
          books: [{ book: 60, chapters: [2, 3, 4, 5] }],
        },
        // 17. 2 Peter 1-3; John 1
        {
          books: [
            { book: 61, chapters: [1, 2, 3] },
            { book: 43, chapters: [1] },
          ],
        },
        // 18. John 2-4
        {
          books: [{ book: 43, chapters: [2, 3, 4] }],
        },
        // 19. John 5-6
        {
          books: [{ book: 43, chapters: [5, 6] }],
        },
        // 20. John 7-8
        {
          books: [{ book: 43, chapters: [7, 8] }],
        },
        // 21. John 9-11
        {
          books: [{ book: 43, chapters: [9, 10, 11] }],
        },
        // 22. John 12-14
        {
          books: [{ book: 43, chapters: [12, 13, 14] }],
        },
        // 23. John 15-18
        {
          books: [{ book: 43, chapters: [15, 16, 17, 18] }],
        },
        // 24. John 19-21 !!! added 1 John 1
        {
          books: [
            { book: 43, chapters: [19, 20, 21] },
            { book: 62, chapters: [1] },
          ],
        },
        // 25. 1 John 1-5 !!! removed 1 John 1
        {
          books: [{ book: 62, chapters: [2, 3, 4, 5] }],
        },
        // 26. Psalms 117; 2 John; 3 John !!! removed Psalm 119:81-176; added Revelation 1,2
        {
          books: [
            { book: 19, chapters: [117] },
            { book: 63, chapters: [1] },
            { book: 64, chapters: [1] },
            { book: 66, chapters: [1, 2] },
          ],
        },
        // 27. Revelation 1-4
        {
          books: [{ book: 66, chapters: [3, 4, 5, 6] }],
        },
        // 28. Revelation 5-9
        {
          books: [{ book: 66, chapters: [7, 8, 9, 10] }],
        },
        // 29. Revelation 10-14
        {
          books: [{ book: 66, chapters: [11, 12, 13, 14] }],
        },
        // 30. Revelation 15-18
        {
          books: [{ book: 66, chapters: [15, 16, 17, 18] }],
        },
        // 31. Revelation 19-22
        {
          books: [{ book: 66, chapters: [19, 20, 21, 22] }],
        },
      ],
    },
  ],
};

var readStatus = [];
for (var b = 0; b < 66; b++) {
  readStatus[b] = "0".repeat(chapterCount[b]);
}

// Loop through each month
for (var month = 0; month < 12; month++) {
  // Loop through each day in the month
  console.log(months[month]);
  for (var day = 0; day < dayCount[month]; day++) {
    var line = (day + 1).toString();
    if (line.length === 1) line = "0" + line;
    line = line + " ";
    // Loop through each book in the daily reading plan
    var bookCount = dailyReading.month[month].days[day].books.length;
    for (var b = 0; b < bookCount; b++) {
      // Loop through each chapter to read for this book
      var chapterCount =
        dailyReading.month[month].days[day].books[b].chapters.length;
      var bookNumber = dailyReading.month[month].days[day].books[b].book - 1;
      line = line + " " + displayName[bookNumber] + " ";
      for (var c = 0; c < chapterCount; c++) {
        var chapterNumber =
          dailyReading.month[month].days[day].books[b].chapters[c] - 1;
        var readCount = parseInt(readStatus[bookNumber][chapterNumber]);
        // Get chapter visited status for this chapter of this book
        ++readCount;
        // Set incremented chapter visited status
        if (readStatus[bookNumber].length === 1) {
          // Only chapter
          readStatus[bookNumber] = readCount.toString();
        } else if (chapterNumber === 0) {
          // First chapter
          // console.log(
          //   "First " +
          //     displayName[bookNumber] +
          //     " Status=" +
          //     readStatus[bookNumber]
          // );
          readStatus[bookNumber] =
            readCount.toString() + readStatus[bookNumber].substring(1);
          // console.log(
          //   "First " +
          //     displayName[bookNumber] +
          //     " Status=" +
          //     readStatus[bookNumber]
          // );
        } else if (chapterNumber < readStatus[bookNumber].length - 1) {
          // Middle chapter
          // console.log(
          //   "Middle Book=" +
          //     displayName[bookNumber] +
          //     " Status=" +
          //     readStatus[bookNumber]
          // );
          readStatus[bookNumber] =
            readStatus[bookNumber].substring(0, chapterNumber) +
            readCount.toString() +
            readStatus[bookNumber].substring(chapterNumber + 1);
          // console.log(
          //   "Middle Book=" +
          //     displayName[bookNumber] +
          //     " Status=" +
          //     readStatus[bookNumber]
          // );
        } else if (chapterNumber === readStatus[bookNumber].length - 1) {
          // Last chapter
          // console.log(
          //   "Last Book=" +
          //     displayName[bookNumber] +
          //     " Status=" +
          //     readStatus[bookNumber]
          // );
          readStatus[bookNumber] =
            readStatus[bookNumber].substring(0, chapterNumber) +
            readCount.toString();
          // console.log(
          //   "Last Book=" +
          //     displayName[bookNumber] +
          //     " Status=" +
          //     readStatus[bookNumber]
          // );
        }
        if (c > 0) line = line + ", ";
        line = line + (chapterNumber + 1);
      } // chapter list
      line = line + ";";
    } // book
    console.log(line);
  } // day
} // month

// for (var b = 0; b < 66; b++) {
//   console.log(displayName[b] + " " + readStatus[b]);
// }
