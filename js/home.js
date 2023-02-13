$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front End Developer", "Writter", "Learner", "Student","Cloud Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front End Developer", "Writter", "Learner", "Student","Cloud Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});   

function NewTab1() {
    window.open(
    "https://www.hackerrank.com/certificates/0633d274e89b", "_blank");
}
function NewTab2() {
    window.open(
    "https://www.hackerrank.com/certificates/138684356d29", "_blank");
}
function NewTab3() {
    window.open(
    "https://www.hackerrank.com/certificates/fe568034ff56", "_blank");
}
function NewTab4() {
    window.open(
    "https://mohit-saxena-to-do-list.netlify.app", "_blank");
}
function NewTab5() {
    window.open(
    "https://shutterstock-jovac.netlify.app/", "_blank");
}
function NewTab6() {
    window.open(
    "https://mohitsaxena2981.github.io/tindog/", "_blank");
}
function NewTab7() {
    window.open(
    "https://mohitsaxena2981.github.io/drumkit1/", "_blank");
}
function NewTab8() {
    window.open(
    "https://www.hackerrank.com/certificates/cc0c404109b7", "_blank");
}

function NewTab9() {
    window.open(
    "https://mohit-saxena-coloshop.netlify.app/", "_blank");
}
function NewTab10() {
    window.open(
    "https://mohit-saxena-todoapp.netlify.app/", "_blank");
}
function NewTab11() {
    window.open(
    "https://www.hackerrank.com/certificates/e821fb9956fe", "_blank");
}
const countEl = document.getElementById('count');


updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/lap/mouse/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";


  
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


function sendmail()
{
    
}