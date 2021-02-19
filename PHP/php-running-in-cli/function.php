<?php
  function runTest($func) {
    if (is_callable($func)) {
      return $func(10, 5);
    }
    return 0;
  }

  $add = runTest(function ($a, $b) {
    return $a + $b;
  });

  $substract = runTest(function ($a, $b) {
    return ($a > $b) ? ($a - $b) : ($b - $a); 
  });

  print "add함수의 실행: $add \n";
  print "substract함수의 실행: $substract \n";
?>