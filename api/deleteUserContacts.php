<?php
include ("commands.php");
if(isset($_GET['UID']) && $_GET['UID'] != ""){
    $res = dbSelect("SELECT * FROM User WHERE USER_ID = '".$_GET['UID']."'");
    $rows = $res->num_rows;
    if($rows == 0 || null){
        echo "{success: false}";
    }else{
        $res2 = dbSelect("Select *  FROM UserContactAssignment WHERE USER_ID = '".$_GET['UID']."'");
        while ($dsatz = $res2->fetch_object()) {
            $contactId = $dsatz->CONTACT_ID;
            $res3 = dbSelect("DELETE FROM Users WHERE USER_ID = '".$contactId."'");
        }
        dbSelect("DELETE FROM UserContactAssignment WHERE USER_ID = '".$_GET['UID']."'");

        echo "{success: true}";
    }
    // Noch nicht ganz durchdacht!!!!



}

