<?php
  $dimsum = ['달고기 번', '오리발 구이', '순무 케이크'];
  $menu = implode(', ', $dimsum);
  print $menu;
  printf("\n");
  print implode('(와)과 ', $dimsum);