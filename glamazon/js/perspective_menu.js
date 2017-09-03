




/*
     FILE ARCHIVED ON 4:56:44 мар 26, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 3:30:08 ноя 27, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
!function(){function e(){return window.pageYOffset||o.scrollTop}function t(){function t(t){if(classie.has(o,"animate")){var n=function(e){(!i||-1!=e.target.className.match("container")&&-1!=e.propertyName.indexOf("transform"))&&(this.removeEventListener(a,n),classie.remove(o,"modalview"),document.body.scrollTop=document.documentElement.scrollTop=s,d.style.top="0px")};i?o.addEventListener(a,n):n.call(),classie.remove(o,"animate"),text&&(text.innerHTML="MENU")}else text&&(text.innerHTML="CLOSE"),t.stopPropagation(),t.preventDefault(),s=e(),d.style.top=-1*s+"px",document.body.scrollTop=document.documentElement.scrollTop=0,classie.add(o,"modalview"),setTimeout(function(){classie.add(o,"animate")},25)}jQuery.browser.mobile||navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)?document.getElementById("show-menu").addEventListener(n,t):(document.getElementById("pc-show-menu").addEventListener(n,t),document.getElementById("show-menu").addEventListener(n,t));var o=document.getElementById("perspective"),r=o.querySelector(".container"),d=r.querySelector(".wrapper")||r;r.addEventListener(n,function(){if(classie.has(o,"animate")){var e=function(t){(!i||-1!=t.target.className.match("container")&&-1!=t.propertyName.indexOf("transform"))&&(this.removeEventListener(a,e),classie.remove(o,"modalview"),document.body.scrollTop=document.documentElement.scrollTop=s,d.style.top="0px")};i?o.addEventListener(a,e):e.call(),classie.remove(o,"animate"),$("#menu-button").removeClass("close"),$("#lines").removeClass("BLACK"),$("#current-menu").removeClass("BLACKtxt"),text&&(text.innerHTML="MENU")}}),o.addEventListener(n,function(){return!1})}var n,o=window.document.documentElement,i=Modernizr.csstransitions,r={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},a=r[Modernizr.prefixed("transition")],s=0;n=jQuery.browser.mobile||navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)?"touchstart":"click",t()}();