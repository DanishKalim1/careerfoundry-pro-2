/* javascript function for appending user input in a div*/
function myFormFunc(){
  var get_data_1 = document.getElementById('get_data');
  var myForm = document.myForm_1;
  var user_val =  myForm.name.value;
  var user_number = myForm.number.value;
  var user_email = myForm.email.value;
  var user_message = myForm.message.value;
  get_data.innerHTML = 'Dear user your name is: <br>'+user_val+ '<br>your number is:<br> '+user_number+'<br>your email is :<br>'+user_email+'<br> your message is : <br>'+user_message;
}