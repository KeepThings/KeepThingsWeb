<?php
if(isset($_GET) && !empty($_GET)){
    include('commands.php');
    function generateRandomID(){
        $randomID = random_int(0, 9999999);
        $res = dbSelect("SELECT  * FROM user_items WHERE ITEM_ID = '".$randomID."'");
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
        'OWNER' => $_GET['USER_ID'],
        'BORROWER' => $_GET['BORROWER'],
        'DATE_FROM' => $_GET['DATE_FROM'],
        'DATE_TO' => $_GET['DATE_TO'],

    );
    dbRowInsert('user_items', $form_data);
    echo '{"success": true}';
}else{
    echo '{"success": false}';
}