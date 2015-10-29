<?

header('Content-Type: application/json');

sleep(15);

echo file_get_contents('./contacts.json');

?>