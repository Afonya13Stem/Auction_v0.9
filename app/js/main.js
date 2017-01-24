  $(function() {
    $(".rslides").responsiveSlides({
    	auto: false,
        nav: true,
        speed: 800,
        namespace: "centered-btns"	
    });

// $('.centered-btns_nav').click(function(e){
// e.preventDefault();
// });


});





$(document).ready(function(){

// toggle menu

$(".toggle-mnu").click(function() {
	  	$(this).toggleClass("on");
	  	$(".hidden-mnu").slideToggle();
	  	return false;
	});


//show text-confirm 


$(".input-h").click(function(){
	$(".text-confirm").removeClass('hide');
});



// redirect from login <-> registr


$('.subm_btn').click(function(e){
 	var url = $(this).attr("href");
 	History.pushState(null, document.title, url);
	e.preventDefault(); 
	$("#content").load(url);
	 	
 });


// show lot

});





$(document).ready(function(){
	
	// var deals1a = JSON.parse(window.localStorage.getItem('1accsesories'));	

	$(".buy_button").click(function() {
		if(localStorage.getItem('username') !== null || localStorage.getItem('password') !== null){	
				var id = $('.sell_item-elem').attr('id');
				var dateRate = new Date();
				var now = dateRate.format();
				var validPrice = $('.buy_input').val();

				if ($.isNumeric(validPrice)){
					if(JSON.parse(window.localStorage.getItem(id))){
						var price;
						var objPrice = JSON.parse(window.localStorage.getItem(id));
						price = +objPrice["deal"][objPrice["deal"].length-1]["buy-input"];
					}else{
						var price = +($('.red').text());
					}
					if(validPrice > price){
		 				
		 				$('.buy_purpose').css({'display' : 'block'});
		 
		 				price = +validPrice;
		 				// alert($('.sell_item-h h2').text());
		 				var obj = {};
		 				obj["Buyer"] = localStorage.getItem('username');
		 				obj["buy-input"] = validPrice;
		 				obj["date"] = now;
		 				
		 				if(JSON.parse(window.localStorage.getItem(id))){
		 					var dealsNew = JSON.parse(window.localStorage.getItem(id));
			 				dealsNew["deal"].push(obj);
			 				window.localStorage.removeItem(id);
			 				window.localStorage.setItem(id,JSON.stringify(dealsNew));
			 				var dealsUpgr = JSON.parse(window.localStorage.getItem(id));
			 				var content = document.getElementById("templateBuy").innerHTML;
							var template = Handlebars.compile(content);
			 				var contentData1 = template(dealsUpgr);
			 				document.getElementById("buy_purpose_wrapper").innerHTML = '';
							document.getElementById("buy_purpose_wrapper").innerHTML += contentData1;
		 				}else{
		 					var dealsNew = {
						 		deal : []
						 	};
		 					dealsNew["deal"].push(obj);
		 					window.localStorage.setItem(id,JSON.stringify(dealsNew));
			 				var dealsUpgr = JSON.parse(window.localStorage.getItem(id));
			 				var content = document.getElementById("templateBuy").innerHTML;
							var template = Handlebars.compile(content);
			 				var contentData1 = template(dealsUpgr);
			 				document.getElementById("buy_purpose_wrapper").innerHTML = '';
							document.getElementById("buy_purpose_wrapper").innerHTML += contentData1;
		 				}
		 			}else{
		 				alert('Введите сумму больше предложеной');	
		 			}
			 	}else{ 
					alert('Введите ставку числом');
				}
			}else{
				alert("Пожалуйста войдите или зарегистрируйтесь чтобы делать ставки");
		}
	
	});


// manipulating with dom Show - hide events

	$('.selling_item').hide();
	// $('.accesories').hide();

	$(".toggle_accssesories").click(function() {
		$(".main_items").addClass('hide');
		$(".accesories").show();
		$(".category_accsesories").addClass('active-category');
	});

	$(".toggle_kids").click(function(){
		$(".main_items").addClass('hide');
		$(".kids").show();
		$(".category_kids").addClass('active-category');
	});

	$(".toggle_newYear").click(function() {
		$(".main_items").addClass('hide');
		$(".newYear").show();
		$(".category_newYear").addClass('active-category');
	});

	$(".toggle_bags").click(function(){
		$(".main_items").addClass('hide');
		$(".bags").show();
		$(".category_bags").addClass('active-category');
	});

	// category nav

	function categoryClick(item){
		$(".main_items").addClass('hide');
		$("."+item).show();
		$(".selling_item").not('.'+item).hide();
		$(".category_"+item).addClass('active-category');
		$(".category-item").not('.category_'+item).removeClass('active-category');
	}

	$(".category_accesories").click(function(e) {
		e.preventDefault();
		categoryClick('accesories');
	});

	$(".category_kids").click(function(e){
		e.preventDefault();
		categoryClick('kids');
	});

	$(".category_newYear").click(function(e) {
		e.preventDefault();
		categoryClick('newYear');
	});

	$(".category_bags").click(function(e){
		e.preventDefault();
		categoryClick('bags');
	});

// search

	$('.search_submit').click(function(e){
		e.preventDefault();
		var search = $('.search_form-input').val();
		if($('.selling_item:contains("'+ search +'")')){
			($('.selling_item:contains("'+ search +'")')).show();
			($('.selling_item:not(:contains("'+ search +'"))')).hide();
			$('.main_items').hide();
		}else{
			alert('Ничего не найдено');
		}

	});


// Emulation pagination
	
	$('.news_2page, .news_3page').hide();

	$('.pagin_page').click(function(){
		if($(this).hasClass('pagin_active')){
			
		}else{
			$('.pagin_active').removeClass('pagin_active');
			($(this).addClass('pagin_active'));
			var page = +($(this).text());

			$('.news_page').not('.news_'+page+'page').hide();
			$('.news_'+page+'page').fadeIn(800);
		}

	});


	$('.pag_prev').click(function(){
		var countpage = +($('.pagin_active').text());
		var showpage = countpage - 1;
		
		if (showpage >= 1) {
			$('.pagin_active').removeClass('pagin_active');
			$('.pagin_page'+showpage).addClass('pagin_active');
		
			$('.news_page').not('.news_'+showpage+'page').hide();
			$('.news_'+showpage+'page').fadeIn(800);
		}else{
			
		}
	});


	$('.pag_next').click(function(){
		var countpage = +($('.pagin_active').text());
		var showpage = countpage + 1;
		
		if (showpage <= 3) {
			$('.pagin_active').removeClass('pagin_active');
			$('.pagin_page'+showpage).addClass('pagin_active');
		
			$('.news_page').not('.news_'+showpage+'page').hide();
			$('.news_'+showpage+'page').fadeIn(800);
		}else{
			
		}
	});





// register login


	// register
	$('.password2').change(function() {
    var pass1 = $(".password1").val();
    var pass2 = $(".password2").val();
	  
	    if (pass1 !== pass2) {
			$(".password2").css('border', 'red 2px solid');
	    }else if(pass1 == pass2){
	    	$(".password2").css('border', '1px solid #18ffff');
	    }
	});

	

   $('.reg_subm').click(function(e){
   	e.preventDefault();
    var inputUsername = $('.input_user').val();
    var inputPassword= $('.input_password').val();
    var pass1 = $(".password1").val();
    var pass2 = $(".password2").val();
    var form = $('.login_form-item');
		

  
		
    if(pass1 == pass2 && $('.userEmail:valid').length>0){
	    localStorage.setItem("username", inputUsername);
	    localStorage.setItem("password", inputPassword);
	    alert('Спасибо за регистрацию' +" "+ localStorage.getItem('username'));
	}else{
		alert('Введитe коректные данные');
	}
 	});

   // login

    $('.log_subm').click(function(e){
   	e.preventDefault();
    var inputUsername = $('.input_user').val();
    var inputPassword= $('.input_password').val();
    if ((inputUsername == localStorage.getItem('username')) && (inputPassword == localStorage.getItem('password'))) {
    	alert('Здраствуйте' +" "+ localStorage.getItem('username'));
    }else{
    	alert('Введите пожалуйста коректные данные,или зарегистрируйтесь');
    }
    
 });


// sell button

	

});


var facebookS = "https://www.facebook.com/sharer/sharer.php?u=http%3A//localhost%3A9000/";
var googlePlusS = "https://plus.google.com/share?url=http%3A//localhost%3A9000/";
var twitterS = "https://twitter.com/home?status=http%3A//localhost%3A9000/";

function shareF(){
	window.open(facebookS,'','toolbar=0,status=0,width=626,height=436');
}
function shareT(){
	window.open(twitterS,'','toolbar=0,status=0,width=626,height=436');
}
function shareG(){
window.open(googlePlusS,'','toolbar=0,status=0,width=626,height=436');
}



//for content
// The main idea is to save new lots on server,
// end create new html for each lot dynamically from such data
// but,unfortunatly i'm not so skilled right now to wright good server
//with good logic,
// (and save all this in localStorage it also bad way)so other
 // opotunities are represented for 'static' lots;



$(document).ready(function(){

	var lots = {
	"lot": [
		{
			"class" : "accesories",
			"img": "img/accsesories/1.jpg",
			"h3" : "Аксессуар 'Беспроводное зарядноеустройство'",
			"p"  : "Представьте себе ситуацию, в которой Вам больше нет необходимости каждый раз ставить Ваш телефон на зарядку – достаточно просто положить его на аксессуар и он сам будет себя заряжать!",
			"a"  : "_1accseories.html",
			"price" : "200",
			"date" : "7.12.2017"
		},
		{
			"class" : "accesories",
			"id": "accsesories",
			"img": "img/accsesories/2.jpg",
			"h3" : "Гребень для бороды деревянный в холдере 'Якорь'",
			"p"  : "Гребень для бороды - это стильный аксессуар и незаменимый помощник в уходе.Сделан из высококачественных сортов древесины, он поможет гладко вычесать и усмирить даже самую необузданную бороду.Холдер защитит гребень от мусора и нежелательных воздействий. ",
			"a"  : "_2accseories.html",
			"price" : "200",
			"date" : "8.12.2017"
		},
		{
			"class" : "accesories",
			"img": "img/accsesories/3.jpg",
			"h3" : "Варежки Miracle горчичной шести",
			"p"  : "Вязаные варежки из мериносовой шерсти терракотового цвета.Анатомический пальчик, идеальная посадка по руке.Теплые, мягкие и красивые.",
			"a"  : "_3accseories.html",
			"price" : "300",
			"date" : "7.12.2017"
		},
		{
			"class" : "accesories",
			"img": "img/accsesories/4.jpg",
			"h3" : "Деревянный чехол для iPhone 5/5S/SE",
			"p"  : "Деревянное покрытие сделанное вручную, в сочетании с поликарбонатной основой поможет защитить Ваш любимый телефон.Простота использования. Открытый доступ. Чехол не препятствует использованию камеры, кнопок и разъемов — имеются специальные вырезы для всех функциональных элементов.",
			"a"  : "_4accseories.html",
			"price" : "199",
			"date" : "7.12.2017"
		},
		{
			"class" : "kids",
			"img": "img/kids/1kids.jpg",
			"h3" : "Деревянный конструктор",
			"p"  : "Универсальный деревянный конструктор.почему 'универсальный'? да потому, что из этих деталей можно собрать,что угодно.единственное ограничение - это ваша фантазия.",
			"a"  : "_1kids.html",
			"price" : "350",
			"date" : "9.12.2017"
		},
		{
			"class" : "kids",
			"img": "img/kids/2kids.jpg",
			"h3" : "Спальний мішечок для прогулянок, 0-6 міс.",
			"p"  : "З думкою про осінь ми створили такий чудовий спальний мішечок! Хто втомився від рожевого та блакитного, лиска хакі чекає! Всередині дитячий гіпоалергенний утеплювач, мішечок на осінь та євро зиму.",
			"a"  : "_2kids.html",
			"price" : "320",
			"date" : "10.12.2017"
		},
		{
			"class" : "kids",
			"img": "img/kids/3kids.jpg",
			"h3" : "Комплект в кроватку Little airplanes",
			"p"  : "Первым делом, первым делом самолеты))) в продаже замечательный комплект для малыша: бортики-трансформеры состоят из 12 подушечек размером 30х30 см.каждая и наматрасник на кроватку 120х60, подходящий даже на высокий матрасик (до 17 см.). Как всегда, только натуральные ткани -100% хлопок. Наполнитель бортиков -силиконизированый синтепон.",
			"a"  : "_3kids.html",
			"price" : "235",
			"date" : "8.12.2017"
		},
		{
			"class" : "kids",
			"img": "img/kids/4kids.jpg",
			"h3" : "Комплект на выписку 'Мишутки'",
			"p"  : "Вязаный плед ручной работы и пинетки. Плед связан с вискозы, идеально подойдет на теплое время года. Очень мягкий. Размер 75*80 см. Пинетки связаны из мягкого детского акрила и украшены мишутками-малютками с сосками. Сбоку есть завязочки, чтобы пинеточки лучше держались, украшеные баламбонами.",
			"a"  : "_4kids.html",
			"price" : "160",
			"date" : "9.12.2017"
		},
		{
			"class" : "newYear",
			"img": "img/newYear/1newYear.jpg",
			"h3" : "Рождественская чашка с оленем Рудольфом",
			"p"  : "Однажды из-за сильного тумана развоз подарков Санта-Клаусом затянулся, когда он добрался до дома оленя Рудольфа, он заметил его светящийся нос в тёмной комнате и решил, что этот нос станет подходящим фонариком, освещающим дорогу его саням, и попросил Рудольфа стать передовым оленем в упряжке, на что тот охотно согласился.Объём 600 мл.",
			"a"  : "_1newyear.html",
			"price" : "100",
			"date" : "9.12.2017"
		},
		{
			"class" : "newYear",
			"img": "img/newYear/2newYear.jpg",
			"h3" : "Новогодняя елка из суккулентов",
			"p"  : "Представьте себе, что после рождественских праздников Ваша красивая и радостная елка не осыпется, а будет продолжать расти и радовать глаз. Или же ее можно будет разобрать на кучу небольших композиций из живых суккулентов. В отличии от обычной ёлочки, которую разбирают - игрушки прячут на антресоль до следующего года, а саму красавицу отправляют на мусор.",
			"a"  : "_2newyear.html",
			"price" : "500",
			"date" : "29.12.2017"
		},
		{
			"class" : "newYear",
			"img": "img/newYear/3newYear.jpg",
			"h3" : "Рождественский венок",
			"p" : "Украшение дома к Новогодним праздникам — приятная и радостная традиция. В эти дни взрослые становятся детьми, дом наполняется приятным мандариновым ароматом, а в воздухе витает ощущения веселья и праздника. Поэтому создавая праздничную атмосферу, не забудьте об главном!Ведь сказка всегда начинается… с двери!",
			"a"  : "_3newyear.html",
			"price" : "200",
			"date" : "29.12.2017"
		},
		{
			"class" : "newYear",
			"img": "img/newYear/4newYear.jpg",
			"h3" : "Новогодний Лосик Жора",
			"p" : "Лосик Жора. Выполнен из пряжи , хлопок. В технике амигуруми. В полный рост 41 см. Оригинальный подарок и интересный декор , украсит Ваш дом и создаст праздничное настроение!",
			"a"  : "_4newyear.html",
			"price" : "100",
			"date" : "29.12.2017"
		},
		{
			"class" : "bags",
			"img": "img/bags/1bags.jpg",
			"h3" : "Кожаная сумка мессенджер.",
			"p" : "Сумка мессенджер из натуральной кожи. Изделие полностью ручной работы. Мы используем качественную фурнитуру и крепкие нити для изготовления наших товаров. Сумка подойдет для повседневной деловой жизни или учебы. Изделие долговечно, за счет качественных материалов и ручной работы. Плечевой ремень регулируется, так что подойдет каждому. ",
			"a"  : "_1bags.html",
			"price" : "500",
			"date" : "9.12.2017"
		},
		{
			"class" : "bags",
			"img": "img/bags/2bags.jpg",
			"h3" : "Компактный кожаный рюкзак.",
			"p" : "Стильный женский компактный рюкзачок сделан из качественной натуральной кожи. Очень удобен в эксплуатации, и приятен для взоров окружающих. Большое отделение на молнии, внутренний карман и ремни, которые регулируются по длине.",
			"a"  : "_2bags.html",
			"price" : "500",
			"date" : "9.12.2017"
		},
		{
			"class" : "bags",
			"img": "img/bags/3bags.jpg",
			"h3" : "Сумка ручной работы с деревянными вставками по бокам",
			"p" : "Кожаная сумка ручной работы изготовленная полностью из натуральной кожи, с деревянными вставками по бокам (дерево покрыто лаком). ",
			"a"  : "_3bags.html",
			"price" : "700",
			"date" : "9.12.2017"
		},
		{
			"class" : "bags",
			"img": "img/bags/4bags.jpg",
			"h3" : "Сумка-почтальонка женская",
			"p" : "Стильная сумка-почтальонка пригодится на каждый день! Роспись на клапане из натуральной кожи выполнена вручную! ",
			"a"  : "_4bags.html",
			"price" : "500",
			"date" : "11.12.2017"
		}
	]
};
	if(window.localStorage.getItem('lots') === null){
	window.localStorage.setItem('lots',JSON.stringify(lots));
	var lots1 = JSON.parse(window.localStorage.getItem('lots'));
	}

	// SELLITEM BLOCK

	$(".input-price").keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
             // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) || 
             // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 // Ничего не делаем
                 return;
        }
        else {
            // Обиждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }   
        }
    });

	$('.sellItem').click(function(e){
		e.preventDefault();
	if(localStorage.getItem('username') !== null || localStorage.getItem('password') !== null){	

		var headH = $('.input-h').val();
		var lotPrice = $('.input-price').val();
		var category = $('#sellCategory').val();
		var desc = $('#text-area').val();
		var img = "img/icons/molotok.png";
		var date = new Date();
		date.setDate(date.getDate() + 31);
		date1 = date.format();
		if($('.input-h').val() !=="" && $('.input-price').val() !=="" && $('#text-area').val() !=="" && $('.input-img').val() !== ""){
			var obj = {};
			obj["class"] = category;
			obj["img"] = img;
			obj["h3"] = headH;
			obj["p"] = desc;
			obj["a"] = 'home.html';
			obj["price"] = lotPrice;
			obj["date"] = date1;

			var cashLots = JSON.parse(window.localStorage.getItem('lots'));
			console.log(cashLots);
			cashLots["lot"].push(obj);
			console.log(cashLots);
			window.localStorage.removeItem('lots');
			window.localStorage.setItem('lots',JSON.stringify(cashLots));
			alert('Поздравляем ваш товар успешно добавлен в список лотов! Через некоторое время мы все проверим и все смогут посражаться за ваш товар');
		}else{
			alert('Пожалуйста введите коректные данные');
		}
	}else{
		alert('Только зарегистрированые пользователи могут выставлять товар на аукцион')
	}
	});

	
});

