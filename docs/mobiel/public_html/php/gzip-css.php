<?php
 
   // initialize ob_gzhandler function to send and compress data
   ob_start ("ob_gzhandler");
 
   // send the requisite header information and character set
   header ("content-type: text/css; charset: UTF-8");
 
   // check cached credentials and reprocess accordingly
   header ("cache-control: must-revalidate");
 
   // set variable for duration of cached content (one year)
   $offset = 12 * 30 * 24 * 60 * 60;
 
   // set variable specifying format of expiration header
   $expire = "expires: " . gmdate ("D, d M Y H:i:s", time() + $offset) . " GMT";
 
   // send cache expiration header to the client broswer
   header ($expire);
?>