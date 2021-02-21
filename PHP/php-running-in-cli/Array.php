<?php
  $vegetables = array('corn' => '노랑',
                      'beet' => '빨강',
                      'carrot' => '주황');
  $dinner = array(
    0 => '스위트콘과 아스파라거스',
    1 => '레몬 치킨',
    2 => '삶은 망태버섯'
  );

  $computers = array(
    'nintendo-64' => '닌텐도',
    2600 => '아타리',
    'Saturn' => '세가',
  );

  // 단축 배열 문법
  $ddc = [201911064 => '최은기', 201911034 => '엄민호', 20000000 => '김준재'];
  $ddc[20000627] = '나의 생일';

  print implode($ddc);
  print "\n";

  // 유연하게 사용
  $games = array(
    '엘더스크롤',
    '갓오브워',
    '라스트오브어스'
  );

  $gameOnPC = [
    '인디게임',
    'SF 게임',
    '퍼즐 게임'
  ];

  print "$gameOnPC[0], $games[2]";