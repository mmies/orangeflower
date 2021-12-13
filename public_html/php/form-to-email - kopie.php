<?php
if(!isset($_POST['submit']))
{
	// Deze pagina mag niet direct worden benaderd, alleen via het submitten van een formulier
	echo "error; you need to submit the form!";
}
$naam = $_POST['naam'];
$bezoeker_email = $_POST['email'];
$bericht = $_POST['bericht'];
$mobiel = $_POST['mobiel'];

// Valideren naam en emailadres
if(empty($naam)||empty($bezoeker_email)) 
{
    echo "Name and email are mandatory!";
	header('Location: ../contact.html');
	exit;
}

if(IsInjected($bezoeker_email))
{
    echo "Bad email value!";
    exit;
}

// 1. Versturen email naar info@orange-flower. Russische SPAM blokkeren
$ip = getIp();
$tijdstip = date("d-m-Y H:i:s", time()); 

$email_from = 'info@orange-flower.nl';
$email_subject = "Klantenvraag Orange flower ($tijdstip)";
$email_body = "Er is een bericht binnengekomen via de contactpagina van www.orange-flower.nl \n 
afzender: de heer/mevrouw $naam 
emailadres: $bezoeker_email \n
bericht: \n
$bericht \n \n
bericht is binnengekomen op $tijdstip via IP adres: $ip";

$to = "info@orange-flower.nl"; 


$headers = "From: $email_from \r\n";
$headers .= "Bcc: marcelmies@gmail.com \r\n";
$headers .= "Reply-To: $bezoeker_email \r\n";

if (endsWith($bezoeker_email,".nl") || endsWith($bezoeker_email,".com") || endsWith($bezoeker_email,".be")) {	
    
    // Check of er Russische tekens in het bericht voorkomen en of bericht uit meer dan 1 woord bestaat
	$len = str_word_count($bericht);
	
    if (!isRussian($bericht) && $len>1) {
        mail($to,$email_subject,stripcslashes($email_body),$headers);
    }
} 

// 2. Versturen email naar de klant
$email_from = 'info@orange-flower.nl';
$email_subject = "Uw vraag aan Orange flower";
$email_body = "Beste klant, \n \n
Bedankt voor het versturen van uw bericht naar Orange Flower.\n
De salon is tijdelijk gesloten i.v.m. de verhuizing naar een nieuwe locatie.\nWilt u graag een bericht ontvangen wanneer ik weer ga starten? Geef dan uw emailadres, naam en (eventueel) uw telefoonnummer op.\n\nIk hoop u weer over enige tijd welkom te heten bij Orange Flower!\n\n
met vriendelijke groet,\nKarin Claessens\n\n
=================================================================== \n\n
Dit is een automatisch gegenereerd bericht";

$to = "$bezoeker_email";
$headers = "From: $email_from \r\n";

mail($to,$email_subject,stripcslashes($email_body),$headers);

// 3. redirect naar de bedankpagina
if(!empty($mobiel)) 
{
	header('Location: ../mobiel?bedankt=\'true\'');
} else {
	header('Location: ../index?bedankt=\'true\'');
}

// Functie die controleert op email injectie pogingen
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
 
 
function getIp() {

    $ip = $_SERVER['REMOTE_ADDR'];

    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {

        $ip = $_SERVER['HTTP_CLIENT_IP'];

    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {

       $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];

    }
    return $ip;
}
 
function endsWith($haystack, $needle) {
    $length = strlen($needle);
    if ($length === 0) {
        return true;
    }
    return (substr($haystack, -$length) === $needle);
}

function isRussian($text) {
    return preg_match('/(*UTF8)[А-Яа-яЁё]/u', $text);
}

?> 