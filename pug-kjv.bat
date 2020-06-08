@echo off
rem Use node.js to generate todo pages

echo Rendering pug bible index page via node.js ...
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\kjv\king_james_bible_index_page.pug --pretty --out C:\TIM\Dev\MBP\Source\live\kjv 

echo Rendering pug bible reading plan page via node.js ...
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\kjv\bible_reading_plan.pug --pretty --out C:\TIM\Dev\MBP\Source\live\kjv 

echo Rendering pug bible pages from JSON data via node.js ...
node .\pug\kjv\bible_page.js 

