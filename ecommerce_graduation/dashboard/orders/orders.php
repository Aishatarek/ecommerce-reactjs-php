<?php

class Orders
{
    public $db = null;
    public function __construct(DBController $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }
    public function getData()
    {
        $result = $this->db->con->query("SELECT * FROM orders");
        $resultArray = array();
        while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $resultArray[] = $item;
        }
        return $resultArray;
    }
    public function addOrder($products, $name, $email, $phone, $address, $city, $country)
    {
        $params = array(
            "products" => $products,
            "name" => $name,
            "email" => $email,
            "phone" => $phone,
            "address" => $address,
            "city" => $city,
            "country" => $country,
        );
        $this->insertIntoOrders($params);
    }

    public function insertIntoOrders($params = null, $table = "orders")
    {
        if ($this->db->con != null) {
            if ($params != null) {
                $columns = implode(',', array_keys($params));
                $values = implode(',', array_values($params));
                $query_string = sprintf("INSERT INTO %s(%s) VALUES(%s)", $table, $columns, $values);

                $this->db->con->query($query_string);

            }
        }
    }
    public function deleteorders($item_id = null)
    {
        if ($item_id != null) {
            $result = $this->db->con->query("DELETE FROM orders WHERE id={$item_id}");
            return $result;
        }
    }
  
}
