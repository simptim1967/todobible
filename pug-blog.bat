@echo off
rem Use node.js to generate blog pages

echo Rendering pug blog pages via node.js ...
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\blog\blog-index.pug --pretty --out C:\TIM\Dev\MBP\Source\live\blog 
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\blog\2020\01-walking-and-talking-with-god.pug --pretty --out C:\TIM\Dev\MBP\Source\live\blog\2020

