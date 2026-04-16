<?php
$conn = new mysqli("localhost", "root", "", "cv_database");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

if ($data === null) {
    echo json_encode(["message" => "No data received"]);
    exit;
}

if (!isset($data['name']) || empty($data['name'])) {
    echo json_encode(["message" => "Name is required"]);
    exit;
}

// ✅ Save to database
$name = $conn->real_escape_string($data['name']);
$sql = "INSERT INTO contacts (name) VALUES ('$name')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Data saved successfully"]);
} else {
    echo json_encode(["message" => "Error saving data: " . $conn->error]);
}
?>