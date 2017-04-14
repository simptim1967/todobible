@echo off

call css-all.bat

echo Copying image files ...
del ..\live\images\*.png
del ..\live\images\*.jpg
copy .\images\*.png ..\live\images
copy .\images\*.jpg ..\live\images

echo Copying script files ...
del ..\live\script\*.js
copy .\script\biblenav.js ..\live\script
copy .\script\bootstrap.min.js ..\live\script
copy .\script\highlight-verses.js ..\live\script
copy .\script\jquery.scrollTo.js ..\live\script
copy .\script\jquery-1.12.4.min.js ..\live\script

echo Copying HTML files ...

call xslt-all.bat

call pug-all.bat

copy .\todo\*.html ..\live\todo

echo Copying root files ...
copy .\sitemap.xml ..\live
copy .\robots.txt ..\live

echo Running bootlint against HTML files ...
bootlint ..\live\about_todo_bible.html
bootlint ..\live\index.html
bootlint ..\live\todo\*.html
bootlint ..\live\kjv\*.html