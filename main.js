function Send_email() {
   
    user_name = document.getElementById("name");
    user_email = document.getElementById("email");
    user_message = document.getElementById("message");
    var name = user_name.value;
    var email = user_email.value;
    var message = user_message.value;
 
    url = "http://34.93.39.164/cgi-bin/server.py?name="+name+"&email="+email+"&message="+message;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = display_output
    function display_output() {
        var output = xhr.responseText;
        alert("Messege Sended!!!");
        //alert(output);
       // back.innerHTML = output;

    }
}