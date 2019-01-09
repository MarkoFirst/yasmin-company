<?php
  header("Location: /", true, 301);

  $to      = "babiichuck.vadim@gmail.com";
  $subject = htmlspecialchars($_POST["subject"]);
  $message = htmlspecialchars($_POST["message"]);
  $headers = "From: ".htmlspecialchars($_POST["fio"])."<".htmlspecialchars($_POST["email"]).">";

  mail($to, $subject, $message, $headers);

  exit();
?>
