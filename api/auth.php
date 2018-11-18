<?php
session_start();
include("commands.php");
header("Content-Type: application/json");
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST)){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $res = dbSelect("SELECT * FROM user WHERE EMAIL = '".$email."' ");
    $rows = $res->num_rows;
    $dsatz = $res->fetch_object();
    if (($rows != 0 || null) && $dsatz->PASSWORD == $password) {
        $_SESSION['UID'] = $dsatz->USER_ID;
        echo '{"success": true,
        "uid": '.$_SESSION['UID'].'}';
    } else {
        echo '{"success": false,
        "uid": null}';
    }

}else{
    echo '{"success": false, "message": "ONLY POST ACCESS ACCEPTED"}';
}