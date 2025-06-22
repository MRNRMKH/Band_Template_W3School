//-----------------------------------//
// کد ها مربوط به ریسپانسیو سازی هدر


let header= document.getElementById('header');
let mobileMenu= document.getElementById('mobile-menu');

let headerHeight =header.clientHeight

mobileMenu.onclick = function(){
    let isClosed = header.clientHeight === headerHeight;
    if(isClosed){
        header.style.height = 'auto';
        console.log('click')
    } else{
        header.style.height = null;
    }
}

//-----------------------------------//
//با اینکه مسیر عکس ها درست وارد شده،در اجرای عادی تصاویر در اسلایدر در فایل اچ دی ام ال نمایش داده نمی شن
//اما وقتی پروژه بهصورت لوکال هاست اجرا میشود،همه چیز به درستی کار میکند و این نشون دهنده ان است که کدها به درستی اجرا می شوند


const slides = [
    {   
        image:`url(../Imgs/Slide/ny.jpg)`, 
        title: " New York " ,
        desc:  "The atmosphere in New York is lorem ipsum."
    },
    {   
        image: `url(../Imgs/Slide/la.jpg)`, 
        title: " Los Angles " ,
        desc:  "The atmosphere in Los Angles is lorem ipsum."
    },
    {   
        image: `url(../Imgs/Slide/chicago.jpg)`, 
        title: " Chicago " ,
        desc:  "The atmosphere in Chicago is lorem ipsum."
    },
];

  let current = 0;
    const slider=document.getElementById('slider');
  function showSlide(index) {
    const slide =slides[index];
    const slider =document.getElementById("slider");
    slider.style.backgroundImage = slide.image;
    document.getElementById("slide-title").textContent = slides[index].title;
    document.getElementById("slide-desc").textContent = slides[index].desc;
  }
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4000); 
  