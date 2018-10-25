<?php
include ("commands.php");
if(isset($_GET['UID']) && $_GET['UID'] != ""){
    $res = dbSelect("SELECT * FROM User WHERE USER_ID = '".$_GET['UID']."'");
    $rows = $res->num_rows;
    if($rows == 0 || null){
        echo '{"result": {"success": false} }';
    }else{
        dbSelect("Delete FROM User WHERE USER_ID = '".$_GET['UID']."'");
        echo '{"result": {"success": true} }';
    }



}

