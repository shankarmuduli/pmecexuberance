

// 			function countdown(){
// 				var now = new Date();
// 				var eventDate = new Date(2020, 03, 05);

// 				var currentTiime = now.getTime();
// 				var eventTime = eventDate.getTime();

// 				var remTime = eventTime - currentTiime;

// 				var s = Math.floor(remTime / 1000);
// 				var m = Math.floor(s / 60);
// 				var h = Math.floor(m / 60);
// 				var d = Math.floor(h / 24);

// 				h %= 24;
// 				m %= 60;
// 				s %= 60;

// 				h = (h < 10) ? "0" + h : h;
// 				m = (m < 10) ? "0" + m : m;
// 				s = (s < 10) ? "0" + s : s;

// 				document.getElementById("days").textContent = d;
// 				document.getElementById("days").innerText = d;

// 				document.getElementById("hours").textContent = h;
// 				document.getElementById("minutes").textContent = m;
// 				document.getElementById("seconds").textContent = s;

// 				setTimeout(countdown, 1000);
// 			}

//             countdown();
            
            var slideIndex = 0;
      carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

		
