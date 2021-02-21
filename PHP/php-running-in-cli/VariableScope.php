<?php
$dinner = '갑오징어 카레';

function vegetarian_dinner() {
  printf("저녁 메뉴는 %s, 또는", $GLOBALS['dinner']);
  $dinner = '완두싹 볶음';
  printf("%s 입니다.\n", $dinner);
}

function kosher_dinner() {
  print "저녁 메뉴는 $dinner 또는 ";
  $dinner = '궁보계정';
  printf("%s 입니다. \n", $dinner);
}

function test() {
  print "$dinner 입니다.";
}

printf("채식주의식 %s \n", vegetarian_dinner());
printf("유태인식 %s \n", kosher_dinner());
printf("일반 저녘 메뉴는 $dinner 입니다.");
test();