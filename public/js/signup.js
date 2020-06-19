let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let username = document.getElementById("username");
let cpass = document.getElementById("cpass");
let pass = document.getElementById("pass");
let phoneno = document.getElementById("phoneno");
let add1 = document.getElementById("add1");
function myname()
{
    let fregexp = /^[a-zA-Z]+$/;
    let lregexp = /^[a-zA-Z]+$/;
    let uregexp = /^([a-zA-Z0-9]+)|\w{3,8}$/;
    if(fregexp.test(fname.value) == true)
    {
        document.getElementById("check1").innerHTML = "FirstName Added";
    }
    if(fregexp.test(fname.value) == false)
    {
        document.getElementById("check1").innerHTML = "Invalid";
    }
    
    if(lregexp.test(lname.value) == true)
    {
        document.getElementById("check2").innerHTML = "LastName Added";
    }
    if(lregexp.test(lname.value) == false)
    {
        document.getElementById("check2").innerHTML = "Invalid";
    }
    if(uregexp.test(username.value) == true)
    {
        document.getElementById("check3").innerHTML = "Valid Username";
    }
    if(uregexp.test(username.value) == false)
    {
        document.getElementById("check3").innerHTML = "Invalid Username";
    }
    
}
function mypass()
{
    let psregexp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,13}$/;
    let pmregexp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,10}$/;
    let ppregexp = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8}$/;
    if(psregexp.test(pass.value) == true)
    {
        document.getElementById("check4").innerHTML = "Strong Password";
        pass.style.border = "2px solid green";
    }
    if(pmregexp.test(pass.value) == true)
    {
        document.getElementById("check4").innerHTML = "Medium Strength Password";
        pass.style.border = "2px solid orange";
    }
    
    if(ppregexp.test(pass.value) == true)
    {
        alert("Poor password please retype password");
    }
    
    if(cpass.value === pass.value)
    {
        document.getElementById("check5").innerHTML = "Password Matched"; 
        cpass.style.border = "2px solid green";
    }
    
    if(cpass.value != pass.value)
    {
        document.getElementById("check5").innerHTML = "Password  Mismatched"; 
        cpass.style.border = "2px solid red";
    }
}

function myphone()
{
    let pnreexp = /(^\d{10}|(\d{3}\-\d{3}\-\d{4})|(\d{3}\.\d{3}\.\d{4})|(\d{3}\s\d{3}\s\d{4}\s))$/;
    if(pnreexp.test(phoneno.value))
    {
        document.getElementById("check6").innerHTML = "Valid Phone Number";
    }
    else
    {
        document.getElementById("check6").innerHTML = "Invalid Phone Number";
        check6.style.border = "2px solid red";
    }
}
function myadd()
{
    if(add1.value == false)
    {
        document.getElementById("check7").innerHTML = "Insert address for communication";
        check7.style.border = "2px solid red";
    }
    else
    {
        document.getElementById("check7").innerHTML = "Address for communication recorded";
    }
}
function myreset(){
    document.getElementById("mybtn2").reset();
}
