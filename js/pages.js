$(function() {
  let audio = new Audio("../audio/click-effect-short.mp3");
  audio.volume = 0.2;
  
  const delayUserLocationRedirect = (location) => {
    audio.play();
    setTimeout(() => {
      window.location.href = location;
    }, 200);
  }

  $("#back").on("click", function(){
    delayUserLocationRedirect("../index.html");
  });
  $("#about").on("click", function(){
    delayUserLocationRedirect("./pages/about.html");
  });
  $("#skills").on("click", function(){
    delayUserLocationRedirect("./pages/skills.html");
  });
  $("#contact").on("click", function(){
    delayUserLocationRedirect("./pages/contact.html");
  });

  var isChrome = (navigator.userAgent.indexOf("Chrome") != -1 && navigator.vendor.indexOf("Google Inc") != -1);
  
  if (!isChrome){ $('#iframeAudio').remove() }
  else { $('#playAudio').remove() }
  
  $(document).on("click", function(){
    console.log(audio);
    audio.play();
  });

});