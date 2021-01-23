call css-all.bat

echo Copying image files ...
del ..\live\images\*.*

copy .\images\*.* ..\live\images

call script-all.bat

echo Copying HTML files ...

call pug-all.bat

echo Copying root files ...
copy .\sitemap.xml ..\live
copy .\robots.txt ..\live
copy .\one-year-bible-reading-plan.docx ..\live
copy .\one-year-bible-reading-plan.pdf ..\live

echo Running bootlint against HTML files ...
call bootlint ..\live\about_todo_bible.html
call bootlint ..\live\index.html
call bootlint ..\live\kjv\*.html
call bootlint ..\live\todo\*.html
