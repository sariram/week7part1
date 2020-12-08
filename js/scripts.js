jQuery(function() {let my_switch = false;$('#b1').click(function () {if ( my_switch == false ) {my_switch = true;$('p').hide();$('#slide').show();} else {my_switch = false;}});});

jQuery(document).ready(function($){
	$('#button1').on({'click': function(){$('#hi').attr('src','images/picasso.jpg');}});
	$('#button2').on({'click': function(){$('#hi').attr('src','images/cezanne.png');}});
	$('#button3').on({'click': function(){$('#hi').attr('src','images/benode.jpg');}});
	$('#button4').on({'click': function(){$('#hi').attr('src','images/chagall.jpg');}});
	$('#button5').on({'click': function(){$('#hi').attr('src','images/keefe.png');}});});

function refreshPage(){
	window.location.reload();}
