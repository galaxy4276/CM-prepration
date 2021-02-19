<?php
if ($_POST['user']) {
  print "Hello, ";
  print $_POST['user'];
  print "!";
} else {
  print <<<_HTML_
  <form method="post" action="$_SERVER[PHP_SELF]">
    이름: <input type="text" name="user" />
    <br />
    <button type="submit">인사</button>
  </form>
_HTML_;
}
?>