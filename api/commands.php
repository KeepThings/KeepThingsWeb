<?php
function connectToDB(){
	$mysqli = new mysqli("localhost", "keepthings", "KeepThingsnlbmysql**", "keepthings");
	/* check connection */
	if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", $mysqli->connect_error);
		exit();
	}
}

function dbSelect($dbQuery){
	$mysqli = new mysqli("localhost", "keepthings", "KeepThingsnlbmysql**", "keepthings");
	/* check connection */
	if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", $mysqli->connect_error);
		exit();
	}else{
	    pintf("Command successful");
    }
	if ($result = $mysqli->query($dbQuery)) {
		
		return $result;
	}else{
		return null;
	}
}
function UserIdToName($id){
	$res = dbSelect("SELECT USERNAME FROM User WHERE USER_ID = '".$id."'");
	$dsatz = $res->fetch_object();
	return $dsatz->USERNAME;
}
?>