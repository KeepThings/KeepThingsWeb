<?php 
include("commands.php");
if(isset($_GET['IID']) && $_GET['IID'] != null){

	$res = dbSelect("SELECT * FROM Marketplace_Items WHERE ITEM_ID = '".$_GET['IID']."'");
	$dsatz = $res->fetch_object();
	$rows = $res->num_rows;
	
	if($rows==0 || null){
		echo '"result": {"success": false}';
	} else{
	dbSelect("UPDATE Marketplace_Items SET 

	ITEM_NAME = '".$_GET['ITEM_NAME']."',
	ITEM_DESC = '".$_GET['ITEM_DESC']."',
	USERNAME = '".UserIdToName($_GET['USER_ID'])."',
	BORROWER = '".$_GET['BORROWER']."',
	DATE_FROM = '".$_GET['DATE_FROM']."',
	DATE_TO = '".$_GET['DATE_TO']."',
	
	WHERE ITEM_ID = '".$_GET['IID']."'");

	echo json_encode(array('"result": {"success": true}'));
	}
}