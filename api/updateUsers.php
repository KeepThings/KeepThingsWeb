<?php
include("commands.php");
if(isset($_GET['UID']) && $_GET['UID'] != ""){
	
	$res = dbSelect("SELECT * FROM User WHERE USER_ID = '".$_GET['UID']."'");
	$dsatz = $res->fetch_object();
	$rows = $res->num_rows;
	
	if($rows == 0 || null){
		echo '"result": {"success": false}';
	}else{
	dbUpdate("UPDATE User SET 
	
	NAME ='".$_GET['NAME']."',
	FIRST_NAME = '".$_GET['FIRST_NAME']."',
	E-MAIL = '".$_GET['E-MAIL']."',
	TEL_NR = '".$_GET['TEL_NR']."',
	USERNAME = '".$_GET['USERNAME']."',,
	TYPE = '".$_GET['TYPE']."',
	VERIFIED = '".$_GET['VERIFIED']."'
	
	WHERE USER_ID = '".$_GET['UID']."'");
	
	echo json_encode(array('"result": {"success": true}'));
	}
}
?>