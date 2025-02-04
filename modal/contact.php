<?php

// Put contacting email here
$php_main_email = "edy@masfarre.com";

//Fetching Values from URL
$php_name = $_POST['ajax_name'];
$php_email = $_POST['ajax_email'];
$php_message = $_POST['ajax_message'];
$php_evtdate = $_POST['ajax_evtdate'];
$php_typeevt = $_POST['ajax_typeevt'];
$php_location = $_POST['ajax_location'];
$php_phone = $_POST['ajax_phone'];

//Sanitizing email
$php_email = filter_var($php_email, FILTER_SANITIZE_EMAIL);


//After sanitization Validation is performed
if (filter_var($php_email, FILTER_VALIDATE_EMAIL)) {
	
	
		$php_subject = "Message from contact form";
		
		// To send HTML mail, the Content-type header must be set
		$php_headers = 'MIME-Version: 1.0' . "\r\n";
		$php_headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$php_headers .= 'From:' . $php_email. "\r\n"; // Sender's Email
		$php_headers .= 'Cc:' . $php_email. "\r\n"; // Carbon copy to Sender
		
		$php_template = '<div style="padding:50px;">Hola ' . $php_name . ',<br/>'
		. 'Gracias por contactarnos.<br/><br/>'
		. '<strong style="color:#f00a77;">Nombre:</strong>  ' . $php_name . '<br/>'
		. '<strong style="color:#f00a77;">Email:</strong>  ' . $php_email . '<br/>'
		. '<strong style="color:#f00a77;">Telefono:</strong>  ' . $php_phone . '<br/>'
		. '<strong style="color:#f00a77;">Fecha:</strong>  ' . $php_evtdate . '<br/>'
		. '<strong style="color:#f00a77;">Tipo:</strong>  ' . $php_typeevt . '<br/>'
		. '<strong style="color:#f00a77;">Lugar:</strong>  ' . $php_location . '<br/>'
		. '<strong style="color:#f00a77;">Mensaje:</strong>  ' . $php_message . '<br/><br/>'
		. 'Esta es una confirmacion del contacto.'
		. '<br/>'
		. 'Lo contactaremos lo mas pronto posible .</div>';
		$php_sendmessage = "<div style=\"background-color:#f5f5f5; color:#333;\">" . $php_template . "</div>";
		
		// message lines should not exceed 70 characters (PHP rule), so wrap it
		$php_sendmessage = wordwrap($php_sendmessage, 70);
		
		// Send mail by PHP Mail Function
		mail($php_main_email, $php_subject, $php_sendmessage, $php_headers);
		mail($php_email, $php_subject, $php_sendmessage, $php_headers);
		echo "";
	
	
} else {
	echo "<span class='contact_error'>* Invalid email *</span>";
}

?>