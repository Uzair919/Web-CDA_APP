<?php
if(isset($_POST["SUBMIT"])){
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

#change recipient email address#
$to='18uak1@queensu.ca';

$subject="test";

$message="Name: ".$name."\n"."Wrote the Following"."\n\n".$message;
$header="From: ".$email;

if(mail($to,$subject,$message,$header)){
    echo"<h1>Sent Successfully ! Thanks you "." ".$name.",We will contact you shortly</h1>";
}
else{
    echo "Something Went Wrong";
}

}

?>