window.onload = function() {

   
    var name = localStorage.getItem('name');
  
    if (name != "undefined" || name != "null") {
      document.getElementById('welcomeMessage').innerHTML = "Hello " + name;
    } else
      document.getElementById('welcomeMessage').innerHTML = "Hello!";
    }