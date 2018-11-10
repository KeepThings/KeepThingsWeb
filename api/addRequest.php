<?php

if(isset($_GET) && !empty($_GET)){
    include('commands.php');
    function generateRandomID(){
        $randomID = random_int(0, 9999999);
        $res = dbSelect("SELECT  * FROM marketplace_items WHERE ITEM_ID = '".$randomID."'");
        $rows = $res->num_rows;
        if($rows == 0 || null){
            return $randomID;
        }else{
            generateRandomID();
        }
    }

        $form_data = array(
        'ITEM_ID' => generateRandomID(),
        'ITEM_NAME' => $_GET['ITEM_NAME'],
        'ITEM_DESC' => $_GET['ITEM_DESC'],
        'USER_ID' => $_GET['USER_ID'],
        'DATE_FROM' => $_GET['DATE_FROM'],
        'DATE_TO' => $_GET['DATE_TO'],

    );
    dbRowInsert('marketplace_items', $form_data);
    echo '{"success": true}';
}else{
    echo '{"success": false}';
}