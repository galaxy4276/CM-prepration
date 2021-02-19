<?php
  $message = 'Hello-world!';
  print "this is my first typing PHP: $message \n"; // ''는 템플릿 리터럴이 안된다.

  // 함수 선언
  function foo() {
    $GLOBALS['message'] = 'Who are you?';
    print $GLOBALS['message'];
  }

  foo();

  // Anonymous Function

?>
