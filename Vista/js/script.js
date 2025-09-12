// Verifica que el botón de menú exista antes de usarlo
let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');
let menuBtn = document.querySelector('#menu-btn');

// Solo si el botón existe, agrega el evento
if(menuBtn){
   menuBtn.onclick = () =>{
      navbar.classList.toggle('active');
      if(profile) profile.classList.remove('active');
   }
}

// Ocultar menús al hacer scroll, si existen
window.onscroll = () =>{
   if(profile) profile.classList.remove('active');
   if(navbar) navbar.classList.remove('active');
}

