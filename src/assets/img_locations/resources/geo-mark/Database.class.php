<?php
define('HOST','localhost');
define('DATABASE','wwwcore_geo_mark');
define('USERNAME','wwwcore_geo_mrk');
define('PASSWORD','GeoMark@%987!@#1234');

class Database extends PDO{
    
    function __construct(){
        parent::__construct('mysql:host='.HOST.';dbname='.DATABASE,USERNAME,PASSWORD);
    }
    
    
    function register($request){
        $isUserExists = $this->getUserByMobile($request);
        if(!empty($isUserExists)){
            return false;
        }
        $query = $this->prepare('INSERT INTO `users` (name, email, password, mobile) values(?,?,?,?)');
        $query->execute([
                $request['name'],
                $request['email'],
                self::hash($request['password']),
                $request['mobile']
            ]);
        return self::lastInsertId();
    }
    
    function getUserByMobile($request){
        $query = $this->prepare('SELECT id FROM `users` WHERE mobile = ?');
        $query->execute(
            [
                $request['mobile']
        ]);
        
        return $query->fetch(self::FETCH_ASSOC);
    }
    
    
    function login($request){
        $query = $this->prepare('SELECT * FROM `users` WHERE `mobile` = ? AND `password` = ?');
        $query->execute([
            $request['mobile'],
            self::hash($request['password'])
        ]);
        $record = $query->fetch(self::FETCH_ASSOC);
        if(empty($record)){
            return false;
        }else{
            return $record;
        }
    }
    
    function subscribe($request){
        $date = new DateTime('now');
        $date->modify('+3 month'); // or you can use '-90 day' for deduct
        $expiry = $date->format('Y-m-d');
        $query = $this->prepare('INSERT INTO `subscriptions` (user_id, payment_id, subscription_date, expiry_date) VALUES (?,?,?,?)');
        $query->execute([
            $request['user_id'],
            $request['payment_id'],
            date('Y-m-d'),
            $expiry
        ]);
        return $expiry;
    }
    
    function userSubscription($request){
        $query = $this->prepare('SELECT * FROM  `subscriptions` WHERE  `user_id` = ? ORDER BY `id` DESC LIMIT 1');
        $query->execute([
            $request['user_id']
        ]);
        $record = $query->fetch(self::FETCH_ASSOC);
        if(empty($record)){
            return false;
        }else{
            return $record;
        }
    }
    
    static function hash($string){
         $context = hash_init('sha256', HASH_HMAC, 'GEO-MARK-STRING');
         hash_update($context, $string);
         return hash_final($context);
    }
}

?>