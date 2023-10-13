var typed = new Typed(".typing",{
    strings: ["Game Developer","Full-stack Developer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

const openModal = () => {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  function GoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function openMenu(){
    document.getElementById("menu-mobile").classList.add("active");
  }

  function unactiveMenu(){
    document.getElementById("menu-mobile").classList.remove("active");
  }