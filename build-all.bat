@echo off

echo Copying CSS files ...
del ..\live\css\*.css
copy .\css\*_page.css ..\live\css
copy .\css\bootstrap.min.css ..\live\css

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