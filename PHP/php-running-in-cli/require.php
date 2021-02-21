<?php

require './restaurant-functions.php';

$total_bill = restaurant_check(25, 8.875, 20);

$cash = 30;

printf("total_bill: %.3f$\n", $total_bill);
print "결제 방법은 " . payment_method($cash, $total_bill);