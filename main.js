// Menú móvil
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Selección de ciudad para pedidos de 2.500 g
const NUMEROS_WHATSAPP = {
  rionegro: '573233270397',
  medellin: '573206150266',
};

const modalRegion = document.getElementById('modalRegion');
const modalCerrar = document.getElementById('modalCerrar');
let mensajePendiente = '';

document.querySelectorAll('[data-whatsapp-region]').forEach((boton) => {
  boton.addEventListener('click', () => {
    mensajePendiente = boton.getAttribute('data-mensaje');
    modalRegion.hidden = false;
  });
});

modalRegion.querySelectorAll('[data-region]').forEach((opcion) => {
  opcion.addEventListener('click', () => {
    const numero = NUMEROS_WHATSAPP[opcion.getAttribute('data-region')];
    window.open(`https://wa.me/${numero}?text=${mensajePendiente}`, '_blank', 'noopener');
    modalRegion.hidden = true;
  });
});

modalCerrar.addEventListener('click', () => {
  modalRegion.hidden = true;
});

modalRegion.addEventListener('click', (evento) => {
  if (evento.target === modalRegion) {
    modalRegion.hidden = true;
  }
});
