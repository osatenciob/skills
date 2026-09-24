/**
 * TimberTutor — interactividad
 * Todo el código es JavaScript puro, sin dependencias externas.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------------------
     Menú móvil
     --------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  const closeNav = () => {
    navList.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar el menú al elegir una sección (útil en móvil)
  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  /* ---------------------------------------------------------------------
     Botón "Ver técnicas": revela un tip del oficio y lleva a la sección
     --------------------------------------------------------------------- */
  const tips = [
    'Afila tu formón antes de cada sesión: una herramienta sin filo arranca fibra, no la corta.',
    'Deja secar el pegamento bajo presión al menos 30 minutos antes de liberar las prensas.',
    'Marca siempre con lápiz de carpintero, nunca con bolígrafo: el grafito se lija, la tinta se queda.',
    'Prueba el ensamble en seco antes de aplicar cola. No hay segunda oportunidad con la cola puesta.',
    'La veta de la madera manda: corta a favor de ella para conseguir un canto limpio.'
  ];

  const ctaBtn = document.getElementById('ctaBtn');
  const tipTag = document.getElementById('tipTag');
  const tipText = document.getElementById('tipText');
  let tipIndex = 0;

  ctaBtn.addEventListener('click', () => {
    // Mostrar (o rotar) el tip del oficio
    tipText.textContent = 'Consejo del taller: ' + tips[tipIndex % tips.length];
    tipIndex += 1;
    tipTag.hidden = false;

    // Reiniciar la animación de entrada aunque ya esté visible
    tipTag.style.animation = 'none';
    // Forzar reflow para que el navegador vuelva a aplicar la animación
    void tipTag.offsetWidth;
    tipTag.style.animation = '';

    // Llevar al usuario a la sección de técnicas
    document.getElementById('tecnicas').scrollIntoView({ behavior: 'smooth' });
  });

});
