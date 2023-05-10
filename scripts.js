function openLogin() {

    var url = "login.html";
    
    var width = 400;
    var height = 430;
    
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    
    window.open(url, "Login/Signup", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
}

  
  function loginButton() {
    const cookies = document.cookie.split('; ');
    let isLoggedIn = false;
    let username = null;
    
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if ((value === 'admin' || value === 'not_admin')) {
            isLoggedIn = true;
            break;
        }
    }
    
    if (isLoggedIn) {
        window.location.href = 'profile.html';
    } else {
      openLogin();
    }
}
  