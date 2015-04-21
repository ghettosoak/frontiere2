// Vendor files
var $ = window.jQuery = window.$ = require('./vendor/jquery-1.11.1.min');

var $$_ = window.$$_ = require('./shared/core'); 

require('./vendor/chosen.jquery.min'); 

// include your scripts here

// require('./shared/textarea-autosize'); 
// require('./shared/img'); 
// require('./shared/map'); 
// require('./shared/parallax'); 
// require('./shared/select'); 
// require('./shared/search'); 

// expose your functions to the global scope for testing
var mxm = {};

// init some things
$(function($){
	$('.header').click(function(){
		console.log('yeah!')
		$('body').toggleClass('sidebar_open')
	})
});


// template for new JS files, a la browserify
$(function($){

});
