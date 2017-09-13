$(document).ready(function(){
	// МОДАЛЬНОЕ ОКНО - СТАТЬИ/ФОРМА
	$(".vvv1").click(function(e){e.preventDefault();$(".mmm1").fadeIn(500);});
	$(".close").click(function(){$(".mmm1").fadeOut(500);});
	$(".black").click(function(){$(".mmm1").fadeOut(500);});
	
	$(".vvv2").click(function(e){e.preventDefault();$(".mmm2").fadeIn(500);});
	$(".close").click(function(){$(".mmm2").fadeOut(500);});
	$(".black").click(function(){$(".mmm2").fadeOut(500);});
	
	$(".vvv3").click(function(e){e.preventDefault();$(".mmm3").fadeIn(500);});
	$(".close").click(function(){$(".mmm3").fadeOut(500);});
	$(".black").click(function(){$(".mmm3").fadeOut(500);});
	
	$(".vvv4").click(function(e){e.preventDefault();$(".mmm4").fadeIn(500);});
	$(".close").click(function(){$(".mmm4").fadeOut(500);});
	$(".black").click(function(){$(".mmm4").fadeOut(500);});
	
	$(".vvv5").click(function(e){e.preventDefault();$(".mmm5").fadeIn(500);});
	$(".close").click(function(){$(".mmm5").fadeOut(500);});
	$(".black").click(function(){$(".mmm5").fadeOut(500);});
	
	$(".black").click(function(){
		$(".mmm1 video")[0].pause();
		$(".mmm2 video")[0].pause();
		$(".mmm3 video")[0].pause();
		$(".mmm4 video")[0].pause();
		$(".mmm5 video")[0].pause();
	});
	

      $("form").submit(function() {
    th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      th.trigger('reset');
      alert("Спасибо, мы обязательно с вами свяжемся!");

    });
    return false;
  });


    /* Закрытие попапов по клавиши Esc */
    $(document).keyup(function(e){
        if (e.keyCode == 27) {
            $('.modal-window:visible').fadeOut(100);
            $('#modal-overlay:visible').fadeOut(100);
        }
    });
    /* Закрытие попапов по крестику */
    $('.modal-close').click(function(){
        $('#modal-overlay').fadeOut(100);
        $(this).closest('.modal-window').fadeOut(100);
    });
    /* Закрытие попапов по клику на фон */
    $('#modal-overlay').click(function(){
        $('.modal-window:visible').fadeOut(100);
        $('#modal-overlay:visible').fadeOut(100);
    });
    /* Инициализация попапов */
    $("a[rel*=modal-link]").leanModal({
        top          :   100,
        closeButton  :   ".modal-close"
    });
    /* Автовысота модального окна */
    $('.modal-window.high').each(function(){
        var pageHeight = $(window).height();
        $(this).find('.modal-body-padding').height(pageHeight - 271 + 'px')
    });
    /* Инициализация fancybox */
    $('.fancybox').fancybox({
      helpers : {
        buttons : {}
      }
    });
    /* Плавная прокрутка ссылок */
    function getTargetTop(elem){
      var id = elem.attr("href");
			var offset = 60;
			return $(id).offset().top - offset;
		}
		$('.menu').click(function(event) {
			var target = getTargetTop($(this));
			$('html, body').animate({scrollTop:target}, 700);
			event.preventDefault();
		});
		/* Фиксированное меню */
		$(window).scroll(function(){
      if($(window).scrollTop() > 600){
          $('#top_menu').fadeIn(500);
      }else{
          $('#top_menu').fadeOut(500);
      }
    });
		/* Паралакс */
    var $window = $(window);
    $('section[data-type="background"]').each(function(){
      var $bgobj = $(this);
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));
        var coords = '50% '+ yPos + 'px';
        $bgobj.css({ backgroundPosition: coords });
      });
    });
    /* Input Range */
    $(function() {
      var $document   = $(document),
          selector    = '[data-rangeslider]',
          $inputRange = $(selector);
      function valueOutput(element) {
        var value = element.value,
            output = element.parentNode.getElementsByTagName('output')[0];
            output.innerHTML = value;
            total = document.getElementById('total');
            type = $('input[name="type"]:checked').val();
            remont = $('input[name="remont"]:checked').val();
            limit = document.getElementById('limit');
            sum = value*remont;
            total.innerHTML = sum;
            gift_a1 = document.getElementById('gift_a1');
            gift_a2 = document.getElementById('gift_a2');
            gift_a3 = document.getElementById('gift_a3');
            gift_a4 = document.getElementById('gift_a4');
            gift_a5 = document.getElementById('gift_a5');
            gift_a6 = document.getElementById('gift_a6');
            gift_d1 = document.getElementById('gift_d1');
            gift_d2 = document.getElementById('gift_d2');
            gift_d3 = document.getElementById('gift_d3');
            gift_d4 = document.getElementById('gift_d4');
            gift_d5 = document.getElementById('gift_d5');
            gift_d6 = document.getElementById('gift_d6');
            gift_o1 = document.getElementById('gift_o1');
            gift_o2 = document.getElementById('gift_o2');
            gift_o3 = document.getElementById('gift_o3');
            gift_o4 = document.getElementById('gift_o4');
            gift_o5 = document.getElementById('gift_o5');
            gift_o6 = document.getElementById('gift_o6');
            if (type == "1" && remont == "5900") {
              gift_a1.style.display = "block";
              
              limit.innerHTML = "";
            } else {
              gift_a1.style.display = "block";
            }
            if (type == "1" && remont == "4900") {
              gift_a1.style.display = "block";
              limit.innerHTML = "";
            } else {
              gift_a1.style.display = "block";
            }
            if (type == "1" && remont == "2900") {
             gift_a1.style.display = "block";
              limit.innerHTML = "";
            } else {
              gift_a1.style.display = "block";
            }
            if (type == "2" && remont == "5900") {
              gift_a1.style.display = "block";
              limit.innerHTML = "";
            } else {
              gift_a1.style.display = "block";
            }
            if (type == "2" && remont == "4900") {
              gift_a1.style.display = "block";
              limit.innerHTML = "";
            } else {
             gift_a1.style.display = "block";
            }
            if (type == "2" && remont == "2900") {
             gift_a1.style.display = "block";
              limit.innerHTML = "";
            } else {
              gift_a1.style.display = "block";
            }
            if (type == "3" && remont == "5900") {
             gift_a1.style.display = "block";
              limit.innerHTML = "";
            } else {
             gift_a1.style.display = "block";
            }
            if (type == "3" && remont == "4900") {
             gift_a1.style.display = "block";
              limit.innerHTML = "";
            } else {
             gift_a1.style.display = "block";
            }
            if (type == "3" && remont == "2900") {
              gift_a1.style.display = "block";
              limit.innerHTML = "";
            } else {
             gift_a1.style.display = "block";
            }
      }
      for (var i = $inputRange.length - 1; i >= 0; i--) {
        valueOutput($inputRange[i]);
      };
      $document.on('change', selector, function(e) {
        valueOutput(e.target);
      });
      $('input').on('change', function() {
        total = document.getElementById('total');
        area = parseFloat(+document.getElementById('area').innerHTML);
        type = $('input[name="type"]:checked').val();
        remont = $('input[name="remont"]:checked').val();
        limit = document.getElementById('limit');
        sum = area*remont;
        total.innerHTML = sum;
        gift_a1 = document.getElementById('gift_a1');
        gift_a2 = document.getElementById('gift_a2');
        gift_a3 = document.getElementById('gift_a3');
        gift_a4 = document.getElementById('gift_a4');
        gift_a5 = document.getElementById('gift_a5');
        gift_a6 = document.getElementById('gift_a6');
        gift_d1 = document.getElementById('gift_d1');
        gift_d2 = document.getElementById('gift_d2');
        gift_d3 = document.getElementById('gift_d3');
        gift_d4 = document.getElementById('gift_d4');
        gift_d5 = document.getElementById('gift_d5');
        gift_d6 = document.getElementById('gift_d6');
        gift_o1 = document.getElementById('gift_o1');
        gift_o2 = document.getElementById('gift_o2');
        gift_o3 = document.getElementById('gift_o3');
        gift_o4 = document.getElementById('gift_o4');
        gift_o5 = document.getElementById('gift_o5');
        gift_o6 = document.getElementById('gift_o6');
        if (type == "1" && remont == "5900") {
         gift_a1.style.display = "block";
          limit.innerHTML = "(на выбор, при заказе ремонта от 40 м<sup>2</sup>)";
        } else {
         gift_a1.style.display = "block";
        }
        if (type == "1" && remont == "4900") {
         gift_a1.style.display = "block";
          limit.innerHTML = "(на выбор, при заказе ремонта от 30 м<sup>2</sup>)";
        } else {
         gift_a1.style.display = "block";
        }
        if (type == "1" && remont == "2900") {
          gift_a1.style.display = "block";
          limit.innerHTML = "(на выбор, при заказе ремонта от 15 м<sup>2</sup>)";
        } else {
         gift_a1.style.display = "block";
        }
        if (type == "2" && remont == "5900") {
          gift_a1.style.display = "block";
          limit.innerHTML = "(на выбор, при заказе ремонта от 40 м<sup>2</sup>)";
        } else {
         gift_a1.style.display = "block";
        }
        if (type == "2" && remont == "4900") {
         gift_a1.style.display = "block";
          limit.innerHTML = "(на выбор, при заказе ремонта от 40 м<sup>2</sup>)";
        } else {
         gift_a1.style.display = "block";
        }
        if (type == "2" && remont == "2900") {
         gift_a1.style.display = "block";
          limit.innerHTML = "(на выбор, при заказе ремонта от 40 м<sup>2</sup>)";
        } else {
          gift_a1.style.display = "block";
        }
        if (type == "3" && remont == "5900") {
         gift_a1.style.display = "block";
          limit.innerHTML = "(на выбор, при заказе ремонта от 30 м<sup>2</sup>)";
        } else {
          gift_a1.style.display = "block";
        }
        if (type == "3" && remont == "4900") {
          gift_a1.style.display = "block";
          limit.innerHTML = "(на выбор, при заказе ремонта от 30 м<sup>2</sup>)";
        } else {
         gift_a1.style.display = "block";
        }
        if (type == "3" && remont == "2900") {
          gift_a1.style.display = "block";
          limit.innerHTML = "(на выбор, при заказе ремонта от 15 м<sup>2</sup>)";
        } else {
         gift_a1.style.display = "block";
        }
      });
      $inputRange.rangeslider({
        polyfill: false,
      });
    });
}); // Конец ready





/* Инициализация анимации при прокрутке */
  new WOW().init();

/* Валидация форм - Квартиры */
function validateFormCall() {
  var phone=document.forms["order_call"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('order_call');
    return true;
    }
}
function validateFirstScreenPromo() {
  var phone=document.forms["first_screen_promo"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('first_screen_promo');
    return true;
    }
}
function validateFormConsult() {
  var phone=document.forms["order_consult"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('order_consult');
    return true;
    }
}
function validateFormFree() {
  var phone=document.forms["order_free"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('order_free');
    return true;
    }
}
function validateFormElite() {
  var phone=document.forms["elite"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('elite');
    return true;
    }
}
function validateFormCapital() {
  var phone=document.forms["capital"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('capital');
    return true;
    }
}
function validateFormEconom() {
  var phone=document.forms["econom"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('econom');
    return true;
    }
}
function validateCalculate() {
  var phone=document.forms["calculate"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('calculate');
    return true;
    }
}
function validateFormPersonal() {
  var phone=document.forms["order_personal"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('order_personal');
    return true;
    }
}
function validateFormRequest() {
  var phone=document.forms["request"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('request');
    return true;
    }
}
function validateFormOrderProcess() {
  var phone=document.forms["order_process"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27557817.reachGoal('order_process');
    return true;
    }
}
/* Валидация форм - Дома */
function validateFormCallDom() {
  var phone=document.forms["order_call"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('order_call');
    return true;
    }
}

function validateFirstScreenPromoDom() {
  var phone=document.forms["first_screen_promo"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('first_screen_promo');
    return true;
    }
}
function validateFormConsultDom() {
  var phone=document.forms["order_consult"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('order_consult');
    return true;
    }
}
function validateFormFreeDom() {
  var phone=document.forms["order_free"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('order_free');
    return true;
    }
}
function validateFormEliteDom() {
  var phone=document.forms["elite"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('elite');
    return true;
    }
}
function validateFormCapitalDom() {
  var phone=document.forms["capital"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('capital');
    return true;
    }
}
function validateFormEconomDom() {
  var phone=document.forms["econom"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('econom');
    return true;
    }
}
function validateCalculateDom() {
  var phone=document.forms["calculate"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('calculate');
    return true;
    }
}
function validateFormPersonalDom() {
  var phone=document.forms["order_personal"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('order_personal');
    return true;
    }
}
function validateFormRequestDom() {
  var phone=document.forms["request"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('request');
    return true;
    }
}
function validateFormOrderProcessDom() {
  var phone=document.forms["order_process"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703629.reachGoal('order_process');
    return true;
    }
}
/* Валидация форм - Офисы */
function validateFormCallOffice() {
  var phone=document.forms["order_call"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('order_call');
    return true;
    }
}

function validateFirstScreenPromoOffice() {
  var phone=document.forms["first_screen_promo"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('first_screen_promo');
    return true;
    }
}
function validateFormConsultOffice() {
  var phone=document.forms["order_consult"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('order_consult');
    return true;
    }
}
function validateFormFreeOffice() {
  var phone=document.forms["order_free"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('order_free');
    return true;
    }
}
function validateFormEliteOffice() {
  var phone=document.forms["elite"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('elite');
    return true;
    }
}
function validateFormCapitalOffice() {
  var phone=document.forms["capital"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('capital');
    return true;
    }
}
function validateFormEconomOffice() {
  var phone=document.forms["econom"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('econom');
    return true;
    }
}
function validateCalculateOffice() {
  var phone=document.forms["calculate"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('calculate');
    return true;
    }
}
function validateFormPersonalOffice() {
  var phone=document.forms["order_personal"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('order_personal');
    return true;
    }
}
function validateFormRequestOffice() {
  var phone=document.forms["request"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('request');
    return true;
    }
}
function validateFormOrderProcessOffice() {
  var phone=document.forms["order_process"]["phone"].value;
  if (phone==null || phone=="") {
    alert("Пожалуйста, введите Ваш номер телефона");
    return false;
  } else {
    yaCounter27703668.reachGoal('order_process');
    return true;
    }
}




/* Модальные окна */
(function($){
    $.fn.extend({
        leanModal: function(options) {
            var defaults = {
                top: 50,
                overlay: 0.5,
                closeButton: null
            }
            var overlay = $("#modal-overlay");
            options =  $.extend(defaults, options);
            return this.each(function() {
                var o = options;
                $(this).click(function(e) {
                    $('.modal-window').hide();
                    var modal_id = $(this).attr("href");
                    $(o.closeButton).click(function() {
                         close_modal(modal_id);
                    });
                    var modal_height = $(modal_id).outerHeight();
                    var modal_width = $(modal_id).outerWidth();
                    $('#modal-overlay').show();
                    $(modal_id).css({
                        'display' : 'block',
                        'opacity' : 0,
                        'z-index': 100,
                        'left' : 50 + '%',
                        'margin-left' : -(modal_width/2) + "px",
                        'top' : o.top + "px"
                    });
                    $(modal_id).fadeTo(200,1);
                    e.preventDefault();
                });
            });
            function close_modal(modal_id){
                $("#modal-overlay").fadeOut(200);
                $(modal_id).css({ 'display' : 'none' });
            }
        }
    });
})(jQuery);