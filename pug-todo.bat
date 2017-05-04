@echo off
rem Use node.js to generate todo pages

echo Rendering bible todo list disclaimer 
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\todo\bible_todo_list_disclaimer.pug --pretty --out C:\TIM\Dev\MBP\Source\live\todo 

echo Rendering ultimate bible todo list 
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\todo\bible_todo_list_ultimate.pug --pretty --out C:\TIM\Dev\MBP\Source\live\todo 

echo Rendering pug todo files via node.js ...

echo Rendering bible todo topic index 
node .\pug\todo\bible_todo_topics_index.js > ..\live\todo\bible_todo_topics_index.html

echo Rendering bible todo list (by A-Z) 
node .\pug\todo\bible_todo_list_by_a_to_z.js > ..\live\todo\bible_todo_list_by_a_to_z.html

echo Rendering bible todo list (by bible book) 
node .\pug\todo\bible_todo_list_by_bible_book.js > ..\live\todo\bible_todo_list_by_bible_book.html

echo Rendering bible todo list (by topic) 
node .\pug\todo\bible_todo_list.js > ..\live\todo\bible_todo_list.html
