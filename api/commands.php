<?php
header("Access-Control-Allow-Origin: *");

function connectToDB(){
	$mysqli = new mysqli("localhost", "root", "", "keepthings");
	/* check connection */
	if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", $mysqli->connect_error);
		exit();
	}
}
function dbSelect($dbQuery){
	$mysqli = new mysqli("localhost", "root", "", "keepthings");
	/* check connection */
	if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", $mysqli->connect_error);
		exit();
	}else{
    }
	if ($result = $mysqli->query($dbQuery)) {
		
		return $result;
	}else{
		return null;
	}
}
function dbUpdate($dbQuery){
	$mysqli = new mysqli("localhost", "root", "", "keepthings");
	/* check connection */
	if ($mysqli->connect_errno) {
		printf("Connect failed: %s\n", $mysqli->connect_error);
		exit();
	}else{
    }
	$mysqli->query($dbQuery);
		
}
function UserIdToName($id){
	$res = dbSelect("SELECT USERNAME FROM User WHERE USER_ID = '".$id."'");
	$dsatz = $res->fetch_object();
	return $dsatz->USERNAME;
}

function dbRowInsert($table_name, $form_data)
{
    $mysqli = new mysqli("localhost", "root", "", "keepthings");
    // retrieve the keys of the array (column titles)
    $fields = array_keys($form_data);

    // build the query
    $sql = "INSERT INTO ".$table_name."
    (`".implode('`,`', $fields)."`)
    VALUES('".implode("','", $form_data)."')";

    // run and return the query result resource
    return $mysqli->query($sql);
}
