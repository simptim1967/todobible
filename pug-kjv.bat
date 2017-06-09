@echo off
rem Use node.js to generate todo pages

call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\kjv\king_james_bible_index_page.pug --pretty --out C:\TIM\Dev\MBP\Source\live\kjv 

echo Rendering pug bible pages from JSON data via node.js ...
node .\pug\kjv\bible_page.js 

