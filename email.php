<?php
    $email = addslashes($_POST['email']);
    $phoneNumber = addslashes($_POST['phoneNumber']);
    $subject = addslashes($_POST['subject']);
    $mesage =  addslashes($_POST['mesage']);

    $to = "contato@solucaut.com";
    $body = "Email: ".$email."\n".
            "Phone: ".$phoneNumber."\n".
            "Mensagem: ".$mesage;
    $header = "From: emailContato@solucaut.com"."\n"."Reply-To:".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        echo("Email enviado com sucesso!");
    }else{
        echo("O email não pode ser enviado!");
    }


?>