/*
Created by Thiago Lima Developer
Email: thiagolima86@gmail.com
created at: 18/10/2013
Plugin: ajaxForm
version: 1.5
*/

jQuery.fn.ajaxForm = function (callback=false) {

  
  $(this).submit(function(e){
    e.preventDefault();
    elem = $(this)
    var serial = $(this).serialize()
    var action = $(this).attr("action")
    var method = $(this).attr("method").toUpperCase()

    var args = {
      type: method,
      url: action,
      data: serial          
    }
    if (callback != false) {      
      if (typeof(callback) == "function"){
        args.success = callback
        $.ajax(args);
        $(this).each (function() { this.reset(); });

      } else if (typeof(callback) == "object") {
        callback = $.extend({ 
          done: false,
          fail: false,
          auto_reset: true
        }, callback || {});

        var jqxhr = $.ajax(args);
        if (callback.done) jqxhr.done(callback.done);
        if (callback.fail) jqxhr.fail(callback.fail);
        if (callback.auto_reset) jqxhr.success(function(){elem.each (function() { this.reset() })})
        return false;
      }

    } else{
      $.ajax(args);
    }

   
    return false;
    });
  }


