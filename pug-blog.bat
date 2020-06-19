@echo off
rem Use node.js to generate blog pages

echo Rendering pug blog pages via node.js ...
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\blog\blog-index.pug --pretty --out C:\TIM\Dev\MBP\Source\live\blog 
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\blog\2020\02-signs-of-the-times.pug --pretty --out C:\TIM\Dev\MBP\Source\live\blog\2020
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\blog\2020\01-walking-and-talking-with-god.pug --pretty --out C:\TIM\Dev\MBP\Source\live\blog\2020

rem Use node.js to generate legacy resource pages
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\resources\the-turner-of-the-pages.pug --pretty --out C:\TIM\Dev\MBP\Source\live\resources 
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\resources\bible-study-ephesians-1.pug --pretty --out C:\TIM\Dev\MBP\Source\live\resources 