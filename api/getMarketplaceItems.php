<?php 
include("commands.php");
if(isset($_GET['IID']) && $_GET['IID'] != ""){
	$res = dbSelect("SELECT * FROM Marketplace_Items WHERE ITEM_ID = '".$_GET['IID']."'");
	$dsatz = $res->fetch_object();
	$result = array(
	"ITEM_ID"=>$dsatz->ITEM_ID,
	"ITEM_NAME"=>$dsatz->ITEM_NAME,
	"ITEM_DESC"=>$dsatz->ITEM_DESC,
	"USERNAME"=>$dsatz->UserIdToName($dsatz->USER_ID),
	"BORROWER"=>$dsatz->BORROWER,
	"DATE_FROM"=>$dsatz->DATE_FROM,
	"DATE_TO"=>$dsatz->DATE_TO
	);
	echo $dsatz->DATE_TO;
	echo json_encode(array('result'=>$result));
	
}else if(isset($_GET['All']) && $_GET['All'] == "true"){
	$res = dbSelect("SELECT * FROM Marketplace_Items");
	$result = array();
	while($dsatz = $res->fetch_object()){
		array_push($result,array(
		"ITEM_ID"=>$dsatz->ITEM_ID,
		"ITEM_NAME"=>$dsatz->ITEM_NAME,
		"ITEM_DESC"=>$dsatz->ITEM_DESC,
		"USERNAME"=>$dsatz->UserIdToName($dsatz->USER_ID),
		"BORROWER"=>$dsatz->BORROWER,
		"DATE_FROM"=>$dsatz->DATE_FROM,
		"DATE_TO"=>$dsatz->DATE_TO
		));
	}
	echo json_encode(array('result'=>$result));
}
?>