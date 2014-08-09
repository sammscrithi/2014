	$(document).ready(function() {
	//for countdown
	JBCountDown({
                secondsColor : "#ffdc50",
                secondsGlow  : "none",
                
                minutesColor : "#9cdb7d",
                minutesGlow  : "none",
                
                hoursColor   : "#378cff",
                hoursGlow    : "none",
                
                daysColor    : "#ff6565",
                daysGlow     : "none",
                
                /* startDate     : "1411097400", */
                startDate : Date.parse("September 19, 2014 09:00")/1000,
                endDate	: "1411322400",
                now         : Date.now()/1000 
                });
  //countdown code ends
  
	var navheight=$('nav').css("height");
	if($('#navhomeimg').css("left")=="5px"){
		$("#navplaceholder").css({"height":navheight});
	}
	//var eventsheight=$('#events').css("height");
	if(screen.height>500){
		$('#eventdetails').css({"height":screen.height-210});
	}
	else{
		$('#eventdetails').css({"height":screen.height-110});
	}
	$("#eventnav").css({"height":$("#eventdetails").css("height")});
	 $(function() {
	$( "#accordion" ).accordion();
	});

	function scrollnav() {
		var scroll = $(this).scrollTop();
		if (scroll > topdist) {
			$('nav').css({"position":"fixed","top":"0", "width":"100%","margin":"0 auto"});
			$("#navhomeimg").css({"display":"block"});
			$("#navplaceholder").css({"display":"block","height":navheight});
		} else {
			$('nav').css({"position":"static","top":"auto"});
			$("#navhomeimg").css({"display":"none"});
			$("#navplaceholder").css({"display":"none"});
		}
	}
	
	function scrollevents(){
		if($("#eventnav li[class='active']").parent().attr('id')==eventcatopen){
		//if(false){
			
		}
		else{
			eventcatopen=$("#eventnav li[class='active']").parent().attr('id');
//			$("#eventnav li[class='active']").parent().prev().click();
			$('#'+eventcatopen).prev().click();
		}
	}
	
	function eventscroll(hash){
		target = $(hash).offset().top - $("#fashion-show").offset().top;
		$('#eventdetails').animate({
		scrollTop: target
		}, 1000);
	}
	
	if(window.location.hash) {
		if ($(window.location.hash).parent().attr('id') == "eventdetails"){
			$('html,body').animate({
				  scrollTop: $("#events").offset().top
				}, 1000);
			eventscroll(window.location.hash);
		}
		else{
			var target=$(window.location.hash);
			window.location.hash='';
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 1000);
			}
		}
	} 
	
	function changeactive(newactive){
		$('#mainnav li[class="active"]').removeClass("active");
		$('#mainnav a[href$="'+newactive+'"]').parent().addClass("active");
	}
	function changeactiveevent(newactive){
		$('#eventnav li[class="active"]').removeClass("active");
		$('#eventnav a[href$="'+newactive+'"]').parent().addClass("active");
	}
	
	$(function() {   //scrolling for the mainnav
		$('a[href*=#]:not([href=#])').not("#eventnav a").click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					scrollTop: target.offset().top
					}, 1000);
					console.log("scrolled to "+target.offset().top);
					changeactive(this.hash);
					return false;
				}
			}
		});
	});
	

	
	$(function() {  //smoothscrolling for clicks that lead to eventspane
		$('#eventnav a[href*=#]:not([href=#])').click(function(event) {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				eventscroll(target);
				scrollevents();
				return false;
			}
		});
	});
	
	var topDist = $('nav').position();
	var topdist=topDist.top;
	var eventcatopen=$("#eventnav li[class='active']").parent().attr('id');
	
	scrollnav();
	$(document).scroll(function(){
		scrollnav();
	});
	$('#eventdetails').scroll(function(){
		scrollevents();
	});
	
	$('#eventdetails').scrollspy({target:"#eventnav", offset:$("#mainnav").height()});
	
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	    po.src = 'https://apis.google.com/js/plusone.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	    po.src = "https://apis.google.com/js/platform.js";
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	
});
