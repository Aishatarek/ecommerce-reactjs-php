<?php

class Product
{
    public $db = null;
    public function __construct(DBController $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }
    public function getData()
    {
        $result = $this->db->con->query("SELECT * FROM product");
        $resultArray = array();
        while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $resultArray[] = $item;
        }
        return $resultArray;
    }
    public function getDataa()
    {
        $result = $this->db->con->query("SELECT * FROM product");
        return $result;
    }

    public function getRecentedData()
    {
        $result = $this->db->con->query("SELECT * FROM product ORDER BY id DESC LIMIT 3");
        $resultArray = array();
        while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $resultArray[] = $item;
        }
        return $resultArray;
    }


    public function addProduct($name, $price, $old_price, $description, $weight, $dimensions, $name_ar, $description_ar, $color_id, $image, $image2, $image3, $image4, $category_id)
    {
        function img($imgg)
        {
            if (isset($imgg) && $imgg["error"] == 0) {
                $allowed = array("jpg" => "image/jpg","webp" => "image/webp", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png", "rar" => "application/rar", "pdf" => "application/pdf");
                $filename = rand(0, 1000) . $imgg["name"];
                $filetype = $imgg["type"];
                $filesize = $imgg["size"];
                $ext = pathinfo($filename, PATHINFO_EXTENSION);
                if (!array_key_exists($ext, $allowed)) {
                    die("Error: Please select a valid file format.");
                } else {
                    $filename = rand(0, 1000) . "productImage." . $ext;
                }
                $maxsize = 5 * 1024 * 1024;
                if ($filesize > $maxsize) die("Error: File size is larger than the allowed limit.");
                if (in_array($filetype, $allowed)) {
                    if (file_exists("../../uploads/products/" . $filename)) {
                        echo $filename . " is already exists.";
                    } else {
                        $result = move_uploaded_file($imgg["tmp_name"], "../../uploads/products/" . $filename);
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
        $image = img($image);
        $image2 = img($image2);
        $image3 = img($image3);
        if (isset($image4) && isset($image4['name']) && !empty($image4['name'])) {
            $image4 = img($image4);
        } else {
            $image4 = 'NULL';
        }


        if (isset($name) && isset($price) && isset($description) && isset($image) && isset($image2) && isset($image3)) {

            $params = array(
                "name" => $name,
                "price" => $price,
                "old_price" => $old_price,
                "description" => $description,
                "weight" => $weight,
                "dimensions" => $dimensions,
                "name_ar" => $name_ar,
                "description_ar" => $description_ar,
                "color_id" => $color_id,
                "image" => $image,
                "image2" => $image2,
                "image3" => $image3,
                "image4" => $image4,
                "category_id" => $category_id,
            );
            $this->insertIntoProduct($params);
        }
    }
    public function insertIntoProduct($params = null, $table = "product")
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
    public function deleteProduct($item_id = null)
    {
        if ($item_id != null) {
            $result = $this->db->con->query("DELETE FROM product WHERE id={$item_id}");
            return $result;
        }
    }
    public function updateProduct($item_id = null, $name, $price, $old_price, $description, $weight, $dimensions, $name_ar, $description_ar, $color_id, $image, $image2, $image3, $image4, $category_id)
    {
        if ($item_id != null) {
            function img($imgg)
            {
                if (isset($imgg) && $imgg["error"] == 0) {
                    $allowed = array("jpg" => "image/jpg","webp" => "image/webp", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png", "rar" => "application/rar", "pdf" => "application/pdf");
                    $filename = rand(0, 1000) . $imgg["name"];
                    $filetype = $imgg["type"];
                    $filesize = $imgg["size"];
                    $ext = pathinfo($filename, PATHINFO_EXTENSION);
                    if (!array_key_exists($ext, $allowed)) {
                        die("Error: Please select a valid file format.");
                    } else {
                        $filename = rand(0, 1000) . "productImage." . $ext;
                    }
                    $maxsize = 5 * 1024 * 1024;
                    if ($filesize > $maxsize) die("Error: File size is larger than the allowed limit.");
                    if (in_array($filetype, $allowed)) {
                        if (file_exists("../../uploads/products/" . $filename)) {
                            echo $filename . " is already exists.";
                        } else {
                            $result = move_uploaded_file($imgg["tmp_name"], "../../uploads/products/" . $filename);
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
            $this->db->con->query("UPDATE product SET name ={$name},price={$price},old_price={$old_price},description={$description},name_ar={$name_ar},description_ar={$description_ar},weight={$weight},dimensions={$dimensions},color_id={$color_id},category_id={$category_id} WHERE id={$item_id}");
            if (isset($image) && isset($image['name'])) {
                $image = img($image);
                $this->db->con->query("UPDATE product SET image={$image} WHERE id={$item_id}");
            }
            if (isset($image2) && isset($image2['name'])) {
                $image2 = img($image2);
                $this->db->con->query("UPDATE product SET image2={$image2} WHERE id={$item_id}");
            }
            if (isset($image3) && isset($image3['name'])) {
                $image3 = img($image3);
                $this->db->con->query("UPDATE product SET image3={$image3} WHERE id={$item_id}");
            }
            if (isset($image4) && isset($image4['name'])) {
                $image4 = img($image4);
                $this->db->con->query("UPDATE product SET image4={$image4} WHERE id={$item_id}");
            }
        }
    }
}
