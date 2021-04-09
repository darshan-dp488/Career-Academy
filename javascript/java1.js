function mobileFunction() {
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}





function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function ayFunction() {
  var dotes = document.getElementById("dotes");
  var moreinfoText = document.getElementById("moreinfo");
  var btnText = document.getElementById("ayBtn");

  if (dotes.style.display === "none") {
    dotes.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreinfoText.style.display = "none";
  } else {
    dotes.style.display = "none";
    btnText.innerHTML = "Read less";
    moreinfoText.style.display = "inline";
  }
}


