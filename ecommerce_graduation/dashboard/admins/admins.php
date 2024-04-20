<?php
class Admins
{
    public $db = null;
    public function __construct(DBController $db)
    {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }
    public function addAdmin($name, $email, $password, $phone)
    {
        if (isset($name)  && isset($email) && isset($phone) && isset($password)) {
            $sqll = "SELECT * FROM admin WHERE email=$email";
            $resultt =  $this->db->con->query($sqll);
            if ($resultt->num_rows > 0) {
                echo "<script>alert('the email already exist')</script>";
            } else {
                $this->db->con->query("INSERT INTO admin(name, email,password,phone) VALUES($name, $email, $password, $phone)");
            }
        }
    }
    public function signIn($email, $password)
    {
        if ($this->db->con != null) {
            if (isset($email) && isset($password)) {
                $sql = "SELECT * FROM admin WHERE email=$email AND password=$password";
                $result =  $this->db->con->query($sql);
                if ($result->num_rows > 0) {
                    $row = mysqli_fetch_assoc($result);
                    $_SESSION['admin_id'] = $row['id'];
                    setcookie('admin_id', $row['id'], time() + (86400 * 30), "/");

                    if (isset($_COOKIE['id']) ) {
                        $_SESSION['admin_id'] = $_COOKIE['admin_id'];
                    } else {
                        $_SESSION['admin_id'] = $row['id'];
                    }

                    header("Location: dashboard/dashboard.php");
                } else {
                    echo "<script>alert('Woops! Email or Password is Wrong.')</script>";
                }
            }
        } 
    }
    public function getData()
    {
        $result = $this->db->con->query("SELECT * FROM admin");
        $resultArray = array();
        while ($item = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            $resultArray[] = $item;
        }
        return $resultArray;
    }
    public function deleteAdmin($item_id = null)
    {
        if ($item_id != null) {
            $this->db->con->query("DELETE FROM admin WHERE id={$item_id}");
        }
    }
    public function updateAdmin($item_id = null,$name, $email, $phone)
    {
        if ($item_id != null) {
            $this->db->con->query("UPDATE admin SET name={$name}, email={$email}, phone={$phone} WHERE id={$item_id}");
        }
    }
    public function updateAdminPassword($item_id = null,$password)
    {
        if ($item_id != null) {
            $this->db->con->query("UPDATE admin SET password={$password} WHERE id={$item_id}");
        }
    }
}
