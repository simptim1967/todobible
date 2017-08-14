call css-all.bat

echo Copying image files ...
del ..\live\images\*.png
del ..\live\images\*.jpg
del ..\live\images\*.svg
del ..\live\images\*.gif

copy .\images\*.png ..\live\images
copy .\images\*.jpg ..\live\images
copy .\images\*.svg ..\live\images

echo Copying script files ...
del ..\live\script\*.js
copy .\script\biblenav.js ..\live\script
copy .\script\bootstrap.min.js ..\live\script
copy .\script\highlight-verses.js ..\live\script
copy .\script\jquery.scrollTo.js ..\live\script
copy .\script\jquery-1.12.4.min.js ..\live\script

echo Copying HTML files ...

call pug-all.bat

echo Copying root files ...
copy .\sitemap.xml ..\live
copy .\robots.txt ..\live

echo Running bootlint against HTML files ...
call bootlint ..\live\about_todo_bible.html
call bootlint ..\live\index.html
call bootlint ..\live\kjv\*.html
call bootlint ..\live\todo\*.html
