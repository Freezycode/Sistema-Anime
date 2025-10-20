let menuBtn = document.querySelector('#menu-btn');
let sideBar = document.querySelector('.side-bar');
let navbar = document.querySelector('.side-bar .navbar');
let closeBtn = document.querySelector('#close-btn');

menuBtn.onclick = () =>{
   sideBar.classList.toggle('active');
}

closeBtn.onclick = () =>{
   sideBar.classList.remove('active');
}

let searchForm = document.querySelector('.header .flex .search-form');
let searchToggler = document.querySelector('#search-toggler');

searchToggler.onclick = () =>{
   searchForm.classList.toggle('active');
}

let header = document.querySelector('.header');

window.onscroll = () =>{
   searchForm.classList.remove('active');

   if(window.scrollY > 0){
      header.classList.add('active');
   }else{
      header.classList.remove('active')
   }
}

window.onclick = (e) =>{
   if(!navbar.contains(e.target) && e.target !== menuBtn){
      sideBar.classList.remove('active');
   }

   if(!searchForm.contains(e.target) && e.target !== searchToggler){
      searchForm.classList.remove('active');
   }
}

let list_items = document.querySelectorAll('.filter .list .item');

list_items.forEach(items => {

   items.onclick = () =>{

      list = items.parentElement.parentElement;
      output = list.querySelector('.output');

      output.value = items.innerHTML;
   }

});

var swiper = new Swiper('.hero-slider', {
   loop: true,
   grabCursor:true,
 
   pagination: {
     el: '.swiper-pagination',
     clickable:true,
     dynamicBullets: true,
   },
 
   scrollbar: {
     el: '.swiper-scrollbar',
   },
});

var swiper = new Swiper(".trending-slider", {
   slidesPerView: "auto",
   spaceBetween: 20,
   loop: true,
   grabCursor: true,
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
   },
});