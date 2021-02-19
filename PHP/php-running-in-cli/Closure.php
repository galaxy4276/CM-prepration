<?php 
  $message = 'hello?';
  $example1 = function () {
    var_dump($message);
  };

  $example2 = function () use ($message) {
    var_dump($message);
  };

  $example1();
  $example2();
?>