REM cls && del /Q /S deploy\* && yarn build && xcopy /y/E build\* deploy\* && move deploy\index.html deploy\index.php && del deploy\test.xml && cd deploy && git add . && git commit -am "auto" && git push heroku master && cd..
git add . && git commit -am "auto" && git push heroku master && cd..