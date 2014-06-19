#testem-amd-demo (TAD)

How to run testem with requirejs, Marionette.

##sprint 1 v0.0.1
TAD-1 add requirejs with jquery, and simple test. 

##sprint 2 v0.0.2
TAD-2 initialize application with Marionette.
TAD-3 add test driver.

http://kilon.org/blog/2012/08/testing-backbone-requirejs-applications-with-jasmine/
https://github.com/uzikilon/Todos/blob/master/test/jasmine/SpecRunner.js


test_page: test/qunit/index.html

src_files:
	- test/jasmine/specs/**/*.js
watch_files:
	- test/jasmine/specs/**/*.js
launch_in_dev:
	- Chrome
launch_in_ci:
	- Chrome
	
	
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Jasmine Spec Runner</title>
  <link rel="stylesheet" type="text/css" href="../lib/jasmine/jasmine.css">
</head>
<body>
  <div id="sandbox" style="overflow:hidden; height:1px;"></div>
  
  <!-- 
  <script src="lib/jasmine-2.0.0/jasmine.js"></script>
  <script src="lib/jasmine-2.0.0/jasmine-html.js"></script>
  <script src="lib/jasmine-2.0.0/boot.js"></script>
   -->
  <script src="../../app/js/vendor/require/require.js" data-main="SpecRunner"></script>
</body>
</html>