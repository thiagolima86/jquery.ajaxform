jquery.ajaxform
===============


/*
Created by Thiago Lima Developer
Email: thiagolima86@gmail.com
date: 18/10/2013
Plugin: ajaxForm
version: 1.1
*/

How use AjaxForm?
1. Install Jquery and ajaxForm plugin into header Tag.

   <script src="ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
   <script src="ajaxform.js"></script>

2. Use the sintax.
   
   $(selector).ajaxForm(callback);

3. Exemple, How call the plugin fuction

   <script>
	$("#form1").ajaxForm();
   </script>

4. If you need get the callback.

   <script>
	$("#form1").ajaxForm(function(data){
		alert(data);
	});
   </script>

5. Thank's


			Em português do Brasil



Como usar AjaxForm?
1. Instale o Jquery e o plugin ajaxForm dentro da tag head.

   <script src="ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
   <script src="ajaxform.js"></script>

2. Use a seguinte sintax.
   
   $(selector).ajaxForm(callback);

3. Exemplo, como chamar a função do plugin

   <script>
	$("#form1").ajaxForm();
   </script>

4. Se você precisar pegar o retorno do arquivo

   <script>
	$("#form1").ajaxForm(function(data){
		alert(data);
	});
   </script>

5. Grato.

