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
        echo '<script>alert("Email enviado com sucesso!");</script>';
        echo '<script> window.location.href = "./index.html";</script>';
    }else{
        echo '<script>alert("Erro ao enviar o email!");</script>';
        echo '<script> window.location.href = "./index.html";</script>';
    }
?>