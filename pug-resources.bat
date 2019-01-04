@echo off
rem Use node.js to generate resource pages

echo Rendering pug resources page via node.js ...
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\resources\resources.pug --pretty --out C:\TIM\Dev\MBP\Source\live\resources 

echo Rendering pug articles via node.js ...
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\resources\the-turner-of-the-pages.pug --pretty --out C:\TIM\Dev\MBP\Source\live\resources 

echo Rendering pug bible studies via node.js ...
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\resources\bible-study-ephesians-1.pug --pretty --out C:\TIM\Dev\MBP\Source\live\resources 
