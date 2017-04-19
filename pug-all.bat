@echo off
echo Rendering pug files ...
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\about_todo_bible.pug --pretty --out C:\TIM\Dev\MBP\Source\live
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\index.pug --pretty --out C:\TIM\Dev\MBP\Source\live
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\kjv\king_james_bible_index_page.pug --pretty --out C:\TIM\Dev\MBP\Source\live\kjv 

call pug-todo.bat

