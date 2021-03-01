// scroll navbar effects 
document.addEventListener('scroll', () => {
  let nav = document.querySelector('#navbar')
  let logo = document.querySelector('#logo')
  if (window.pageYOffset > 100) {
    nav.classList.add('shadow')
    nav.classList.add('bg-white')
    logo.classList.remove('fa-3x')
    logo.classList.add('fa-2x')
    nav.style.transition = "0.3s ease"
    logo.style.transition = "0.5s ease"
  } else {
    nav.classList.remove('shadow')
    nav.classList.remove('bg-white')
    logo.classList.add('fa-3x')
  }
});


// sidebar mobile
let sidebar = document.querySelector('#sidebar');
let mobileMenu = document.querySelector('#mobileMenu');
sidebar.addEventListener('click', () =>{
  mobileMenu.classList.add('active-sidebar')
});

mobileMenu.addEventListener('click', ()=> {
  mobileMenu.classList.remove('active-sidebar')
});


// counter
let counterValores = {
  'Delivery': 21,
  'Annucios': 99,
  'Easy-buy': 121,
  'Confirmed': 120
};


let parejasValores = Object.entries(counterValores);

/* ['delivey', 21] , el[0] => 'delivey'
['Annucios', 99]
['Easy-buy', 121]
['Confimed', 120] */

//console.log(parejasValores);

parejasValores.forEach(el => {
  let elemento = document.querySelector(`[data-counter="${el[0]}"]`);
  let time = 800 / el[1];
  let i = 0;
  elemento.innerHTML = i;

  let inteval = setInterval(() => {
    i++
    elemento.innerHTML = i
    if (i >= el[1]) {
      clearInterval(inteval);
    }
  }, time);
}); 

 
 