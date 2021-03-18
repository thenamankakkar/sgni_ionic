<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: X-API-KEY, X-API-SECRET, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    $method = $_SERVER['REQUEST_METHOD'];
    if ($method == "OPTIONS") {
        header("HTTP/1.1 200 OK");
    }
    require_once "Database.class.php";
    $db = new Database;
    
    $apiKey = $_SERVER['HTTP_X_API_KEY'];
    $secretKey = $_SERVER['HTTP_X_API_SECRET'];
   
    if(isset($apiKey) && isset($secretKey)){
        if($apiKey != 'wJ3JZ5R90tBYPEWvt3ZGnnerQBEG34NWBiBy3BmDFtbokawC27' || $secretKey != 'JDSCigLiZ9ggReL57uMt0ipR4GY4OBQCCozxfZEGPwICvcwDeJ'){
            $response = ['status'=>'error','message'=>'Unable to authenticate api user'];
            response($response,401);
        }
    }else{
        $response = ['status'=>'error','message'=>'Unable to authenticate api user'];
        response($response,401);
    }
    
   
    $actionName = $_GET['action_name'];
    
    if(!function_exists($actionName)){
        $response = ['status'=>'error','message'=>'API route not found!'];
        response($response,403);
    }else{
        $actionName();
    }
    

    
    function response($data,$headerStatus = 200){
        http_response_code($headerStatus);
        echo json_encode($data);
        exit;
    }
    
    
    function getInputs(){
        $json = file_get_contents('php://input');
        return json_decode($json,true);
    }
    
    
    function register(){
        global $db;
       
        $inputs = getInputs();
        $required = [
            'name','email','password','mobile'    
        ];
        _validation($inputs,$required);
        
        $userId = $db->register($inputs);
        if($userId == false){
            response(['status'=>'error','message'=>'User already exists!'],403);
        }
        response(['status'=>'success','message'=>'user created successfully!','user_id'=>$userId]);
    }
    
    function login(){
        global $db;
        
        $inputs = getInputs();
        $required = ['mobile','password'];
        _validation($inputs,$required);
        $user = $db->login($inputs);
        if($user == false){
            response(['status'=>'error','message'=>'Wrong user details!'],403);
        }else{
            response(['status'=>'success','message'=>'Logged in successfully!','user'=>$user]);
        }
    }
    
    function subscribe(){
        global $db;
        
        $inputs = getInputs();
        $required = ['user_id','payment_id'];
        _validation($inputs,$required);
        $expiryDate = $db->subscribe($inputs);
        response(['status'=>'success','message'=>'Subscription has been updated!','expiry_date'=>$expiryDate]);
    }
    
    function validatesubscription(){
        global $db;
        
        $inputs = getInputs();
        $required = ['user_id'];
        _validation($inputs,$required);
        $userSubscription = $db->userSubscription($inputs);
        if($userSubscription == false){
            response(['status'=>'error','message'=>'No subscription found!'],403);
        }else{
            response(['status'=>'success','message'=>'Subscription found!','last_subscription'=>$userSubscription]);
        }
    }
    
    function getAddress(){
        global $db;
        
        $inputs = getInputs();
        $required = ['lat','long'];
        _validation($inputs,$required);
        

        $ch = curl_init('https://api.opencagedata.com/geocode/v1/json?q='.$inputs['lat'].','.$inputs['long'].'&key=1da5ec3afbc048eeb9e49c9d4aea012c');
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $result = curl_exec($ch);
        
        curl_close($ch);
        $records = json_decode($result,true);
        if(isset($records['results'][0]['formatted'])){
            response(['status'=>'success','address'=>$records['results'][0]['formatted']]);
        }else{
            response(['status'=>'success','address'=>'No Address Found']);
        }
    }
    
    function _validation($request,$required){
        $errorBag = [];
        foreach($required as $key => $input){
            if(!array_key_exists($input,$request) || ($request[$input] == '' || $request[$input] == null)){
                $errorBag[] = [$input=>$input.' value is required!'];
            }
        }
        if(!empty($errorBag)){
            $response = ['status'=>'error','message'=>'required fields are missing!','errors'=>$errorBag];
            response($response,403);
        }
    }
    
    function _dump($data){
        echo "<pre>";
        var_dump($data);
        exit;
    }

?>