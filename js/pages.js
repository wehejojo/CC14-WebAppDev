$(function() {
  let audio = new Audio("../audio/click-effect-short.mp3");
  audio.volume = 0.2;
  
  const relative_url_redirect = (location) => {
    audio.play();
    setTimeout(() => {
      window.location.href = location;
    }, 200);
  }
  const url_redirect = (location) => {
    audio.play();
    setTimeout(() => {
      window.location = location;
    }, 200);
  }

  $("#back").on("click", function(){
    relative_url_redirect("../index.html");
  });
  $("#about").on("click", function(){
    relative_url_redirect("./pages/about.html");
  });
  $("#skills").on("click", function(){
    relative_url_redirect("./pages/skills.html");
  });
  $("#contact").on("click", function(){
    relative_url_redirect("./pages/contact.html");
  });
  $("#contact-gmail").on("click", function(){
    relative_url_redirect("mailto:jojoliwag4@gmail.com");
  });
  $("#contact-github").on("click", function(){
    url_redirect("https://github.com.wehejojo")
  });
  $("#contact-fb").on("click", function(){
    url_redirect("https://www.facebook.com/johannliwagg/")
  });

  var isChrome = (navigator.userAgent.indexOf("Chrome") != -1 && navigator.vendor.indexOf("Google Inc") != -1);
  
  if (!isChrome){ $('#iframeAudio').remove() }
  else { $('#playAudio').remove() }
  
  $(document).on("click", function(){
    console.log(audio);
    audio.play();
  });

});