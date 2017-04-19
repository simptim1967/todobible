@echo off
rem Use node.js to generate todo pages

echo Rendering pug todo files via node.js ...
echo Rendering bible todo topic index 
node .\pug\todo\bible_todo_topics_index.js > ..\live\todo\bible_todo_topics_index.html
