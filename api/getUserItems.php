<?php 
include("commands.php");

if(isset($_GET['IID']) && $_GET['IID'] != ""){
	$res = dbSelect("SELECT * FROM User_Items WHERE ITEM_ID = '".$_GET['IID']."'");
    $rows = $res->num_rows;
	if($rows == 0 || null){
        echo '{"result": {"success": false} }';
    }else{
        $dsatz = $res->fetch_object();
        $result = array(
            "ITEM_ID"=>$dsatz->ITEM_ID,
            "ITEM_NAME"=>$dsatz->ITEM_NAME,
            "ITEM_DESC"=>$dsatz->ITEM_DESC,
            "OWNER"=>UserIdToName($dsatz->OWNER),
            "BORROWER"=>$dsatz->BORROWER,
            "DATE_FROM"=>$dsatz->DATE_FROM,
            "DATE_TO"=>$dsatz->DATE_TO,
            "success"=>true
        );
        echo json_encode(array('result'=>$result));
    }

	
}else if(isset($_GET['UID']) && $_GET['UID'] != ""){
	$res = dbSelect("SELECT * FROM User_Items WHERE OWNER = '".$_GET['UID']."'");
    $rows = $res->num_rows;
	$result = array();
    if($rows == 0 || null){

            array_push($result, array(
                "ITEM_ID" => null,
                "ITEM_NAME" => null,
                "ITEM_DESC" => null,
                "OWNER" => null,
                "BORROWER" => null,
                "DATE_FROM" =>null,
                "DATE_TO" => null,
                "success" => false
            ));

        echo json_encode(array('result' => $result));
    }else {
        while ($dsatz = $res->fetch_object()) {
            array_push($result, array(
                "ITEM_ID" => $dsatz->ITEM_ID,
                "ITEM_NAME" => $dsatz->ITEM_NAME,
                "ITEM_DESC" => $dsatz->ITEM_DESC,
                "OWNER" => UserIdToName($dsatz->OWNER),
                "BORROWER" => $dsatz->BORROWER,
                "DATE_FROM" => $dsatz->DATE_FROM,
                "DATE_TO" => $dsatz->DATE_TO,
                "success"=> true
            ));
        }

        echo json_encode(array('result' => $result));

    }
}


