<?php

class Colors
{
    public $db = null;
    public function __construct(DBController $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }
    public function getData()
    {
        $result = $this->db->con->query("SELECT * FROM colors ORDER BY id DESC");
        $resultArray = array();
        while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $resultArray[] = $item;
        }
        return $resultArray;
    }
    public function addColors( $title, $title_ar)
    {

        if (isset($title)) {
            $params = array(
                "title" => $title,
                "title_ar" => $title_ar,
            );
            $this->insertIntoColors($params);
        }
    }
    public function insertIntoColors($params = null, $table = "colors")
    {
        if ($this->db->con != null) {
            if ($params != null) {
                $columns = implode(',', array_keys($params));
                $values = implode(',', array_values($params));
                $query_string = sprintf("INSERT INTO %s(%s) VALUES(%s)", $table, $columns, $values);
                $result = $this->db->con->query($query_string);

                return $result;
            }
        }
    }
    public function deleteColors($item_id = null)
    {
        if ($item_id != null) {
            $result = $this->db->con->query("DELETE FROM colors WHERE id={$item_id}");
            return $result;
        }
    }

}
