<?php
    $to = $_POST['toemail'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $fromemail = $_POST['fromemail'];
    $fromname = $_POST['fromname'];
    $lt= '<';
    $gt= '>';
    $sp= ' ';
    $from= 'From:';
    $headers = $from.$fromname.$sp.$lt.$fromemail.$gt;
    mail($to, $subject, $message, $headers);
    exit();
?>
