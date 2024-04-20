<?php

class Categories
{
    public $db = null;
    public function __construct(DBController $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }
    public function getData()
    {
        $result = $this->db->con->query("SELECT * FROM categories ORDER BY id DESC");
        $resultArray = array();
        while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $resultArray[] = $item;
        }
        return $resultArray;
    }
    public function addCategories($img, $title, $title_ar)
    {
        function img($imgg)
        {
            if (isset($imgg) && $imgg["error"] == 0) {
                $allowed = array("webp" => "image/webp", "jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png", "rar" => "application/rar", "pdf" => "application/pdf");
                $filename = rand(0, 1000) . $imgg["name"];
                $filetype = $imgg["type"];
                $filesize = $imgg["size"];
                $ext = pathinfo($filename, PATHINFO_EXTENSION);
                if (!array_key_exists($ext, $allowed)) die("Error: Please select a valid file format.");
                $maxsize = 5 * 1024 * 1024;
                if ($filesize > $maxsize) die("Error: File size is larger than the allowed limit.");
                if (in_array($filetype, $allowed)) {
                    if (file_exists("../../uploads/categories/" . $filename)) {
                        echo $filename . " is already exists.";
                    } else {
                        $result = move_uploaded_file($imgg["tmp_name"], "../../uploads/categories/" . $filename);
                    }
                } else {
                    echo "Error: There was a problem uploading your file. Please try again.";
                }
                if ($result) {
                    return "'" . $filename . "'";
                } else {
                    echo "Error: " . $imgg["error"];
                }
            }
        }
        $img = img($img);

        if (isset($title) && isset($img)) {
            $params = array(
                "img" => $img,
                "title" => $title,
                "title_ar" => $title_ar,
            );
            $this->insertIntoCategories($params);
        }
    }
    public function insertIntoCategories($params = null, $table = "categories")
    {
        if ($this->db->con != null) {
            if ($params != null) {
                $columns = implode(',', array_keys($params));
                $values = implode(',', array_values($params));
                $query_string = sprintf("INSERT INTO %s(%s) VALUES(%s)", $table, $columns, $values);
                // echo  $query_string;
                $result = $this->db->con->query($query_string);

                return $result;
            }
        }
    }
    public function deleteCategories($item_id = null)
    {
        if ($item_id != null) {
            $result = $this->db->con->query("DELETE FROM categories WHERE id={$item_id}");
            return $result;
        }
    }
    public function updateCategories($item_id = null, $img,  $title, $title_ar)
    {
        if ($item_id != null) {
            function img($imgg)
            {
                if (isset($imgg) && $imgg["error"] == 0) {
                    $allowed = array("webp" => "image/webp", "jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png", "rar" => "application/rar", "pdf" => "application/pdf");
                    $filename = rand(0, 1000) . $imgg["name"];
                    $filetype = $imgg["type"];
                    $filesize = $imgg["size"];
                    $ext = pathinfo($filename, PATHINFO_EXTENSION);
                    if (!array_key_exists($ext, $allowed)) die("Error: Please select a valid file format.");
                    $maxsize = 5 * 1024 * 1024;
                    if ($filesize > $maxsize) die("Error: File size is larger than the allowed limit.");
                    if (in_array($filetype, $allowed)) {
                        if (file_exists("../../uploads/categories/" . $filename)) {
                            echo $filename . " is already exists.";
                        } else {
                            $result = move_uploaded_file($imgg["tmp_name"], "../../uploads/categories/" . $filename);
                        }
                    } else {
                        echo "Error: There was a problem uploading your file. Please try again.";
                    }
                    if ($result) {
                        return "'" . $filename . "'";
                    } else {
                        echo "Error: " . $imgg["error"];
                    }
                }
            }
            $this->db->con->query("UPDATE categories SET title={$title},title_ar={$title_ar} WHERE id={$item_id}");
            if (isset($img['name']) && isset($img)) {
                $img = img($img);
                $this->db->con->query("UPDATE categories SET img={$img} WHERE id={$item_id}");
            }
        }
    }
}
