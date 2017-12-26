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
$(".message-box").css("border", "2px solid red");
//textarea background
$(".message-box").css("background", "pink");
//function to append and turn to uppercase
$("#button").on("click", function() {
  var comment = $('.message-box').val().toUpperCase();
    $('#visible-comment').html(comment);
    $("#visible-comment").css("background", "teal");
    $('.message-box').hide();
  return false;
});