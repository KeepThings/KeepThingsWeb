<?php
include ("commands.php");
if(isset($_GET['MID']) && $_GET['MID'] != ""){
    $res = dbSelect("SELECT * FROM Messages WHERE MESSAGE_ID = '".$_GET['MID']."'");
    $rows = $res->num_rows;
    if($rows == 0 || null){
        echo '{"result": {"success": false} }';
    }else{
        dbSelect("Delete FROM Messages WHERE MESSAGE_ID = '".$_GET['MID']."'");
        echo '{"result": {"success": true} }';
    }
}

