<?php

echo '<pre>';
print_r(  html_entity_decode( $_POST['wat'] ) );

echo '</pre>';

?>
<form action="" method="post" >
	<input type="text" name="wat" value='"{"webkit-html-attribute-value":{"name":"webkit-html-attribute-value","color":"#fff","font-style":"italic"},"webkit-html-attribute":{"name":"webkit-html-attribute","color":"#fff","font-style":"italic"},"webkit-javascript-comment":{"name":"webkit-javascript-comment","color":"#fff","font-style":"italic"},"webkit-javascript-string":{"name":"webkit-javascript-string","color":"#fff","font-style":"italic"},"webkit-javascript-number":{"name":"webkit-javascript-number","color":"#fff","font-style":"italic"},"webkit-javascript-ident":{"name":"webkit-javascript-ident","color":"#fff","font-style":"italic"}}"' />
	<input type="submit" value="submit" />
</form>
