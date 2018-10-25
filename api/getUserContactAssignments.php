<?php 
include("commands.php");
if(isset($_GET['UID']) && $_GET['UID'] != ""){
	$res = dbSelect("SELECT * FROM UserContactAssignment WHERE USER_ID = '".$_GET['UID']."'");
	$result = array();
	$rows = $res->num_rows;
	if($rows==0 || null){
		echo '"result": {"success": false}';
	} else{
	while($dsatz = $res->fetch_object()){
		$res2 = dbSelect("SELECT * FROM User WHERE USER_ID = '".$dsatz->CONTACT_ID."'");
		$dsatz2 = $res2->fetch_object();
		array_push($result,array(
		"USER_ID"=>$dsatz2->USER_ID,
		"NAME"=>$dsatz2->NAME,
		"FIRST_NAME"=>$dsatz2->FIRST_NAME,
		"E-MAIL"=>$dsatz2->E-MAIL,
		"TEL_NR"=>$dsatz2->TEL_NR,
		"USERNAME"=>$dsatz2->USERNAME,
		"TYPE"=>$dsatz2->TYPE,
		"VERIFIED"=>$dsatz2->VERIFIED
		));
	}
	array_push($result,array("success"=>true));
	echo json_encode(array('result'=>$result));
	}
}
?>