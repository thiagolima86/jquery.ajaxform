# jquery.ajaxform

## Required Jquery
```html
<script src="ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
   <script src="ajaxform.js"></script>
```

## Use the sintax.
   
   ```$(selector).ajaxForm(callback)```

## Exemple to use
   
```$("#form1").ajaxForm()```

## Simple callback.
This is a done callback
```javascript   
	$("#form1").ajaxForm(function(data){
		alert(data);
	});
```

## Advanced callback and option.
This is a done callback
```javascript   
	$("#form1").ajaxForm(
		done: {function(data){ alert(data) },
		fail: {function(data){ alert(data.responseText) },
		auto_reset:  false
	});
```
## Options/callback.
* done: Is the success callback [default:false]
* fail: Is the fail callback   [default:false]
* auto_reset: This option, when true, reset the form fields when success send	 [default:true]
   

### Thank's

