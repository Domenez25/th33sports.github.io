// account.login button functions
function openLogin() {

    var url = "/login.html";
    
    var width = 620;
    var height = 510;
    
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
        window.location.href = '/profile.html';
    } else {
      openLogin();
    }
}

// theme management
window.onload = function() {
  const cookies = document.cookie.split('; ');
  let isLoggedIn = false;
  let themeUrl
  for (let cookie of cookies) {
      const [name, value] = cookie.split('=');
      if ((value === 'admin' || value === 'not_admin')) {
              if (value === "admin") {
                  document.getElementById("admin").innerHTML = "Admin tool"
              }
          isLoggedIn = true;
          themeUrl = JSON.parse(localStorage.getItem(name)).theme
          break;
      }
  }
  if (!isLoggedIn) {
      themeUrl = 'default';
  }
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `/themes/${themeUrl}.css`;

  document.head.appendChild(link);
}


// nav bar and footer generato
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

nav.innerHTML = `
  <ul>
    <li><a href="/Home.html">Home</a></li>
    <li><a href="/schedule.html">minigames</a></li>
    <li><a href="/Teams.html">Teams</a></li>
    <li><a href="/store.html">Store</a></li>
  </ul>
  <div class="account">
    <a id="admin" href="/admin.html"></a>
    <a href="#" onclick="loginButton()">Account/Login</a>
  </div>
`;

const styleElement = document.createElement('style');
styleElement.setAttribute('type', 'text/css');
styleElement.textContent = `
.footer {
  padding: 0;
  text-align: center;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.footer-links {
  margin-bottom: 10px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
}

.footer-links a:hover {
  color: #ddd;
}

.footer-text {
  color: #aaa;
  font-size: 14px;
}

`;
document.head.appendChild(styleElement);


footer.innerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-links">
      <a href="/help.html">About Us</a>
      <a href="#" onclick="support()">Contact Admins</a>
      <a href="/help.html">Help</a>
      <a href="/download-support.html">Download Support</a>
    </div>
    <p class="footer-text">&copy; 2023 Esports Website. All rights reserved.</p>
  </div>
</footer>

`;

for (const cookie of cookies) {
    const [username, value] = cookie.split("=");
}

function support() {
  var url = "/popups/support.html";
  var width = 400;
  var height = 300;
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  window.open(url, "Login/Signup", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
}