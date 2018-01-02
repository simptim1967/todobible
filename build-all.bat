call css-all.bat

echo Copying image files ...
del ..\live\images\*.png
del ..\live\images\*.jpg
del ..\live\images\*.svg

copy .\images\*.png ..\live\images
copy .\images\*.jpg ..\live\images
copy .\images\*.svg ..\live\images

call script-all.bat

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
