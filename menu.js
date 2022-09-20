<script>
// Heading Loading - Menu options loading
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
    
var textWrapperr = document.querySelector('.ml14');
textWrapperr.innerHTML = textWrapperr.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var a = anime.timeline({autoplay: false, loop: false})
  .add({
    targets: '.ml14 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 300 + 30 * i
  });

var b = anime.timeline({autoplay: false, loop: false})
  .add({
    targets: '.ml14 .letter',
    translateY: [0,-100],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 300 + 30 * i
  });

var count = 0;
$('.menu-btn-wr').click(function() {
    if (count == 0)
    {
         a.play();
         a.restart();
         count++;
    } 
   else
    {
        b.play();
        b.restart();
        count=0;
    }
});

var textWrapperrr = document.querySelector('.ml15');
textWrapperrr.innerHTML = textWrapperrr.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var c = anime.timeline({autoplay: false, loop: false})
  .add({
    targets: '.ml15 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 300 + 30 * i
  });

var d = anime.timeline({autoplay: false, loop: false})
  .add({
    targets: '.ml15 .letter',
    translateY: [0,-100],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 300 + 30 * i
  });

var countt = 0;
$('.menu-btn-wr').click(function() {
    if (countt == 0)
    {
         setTimeout(function() {
         		c.play();
         }, 500);
         c.restart();
         countt++;
    } 
   else
    {
        setTimeout(function() {
         		d.play();
         }, 500);
        d.restart();
        countt=0;
    }
});

var textWrapperrrr = document.querySelector('.ml16');
textWrapperrrr.innerHTML = textWrapperrrr.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var e = anime.timeline({autoplay: false, loop: false})
  .add({
    targets: '.ml16 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 300 + 30 * i
  });

var f = anime.timeline({autoplay: false, loop: false})
  .add({
    targets: '.ml16 .letter',
    translateY: [0,-100],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 300 + 30 * i
  });

var counttt = 0;
$('.menu-btn-wr').click(function() {
    if (counttt == 0)
    {
         setTimeout(function() {
         		e.play();
         }, 1000);
         e.restart();
         counttt++;
    } 
   else
    {
        setTimeout(function() {
         		f.play();
         }, 1000);
        f.restart();
        counttt=0;
    }
});
</script>
