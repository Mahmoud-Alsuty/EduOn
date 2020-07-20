
/*$(function (){
  'useStrict';
  let winH = $(window).height();
      let  upperH = $('.upperBar').innerHeight();
       let navH  = $('.navbar').innerHeight();
  $('.slider').height(winH - (upperH + navH))
});*/


const home= document.getElementById('home');
const about= document.getElementById('about');
const blog= document.getElementById('blog');
const contact= document.getElementById('contact');

about.addEventListener('click', function(e){
  home.classList.remove('active');
  about.classList.add('active');
  blog.classList.remove('active');
  contact.classList.remove('active');
});
home.addEventListener('click', function(e){
  home.classList.add('active');
  about.classList.remove('active');
  blog.classList.remove('active');
  contact.classList.remove('active');
});
blog.addEventListener('click', function(e){
  home.classList.remove('active');
  about.classList.remove('active');
  blog.classList.add('active');
  contact.classList.remove('active');
});
contact.addEventListener('click', function(e){
  home.classList.remove('active');
  about.classList.remove('active');
  blog.classList.remove('active');
  contact.classList.add("active");
});

const web=document.querySelector('.featuredview .web');
  const  market=document.querySelector('.featuredview .market');
   const logo=document.querySelector('.featuredview .logo');
     
     const webi= document.querySelectorAll("featuredview .shuffle-imgs .row .websites");
     const marketi= document.querySelectorAll("featuredview .shuffle-imgs .row  .marketing");
     const  logoi= document.querySelectorAll("featuredview .shuffle-imgs .row .logos");
      const all =document.querySelector('.featuredview .all');
     
web.addEventListener('click', function(evt){
  
  web.classList.add("active");
  all.classList.remove("active");
  marketi.style.display ="inline";
  logoi.style.opacity="0.2";
  
});
      
