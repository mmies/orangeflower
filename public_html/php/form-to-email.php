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
    if (!containsSpam($bericht) && !isRussian($bericht) && $len>1) {
        mail($to,$email_subject,stripcslashes($email_body),$headers);
    }
} 

// 2. Versturen email naar de klant
$email_from = 'info@orange-flower.nl';
$email_subject = "Uw vraag aan Orange flower";
$email_body = "Geachte heer/mevrouw, \n \n
Bedankt voor het versturen van uw bericht naar Orange-flower. 
U heeft het volgende bericht verstuurd: \n
$bericht \n
We zullen proberen uw mail zo snel mogelijk te beantwoorden. \n\n
Met vriendelijke groet, \n
Orange flower \n \n
\n\n
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

function containsSpam($text) {
	$kwrds = ['sales page', 'conversion', 'buy now', 'online business', 'speaking to', 'zero cost', 'promote your site', 
	'for free', 'of charge', 'free shipping', 'once off', 'looking for', 'please visit', 'lowest prices', 'low prices', 'yours sincerely',
	'marketing service', 'budget friendly', 'marketing campaigns', 'best regards', 'unique method', 'digital advertising', 'cheap rates',
	'our services', 'to your success', 'get yours', 'regards', 'take a look', 'monthly payment', 'good day', 'i await your response', 'hello from',
	'check us out', 'read more here', 'cryptocurrency', 'check it out', 'free traffic', 'many thanks', 'affiliate', 'all the best', 'vandaag lenen',
	'morgen terug te betalen', 'SEO metrics', 'hi there', 'more info', 'thank you', 'i am sending you', 'customer base', 'we at',
	'passive income', 'investment', 'artificial', 'income from', 'money from', 'register now', 'get more', 'makes money', 'bitcoin miilarder',
	'bitcoin billionaire', 'bitcoin millionaire', 'bitcoin milarder' ];
	$textLower = strtolower($text);
	foreach ($kwrds as $value) {
		if (strpos($textLower, $value) !== false) {
			return true;
		}
	}
    return false;
}

?> 