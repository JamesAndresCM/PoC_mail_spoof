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
		var_dump($to);
		var_dump($subject);
		var_dump($message);
		var_dump($fromemail);
		var_dump($fromname);
    $headers = $from.$fromname.$sp.$lt.$fromemail.$gt;
    mail($to, $subject, $message, $headers);
		var_dump($headers);
		var_dump($mail);
    //header("Location: sendmail.php?msg= Mail Sent!");
    exit();

?>
