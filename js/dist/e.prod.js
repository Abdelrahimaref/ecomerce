"use strict";function Send(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:2500}).fire({type:"success",title:"Item Added To Cart Succefully"})}function goUP(){window.scrollTo(0,0)}$(window).on("scroll",function(){300<=$(window).scrollTop()?$("#goUPButton").slideDown(700):$("#goUPButton").slideUp(700)}),$(document).ready(function(){$("a").on("click",function(o){if(""!==this.hash){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},1200,function(){window.location.hash=t})}})});