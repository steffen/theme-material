<?

header('Content-Type: application/json');

sleep(500);

echo file_get_contents('./sessions.json');

?>