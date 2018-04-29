<?php

require '../src/MyFirstClass.php';

use MyFirstphp\MyFirstClass;

try {
$variable1 = (float) $_GET['variable1'];
$variable2 = (float) $_GET['variable2'];
$Operation = (int) $_GET['Operation'];
$menssage = null;

$calc = new MyFirstClass();
$calc ->setVariable1($variable1);
$calc->setVariable2($variable2);
if ($Operation === 1){
    $message = 'The sum between ' .$variable1.  ' and '  .$variable2 . ' is = ' .$calc->sum();
} else if ($Operation === 2){
     $message = ' The res between ' .$variable1.  ' and ' .$variable2 . ' is = ' .$calc->rest();
} else if ($Operation === 3){
     $message = ' The mul ti between ' .$variable1.  ' and ' .$variable2 . ' is = ' . $calc->mult();
} else if ($Operation === 4) {
 $message = ' The div between ' . $variable1 . ' and ' .$variable2 . ' is = ' . $calc->div();
} else if ($Operation === 5) {
    $message =' The log the arg ' .$variable1. ' and the base ' . $variable2. ' is = ' . $calc->log();
} else if ($Operation ===6) {
    $message =' The number  ' .$variable1. '  squared is ' .$calc->squared();
} else if ($Operation ===7) {
    $message  = ' The number ' .$variable1. ' elevated ' .$variable2. ' is = ' .$calc->pow();

} else if ($Operation ===8) {
    $message  = ' The number ' .$variable1. ' its squared root is = ' .$calc->sqrt();
}else if ($Operation ===9) {
    $message  = ' The number ' .$variable1. ' the root ' .$variable2.' is = ' .$calc->root();
}else {
    $message = 'Error:  the operation is  invalid';
}
}catch (Exception $exc){
    if ($exc->getCode() === 1) {
        $message = $exc->getMessage();
    }else {
        echo "There's been a problem with the operation.";
        echo $exc->getMessage();
        echo $exc->getTraceAsString();
    }
} finally {
    if ($message !== null) {
        require 'index.php';
    }
}

