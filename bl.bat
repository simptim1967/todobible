@echo off
rem Use node.js to generate blog pages

echo Rendering pug blog pages via node.js ...
rem Blog index
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\blog\blog-index.pug --pretty --out C:\TIM\Dev\MBP\Source\live\blog 

rem 2023
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\blog\2023\19-jesus-on-the-battlefield.pug --pretty --out C:\TIM\Dev\MBP\Source\live\blog\2023

rem 2021
call Pug C:\TIM\Dev\MBP\Source\WebSite\pug\blog\2021\18-always-good-news.pug --pretty --out C:\TIM\Dev\MBP\Source\live\blog\2021
