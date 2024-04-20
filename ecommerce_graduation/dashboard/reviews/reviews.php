<?php

class Reviews
{
    public $db = null;
    public function __construct(DBController $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }
    public function getData()
    {
        $result = $this->db->con->query("SELECT * FROM reviews");
        $resultArray = array();
        while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $resultArray[] = $item;
        }
        return $resultArray;
    }
    public function addReviews($name, $email, $review, $product_id)
    {
        $params = array(
            "name" => $name,
            "email" => $email,
            "review" => $review,
            "product_id" => $product_id,
        );
        $this->insertIntoReviews($params);

    }

    public function insertIntoReviews($params = null, $table = "reviews")
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
    public function deleteReviews($item_id = null)
    {
        if ($item_id != null) {
            $result = $this->db->con->query("DELETE FROM reviews WHERE id={$item_id}");
            return $result;
        }
    }
 
}
