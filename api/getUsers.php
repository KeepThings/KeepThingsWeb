<?php
session_start();
include("commands.php");
if(isset($_GET['UID']) && $_GET['UID'] != ""){
	$res = dbSelect("SELECT * FROM User WHERE USER_ID = '".$_GET['UID']."'");
	$dsatz = $res->fetch_object();
	$rows = $res->num_rows;
	if($rows==0 || null){
		echo '"result": {"success": false}';
	} else{
	$result = array(
	"USER_ID"=>$dsatz->USER_ID,
	"NAME"=>$dsatz->NAME,
	"FIRST_NAME"=>$dsatz->FIRST_NAME,
	"PASSWORD"=>$dsatz->PASSWORD,
	"E-MAIL"=>$dsatz->EMAIL,
	"TEL_NR"=>$dsatz->TEL_NR,
	"USERNAME"=>$dsatz->USERNAME,
	"TYPE"=>$dsatz->TYPE,
	"VERIFIED"=>$dsatz->VERIFIED,
	"success"=>true
	);
	echo json_encode(array('result'=>$result));
	}
	
}else if(isset($_GET['ALL']) && $_GET['ALL'] == "true"){
	$res = dbSelect("SELECT * FROM User");
	$result = array();
	if($rows==0 || null){
		echo '"result": {"success": false}';
	} else{
	while($dsatz = $res->fetch_object()){
		array_push($result,array(
		"USER_ID"=>$dsatz->USER_ID,
		"NAME"=>$dsatz->NAME,
		"FIRST_NAME"=>$dsatz->FIRST_NAME,
		"E-MAIL"=>$dsatz->E-MAIL,
		"TEL_NR"=>$dsatz->TEL_NR,
		"USERNAME"=>$dsatz->USERNAME,
		"TYPE"=>$dsatz->TYPE,
		"VERIFIED"=>$dsatz->VERIFIED,
		));
	}
	array_push($result,array("success"=>true));
	echo json_encode(array('result'=>$result));
	}
}else if(isset($_SESSION['UID']) && $_SESSION['UID'] != "") {
    $res = dbSelect("SELECT * FROM User WHERE USER_ID = '" . $_SESSION['UID'] . "'");
    $dsatz = $res->fetch_object();
    $rows = $res->num_rows;
    if ($rows == 0 || null) {
        echo '"result": {"success": false}';
    } else {
        $result = array(
            "USER_ID" => $dsatz->USER_ID,
            "NAME" => $dsatz->NAME,
            "FIRST_NAME" => $dsatz->FIRST_NAME,
            "E-MAIL" => $dsatz->EMAIL,
            "TEL_NR" => $dsatz->TEL_NR,
            "USERNAME" => $dsatz->USERNAME,
            "TYPE" => $dsatz->TYPE,
            "VERIFIED" => $dsatz->VERIFIED,
            "success" => true
        );
        echo json_encode(array('result' => $result));
    }
}
