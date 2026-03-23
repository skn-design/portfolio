'use strict';

console.log("JS読み込みOK");

/*----------------------------------
loading
-----------------------------------*/


/*----------------------------------
ハンバーガーメニュー
-----------------------------------*/
document.addEventListener("DOMContentLoaded", () => {

  let ham = document.querySelector(".ham");
  let gnav = document.querySelector(".header-nav ul");

  ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    gnav.classList.toggle("active");
  });

  gnav.addEventListener("click", () => {
    ham.classList.remove("active");
    gnav.classList.remove("active");
  });

});


/*----------------------------------
scroll fade in
-----------------------------------*/
const targets = document.querySelectorAll(".scroll-fade");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.2
});

targets.forEach(el=>{
  observer.observe(el);
});

/*----------------------------------
skill
-----------------------------------*/
$(window).on('scroll', function() {
  $('.skill-content').each(function(){
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if(bottom_of_window > bottom_of_element - 100){ // 少し早めに出す
      $(this).addClass('show');
    }
  });
});

