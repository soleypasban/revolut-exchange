cls && xcopy /y rates.php deploy\rates.php && yarn build && xcopy /y/E build\* deploy\* && move deploy\index.html deploy\index.php && del deploy\test.xml && cd deploy && git add . && git commit -am "auto" && git push heroku master && cd..
REM cd deploy && git add . && git commit -am "auto" && git push heroku master && cd..