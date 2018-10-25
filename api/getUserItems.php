<?php 
include("commands.php");

if(isset($_GET['IID']) && $_GET['IID'] != ""){
	$res = dbSelect("SELECT * FROM User_Items WHERE ITEM_ID = '".$_GET['IID']."'");
	$dsatz = $res->fetch_object();
	$result = array(
	"ID"=>$dsatz->ITEM_ID,
	"Name"=>$dsatz->ITEM_NAME,
	"Desc"=>$dsatz->ITEM_DESC,
	"Owner"=>$dsatz->OWNER,
	"Borrower"=>$dsatz->BORROWER,
	"Date_From"=>$dsatz->DATE_FROM,
	"Date_To"=>$dsatz->DATE_TO
	);
	echo $dsatz->DATE_TO;
	echo json_encode(array('result'=>$result));
	
}else if(isset($_GET['UID']) && $_GET['UID'] != ""){
	$res = dbSelect("SELECT * FROM User_Items WHERE OWNER = '".$_GET['UID']."'");
	$result = array();
	while($dsatz = $res->fetch_object()){
		array_push($result,array(
		"ID"=>$dsatz->ITEM_ID,
		"Name"=>$dsatz->ITEM_NAME,
		"Desc"=>$dsatz->ITEM_DESC,
		"Owner"=>UserIdToName($dsatz->OWNER),
		"Borrower"=>$dsatz->BORROWER,
		"Date_From"=>$dsatz->DATE_FROM,
		"Date_To"=>$dsatz->DATE_TO
		
		));
	}
	echo json_encode(array('result'=>$result));
}


?>