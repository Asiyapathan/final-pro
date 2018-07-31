function myFunction() {
        
    var name = document.getElementById('usr').value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if(name.length < 5  || name.length >30) {
        alert("Name length must be greater than 8 and less than 30");
    }
    var password = document.getElementById('pwd').value;
    if(password == "") {
        alert("password must be filled out");
        return false;
    }   
    if(password.length < 8 || password.length >15) {
       alert("Password length must be greater than 8 and less than 15");    
    }
    var email=document.getElementById('email').value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
    {
            alert("invalid email address");
            return false;
    
    }
    var phone = document.getElementById('Phone').value;
    if (phone == "") {
        alert("Enter phone number");
        return false;
    }
    var cname = document.getElementById('cname').value;
    if (cname == "") {
        alert("college name must be filled out");
        return false;
    }
    if(cname.length < 5  || name.length >30) {
        alert("college name length must be greater than 8 and less than 30");
    }
    var city = document.getElementById('city').value;
    if (city == "") {
        alert("Enter city name");
        return false;
    }
    if(city.length < 5  || city.length >15) {
        alert("city  name length must be greater than 8 and less than 15");
    }
    var branch = document.getElementById('branch').value;
    if (branch == "") {
        alert("Branch field empty!!!");
        return false;
    }
    if(branch.length < 1  || branch.length >15) {
        alert("Branch field length must be greater than 1 and less than 15");
    }
   

    console.log(name+">>>>"+password+">>>"+email+">>>"+phone+">>>"+cname+">>>"+city+">>>"+branch);
}