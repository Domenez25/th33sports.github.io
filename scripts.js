function openLogin() {

    var url = "login.html";
    
    var width = 400;
    var height = 500;
    
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    
    window.open(url, "Login/Signup", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
}

