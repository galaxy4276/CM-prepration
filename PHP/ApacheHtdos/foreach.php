<?php
  $meal = [
    'breakfast' => '호두 번',
    'lunch' => '캐슈너트와 양송이버섯',
    'snack' => '말린 오디',
    'dinner' => '칠리 소스 가지 볶음'
  ];

  $row_styles = ['even', 'odd'];
  $style_index = 0;

  print "<table>\n";
  foreach ($meal as $key => $value) { // 각 원소에 대해 $key 에 키를, $value 에 값을 복사한다.
    print "<tr class='$row_styles[$style_index]'>";
    print "<td>$key</td><td>$value</td></tr>";
    $style_index = 1 - $style_index;
}

  print "</table>";