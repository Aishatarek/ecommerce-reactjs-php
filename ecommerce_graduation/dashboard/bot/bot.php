<?php

class Bot
{
    public $db = null;
    public function __construct(DBController $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }
    public function getData()
    {
        $result = $this->db->con->query("SELECT * FROM bot ORDER BY id DESC");
        $resultArray = array();
        while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $resultArray[] = $item;
        }
        return $resultArray;
    }
    public function addBot( $queries, $replies)
    {

        if (isset($queries)) {
            $params = array(
                "queries" => $queries,
                "replies" => $replies,
            );
            $this->insertIntoBot($params);
        }
    }
    public function insertIntoBot($params = null, $table = "bot")
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
    public function deleteBot($item_id = null)
    {
        if ($item_id != null) {
            $result = $this->db->con->query("DELETE FROM bot WHERE id={$item_id}");
            return $result;
        }
    }

}
