
//smooth-scroll function
var $root = $('html, body');
     $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
      scrollTop: $(href).offset().top
      }, 2000, function () {
       window.location.hash = href;
      });
       return false;
      });
 //twitter function
 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
//aos animation function
AOS.init();
//tooltip function
 $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
 //tooltip on button
   $(function () {
   $('#[insert your tooltip ID here]').tooltip();
 });     
/* javascript function for appending user input in a div
function myFormFunc(){
  var get_data_1 = document.getElementById('get_data');
  var myForm = document.myForm_1;
  var user_val =  myForm.name.value;
  var user_number = myForm.number.value;
  var user_email = myForm.email.value;
  var user_message = myForm.message.value;
  get_data.innerHTML = 'Dear user your name is: <br>'+user_val+ '<br>your number is:<br> '+user_number+'<br>your email is :<br>'+user_email+'<br> your message is : <br>'+user_message;
}
$(".message-box").css("border", "2px solid red");
$(document).ready(function(){
  alert("Document is ready!");
});
*/
//textarea border
//textarea background
$(".message-box").css("background", "pink");
//function to append and turn to uppercase
$("#button").on("click", function() {
var comment = $('.message-box').val().toUpperCase();
  if($(".message-box").val() === ""){
     $(".message-box").css("border", "2px solid red");
     $('#visible-comment').html(comment).append("<br>Please fill the message");
   }
    else{
     $("#visible-comment").html(comment).append("<br>Thanks we will reply you soon!");
     $('.message-box').hide();
  return false;
}
});
//character count
$(".message-box").on("keyup", function() {
    console.log("keyup happened"); 
    var textlength = 3;
    var text = "string";
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#char-count").html(charCount);
     //conditional
    if (charCount > 50) {
        //will turnto red if char-count gets above 50
        $("#char-count").css({"color": "red", "font-size": "18px"});
    } else {
        //under 50 character it remain white
        $("#char-count").css({"color": "white", "font-size": "18px"});
    };
});
//end of document.ready here
//work section
$(document).ready(function(){
  for(var i = 0; i < works.length; ++i ) {
    $("#work").append("\
  <div class='col-sm-3 col-md-3'>\
    <a href='" + works[i].url + "' class='work-img'>\
      <img class='img-responsive' src='" + works[i].pic + "'>\
       <span class='info title'>" + works[i].title + "</span>\
    </a>\
  </div>\
");
var images = $("#work img");
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
      } else {
      $(images[i]).css("border", "2px solid salmon");
    };
    $(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});
  };
});