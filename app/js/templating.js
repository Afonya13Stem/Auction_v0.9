

$(document).ready(function(){
	
		// function for render lots
	
		function templating(){
		var lots1 = JSON.parse(window.localStorage.getItem('lots'));
		var content = document.getElementById("template1").innerHTML;
		var template = Handlebars.compile(content);
		var contentData = template(lots1);
		document.getElementById("cont_load").innerHTML += contentData;
		$('.selling_item').hide();
		}

	
		// first load

	$('#content').load('home.html',function(){
		templating();

		// binding click event for each lot after render

		$("a.item_buy").click(function (e) {
		e.preventDefault();
		var url = $(this).attr("href");


		// first load need to be in history

		History.pushState(null, document.title, url);
		$("#content").load(url, function() {
		var id = $('.sell_item-elem').attr('id');
			if(window.localStorage.getItem(id)){
			var dealsNew = JSON.parse(window.localStorage.getItem(id));
			var content = document.getElementById("templateBuy").innerHTML;
			var template = Handlebars.compile(content);
			var contentData1 = template(dealsNew);
			document.getElementById("buy_purpose_wrapper").innerHTML = '';
			document.getElementById("buy_purpose_wrapper").innerHTML += contentData1;
			}else{
					
			}
 		});
 		});
	});



	History.pushState(null, document.title, 'home.html');
    	$("nav a, .header_login a").click(function (e) {

		var url = $(this).attr("href");

		
		History.pushState(null, document.title, url);
		$(".menu a, .header_login a, .hidden-mnu a").removeClass('active-mnu');
        $(this).toggleClass('active-mnu');

        e.preventDefault();
	        if(url !== 'home.html'){
				$("#content").load(url,function(){

				});

	 		}else{
	 			$('#content').load('home.html',function(){
					
					templating();
					$("a.item_buy").click(function (e) {
					e.preventDefault();
					var url = $(this).attr("href");
			
					History.pushState(null, document.title, url);
						$("#content").load(url, function() {
						var id = $('.sell_item-elem').attr('id');
						if(window.localStorage.getItem(id)){
						var dealsNew = JSON.parse(window.localStorage.getItem(id));
						var content = document.getElementById("templateBuy").innerHTML;
						var template = Handlebars.compile(content);
						var contentData1 = template(dealsNew);
						document.getElementById("buy_purpose_wrapper").innerHTML = '';
						document.getElementById("buy_purpose_wrapper").innerHTML += contentData1;
						}else{
								
						}
				 		});
				 	});
					
				});	
	 		}
    });
    	 
	    History.Adapter.bind(window, 'statechange', function(e){
	    var State = History.getState();
	    var activeUrl = State.url.substr(22);
	    if(activeUrl == "home.html"){
	    	 $('#content').load(State.url,function(){
				templating();
				$("a.item_buy").click(function (e) {
				e.preventDefault();
				var url = $(this).attr("href");
				
				History.pushState(null, document.title, url);
				$("#content").load(url, function() {
				var id = $('.sell_item-elem').attr('id');
				if(window.localStorage.getItem(id)){
				var dealsNew = JSON.parse(window.localStorage.getItem(id));
				var content = document.getElementById("templateBuy").innerHTML;
				var template = Handlebars.compile(content);
				var contentData1 = template(dealsNew);
				document.getElementById("buy_purpose_wrapper").innerHTML = '';
				document.getElementById("buy_purpose_wrapper").innerHTML += contentData1;
				}else{
								
				}
 				});
 			});
			});
	    }else{
	    $('#content').load(State.url,function(){

	    	var activeUrl = State.url.substr(22);
	    	if(activeUrl !='index.html' &&  activeUrl !='home.html' && activeUrl !='news.html' &&
	    	 activeUrl !='sell.html' && activeUrl !='login.html' && activeUrl !='registration.html' &&
	    	 activeUrl !='contacts.html'){
				var id = $('.sell_item-elem').attr('id');
				var dealsNew = JSON.parse(window.localStorage.getItem(id));
				var content = document.getElementById("templateBuy").innerHTML;
				var template = Handlebars.compile(content);
				var contentData1 = template(dealsNew);
				document.getElementById("buy_purpose_wrapper").innerHTML = '';
				document.getElementById("buy_purpose_wrapper").innerHTML += contentData1;
				}else{
								
				}
 				
	    });

	    }
	    $(".menu a, .header_login a, .hidden-mnu a").removeClass('active-mnu');
	    $("a[href='"+activeUrl+"']").toggleClass('active-mnu');
		});



	
});

