<?php 
include("commands.php");
if(isset($_GET['MID']) && $_GET['MID'] != ""){
	$res = dbSelect("SELECT * FROM Messages WHERE MESSAGE_ID = '".$_GET['MID']."'");
	$dsatz = $res->fetch_object();
	$rows = $res->num_rows;
	if($rows==0 || null){
		echo '"result": {"success": false}';
	} else{
	$result = array(
	"MESSAGE_ID"=>$dsatz->MESSAGE_ID,
	"MESSAGE"=>$dsatz->MESSAGE,
	"SENDER"=>$dsatz->SENDER,
	"RECEIVER_ID"=>$dsatz->RECEIVER_ID,
	"SENT_TIMESTAMP"=>$dsatz->SENT_TIMESTAMP,
	"success"=>true
	);
	echo json_encode(array('result'=>$result));
	}
}else if(isset($_GET['SID']) && $_GET['RID']) && $_GET['SID'] != "" && $_GET['ALL'] != "") {
	$res = dbSelect("SELECT * FROM Messages WHERE SENDER_ID = '".$_GET['SID']."' AND RECEIVER_ID = '".$_GET['RID']."'");
	$result = array();
	$rows = $res->num_rows;
	if($rows==0 || null){
		echo '"result": {"success": false}';
	} else{
	while($dsatz = $res->fetch_object()){
		array_push($result,array(
		"MESSAGE_ID"=>$dsatz->MESSAGE_ID,
		"MESSAGE"=>$dsatz->MESSAGE,
		"SENDER"=>$dsatz->SENDER,
		"RECEIVER_ID"=>$dsatz->RECEIVER_ID,
		"SENT_TIMESTAMP"=>$dsatz->SENT_TIMESTAMP
		));
	}
	array_push($result,array("success"=>true));
	echo json_encode(array('result'=>$result));
	}
}
?>