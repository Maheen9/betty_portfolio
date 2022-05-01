<?php


    $fname= $_POST['first_name'];
    $lname= $_POST['last_name'];
    $email= $_POST['email'];
    $msg= $_POST['message'];

    $email_from='trialaccn911@gmail.com';
    $subject="New Message";
    $body="First Name: $fname.\n".
            "Last Name: $lname.\n".
            "Email: $email.\n".
            "Message: $msg.\n";
    $to="trialaccn911@gmail.com";
    $mail($to, $subject, $body);
    header("Location: index.html");
?>
