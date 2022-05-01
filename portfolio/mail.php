<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['first_name']) && isset($_POST['last_name'])){
    $fname= $_POST['first_name'];
    $lname= $_POST['last_name'];
    $email= $_POST['email'];
    $msg= $_POST['message'];

    require_once "assets/phpmailer/PHPMailer.php";
    require_once "assets/phpmailer/Exception.php";
    require_once "assets/phpmailer/SMTP.php";

    $mail = new PHPMailer();

    //smtp settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'trialaccn911@gmail.com';                     //SMTP username
    $mail->Password   = 'shadbad911';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    $mail->isHTML(true);                                  //Set email format to HTML

    //Recipients
    $mail->setFrom($email, $fname);
    $mail->addAddress('trialaccn911@gmail.com');     //Add a recipient

    //Content
    $mail->Subject = 'Here is the subject';
    $mail->Body    = $msg;

    if($mail->send()){
        $status="success";
        $response="Email sent!";
    }
    else{
        $status="failed";
        $response="oops sent failed!";
    }
    exit(json_encode(array("status"=> $status, "response" =>$response)));


}


    // $fname= $_POST['first_name'];
    // $lname= $_POST['last_name'];
    // $email= $_POST['email'];
    // $msg= $_POST['message'];

    // $email_from='trialaccn911@gmail.com';
    // $subject="New Message";
    // $body="First Name: $fname.\n".
    //         "Last Name: $lname.\n".
    //         "Email: $email.\n".
    //         "Message: $msg.\n";
    // $to="trialaccn911@gmail.com";
    // $mail($to, $subject, $body);
    //header("Location: index.html");

?>
