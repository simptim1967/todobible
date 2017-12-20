@echo off
rem Use node.js to generate todo pages

echo Rendering pug bible pages from JSON data via node.js ...
node .\pug\kjv\bible_page_ephesians.js 

call .\pug-todo.bat