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

  $substract = runTest(function () {
    return ($a > $b) ? ($a - $b) : ($b - $a); 
  });
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Function PHP</title>
</head>
<body>
  add : <?=$add?>
  <br />
  substract: <?=$substract?>
</body>
</html>