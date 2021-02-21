<?php

class Entree {
  private $name;
  protected $ingredients = [];

  public function __construct($name, $ingredients) {
    if (!is_array($ingredients)) {
      throw new Exception('$ingredients 가 배열이 아닙니다.');
    }
    $this->name = $name;
    $this->ingredients = $ingredients;
  }

  public function getName() {
    return $this->name;
  }

  public function hasIngredient($ingredient) {
    // 현재 인스턴스를 가리키는 특수한 변수인 $this가 할당 된다.
    return in_array($ingredient, $this -> ingredients);
  }
}

//$soup = new Entree;
//$soup -> name = '닭고기 수프';
//$soup -> ingredients = ['닭고기', '물'];
$soup = new Entree('닭고기 수프', ['닭고기', '빵']);

$sandwich = new Entree('닭고기 샌드위치', ['닭고기', '빵']);

$test = new Entree('BBQ 황금올리브치킨', 34);

foreach (['닭고기', '레몬', '빵', '물'] as $ing) {
  if ($soup -> hasIngredient($ing)) {
    print "수프의 재료 $ing \n";
  }

  if ($sandwich -> hasIngredient($ing))
    print "수프의 재료 $ing \n";
}