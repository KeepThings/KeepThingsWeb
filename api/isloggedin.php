<?php
session_start();

if(isset($_SESSION['UID'])){
    echo '{"status": true}';
}else{
    echo '{"status": false}';
}