let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
function login()
{
   // let regexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
   let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;

    let psregexp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,13}$/;

    if(regexp.test(email.value) == true) 
    {   
        document.getElementById("error").innerHTML = "Valid";
    }
    if(regexp.test(email.value) == false)
    {
        alert("Please enter a valid Email");

    }
   if(psregexp.test(pwd.value) == false)
    {
    
        alert("Please enter a valid Password");
        
    }
    if(psregexp.test(pwd.value) == true)
    {
        document.getElementById("error1").innerHTML = "Valid Password";
        pwd.style.border = "green";
    }
    
}
