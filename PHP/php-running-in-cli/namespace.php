<?php

namespace Tiny;

class Fruit {
  public static function munch($bite) {
    print "$bite 를 김치에 싸서 드셔보세요.";
  }
}

\Tiny\Fruit::munch("바나나");
