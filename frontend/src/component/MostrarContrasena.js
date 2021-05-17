export   const mostrarContrasena = () =>{
    var input = document.getElementById("password");
    if(input.type == "password"){
        input.type = "text"
        setTimeout(() =>{
        input.type = "password"
 
        }, 3000)
    }else{
      input.type = "password";
    }
    }