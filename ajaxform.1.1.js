/*
Created by Thiago Lima Developer
Email: thiagolima86@gmail.com
date: 18/10/2013
Plugin: ajaxForm
version: 1.1
*/

jQuery.fn.ajaxForm = function (callback) {

//var options = $.extend()

  $(this).submit(function(){
    var serial = $(this).serialize();
    var action = $(this).attr("action");
    var method = $(this).attr("method").toUpperCase();

    $.ajax({
            type: method,
            url: action,
            data: serial,
            success: callback           
        });
    $(this).each (function() { this.reset(); });
    return false;
    });
}
