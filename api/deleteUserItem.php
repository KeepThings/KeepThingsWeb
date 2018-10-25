<?php
include ("commands.php");
if(isset($_GET['IID']) && $_GET['IID'] != ""){
    $res = dbSelect("SELECT * FROM User_Items WHERE ITEM_ID = '".$_GET['IID']."'");
    $rows = $res->num_rows;
    if($rows == 0 || null){
        echo '{"result": {"success": false} }';
    }else{
        dbSelect("Delete FROM User_Items WHERE ITEM_ID = '".$_GET['IID']."'");
        echo '{"result": {"success": true} }';
    }
}

