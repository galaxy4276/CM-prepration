<?php
$meal = [
  'breakfast' => 'Walnut Bun',
  'lunch' => 'Cashew Nuts and White Mushrooms',
  'snack' => 'Dired Mulberries',
  'dinner' => 'Eggplant with Chili Sauce'
];

printf("정렬 전\n");
foreach ($meal as $key => $value) {
  print "\$meal: $key $value\n";
}

asort($meal);
printf("정렬 후\n");

foreach($meal as $key => $value) {
  print "\$meal: $key $value\n";
}