var registeredUser = [];
function validateForm(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("rePassword").value;
    if (email.length < 1){
        alert("please fill in email address");
        return false;
    } else if (password.length<1){
        alert("please fill in the password");
        return false;
    } else if(repassword.length <1){
        alert("please fill in Re-type password");
        return false;
    }
    if (password !== repassword){
        alert("Passwords do not match");
        return false;
    }
    registeredUser.push({email, password});
    alert("Registered");
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('retype-password').value = '';
    window.location.assign("http://167.88.242.62/loginscreen.html");
}
function  accountCheck(){
    var accEmail = document.getElementById("accEmail").value;
    var accPass = document.getElementById("accPass").value;
    if (accEmail.length<1){
        alert("Please fill in email address");
        return false;
    } else if (accPass.length<1){
        alert("Please fill in password");
        return false;
    }
    var registered;
    for(var i=0;i<registeredUser.length;i++){
        if(accEmail===registeredUser[i].email){
            registered = registeredUser[i];
            break;
        }
    }
    if(!registered||accPass!==registered.password) {
        alert("Email or Password incorrect");
        return false;
    } 
    alert("Login successfully!");
    document.getElementById("accEmail").value = "";
    document.getElementById("accPass").value = "";
    window.location.assign("http://167.88.242.62/search.html");
}