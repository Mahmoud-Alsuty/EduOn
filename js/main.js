
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
  contact.classList.add('active');
});
