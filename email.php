<?php
    
if(isset($_POST['email'] )&& !empty($_POST['email'])){
    $email = addslashes($_POST['email']);
    $phoneNumber = addslashes($_POST['phoneNumber']);
    $subject = addslashes($_POST['subject']);
    $mesage =  addslashes($_POST['message']);

    $to = "contato@solucaut.com";
    $subject = $subject;
    $body =  "Email: ".$email."\r\n".
                    "Phone: ".$phoneNumber."\r\n".
                    "Mensagem: ".$message;
    $header =   "From: contatoSite@solucaut.com"."\r\n".
                        "Reply-To:".$email."\r\n".
                        "X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        echo '<script>alert("Email enviado com sucesso!");</script>';
        echo '<script> window.location.href = "./index.html/#contact";</script>';
    }else{
        echo '<script>alert("Erro ao enviar o email!");</script>';
        echo '<script> window.location.href = "./index.html";</script>';
    }
}
?>