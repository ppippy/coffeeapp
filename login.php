<?php
	function my_password_verify($password, $salt, $hash){
		$passwordCrypt = crypt($password, $salt);
		if ($passwordCrypt == $hash){
			return true;
		} else {
			return false;
		}
	}
	
	$username = $_GET['user'];
	$password = $_GET['pwd'];
	
	$mysqli = new mysqli("localhost", "root","btoh3ed4esrewfe2", "coffee");
	$output = "";

	$query = "select * from user where email = '$username'";
	$result = $mysqli->query($query);
	if ($result->num_rows > 0){
		$row = $result->fetch_assoc();
		if (my_password_verify($password, $row['salt'], $row['password'])){
			//logged in successfully
			$userid = $row['userid'];
			$output = array("output" => true, "success" => true, "sessid" => $userid);
		} else {
			//incorrect password
			$output = array("output" => true, "success" => false, "sessid" => "Incorrect Password");
		}
	} else {
		//username not found
	}

	header("Content-Type: application/json");
	$response = $_GET['jsoncallback'] . "(" . json_encode($output) . ");";
	echo $response;
	
	/*
	//echo password_hash($password, PASSWORD_DEFAULT);
	$random_salt = hash('md5', uniqid(openssl_random_pseudo_bytes(16), TRUE));
	$string = "$1$".$random_salt;
	$string = substr($string,0,12);
	$passwordCrypt = crypt($password, $string);
	echo "<pre>\nGEN:\n$password\n$string\n, $passwordCrypt\n</pre>";
	*/
?>