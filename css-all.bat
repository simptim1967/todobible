@echo off
echo Copying CSS files ...
del ..\live\css\*.css
copy .\css\*_page.css ..\live\css
copy .\css\interlinear.css ..\live\css
copy .\css\bootstrap.min.css ..\live\css

