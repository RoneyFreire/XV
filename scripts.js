// ============================
// Cuenta regresiva
// ============================
const fechaDelEvento = new Date("2025-11-23T21:00:00").getTime();

const diasElemento = document.getElementById("dias");
const horasElemento = document.getElementById("horas");
const minElemento = document.getElementById("min");
const segElemento = document.getElementById("seg");

if (diasElemento && horasElemento && minElemento && segElemento) {
  setInterval(function () {
    const ahora = new Date().getTime();
    const diff = fechaDelEvento - ahora;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    diasElemento.innerText = dias;
    horasElemento.innerText = horas;
    minElemento.innerText = minutos;
    segElemento.innerText = segundos;
  }, 1000);
} else {
  console.warn("No se encontraron los elementos del contador regresivo.");
}

// ============================
// Reproducir/Pausar audio
// ============================
function playAudio() {
  var audio = document.getElementById("audioPrueba");
  var btnPlay = document.getElementById("btnPlay");
  var btnPausa = document.getElementById("btnPausa");

  if (audio && btnPlay && btnPausa) {
    audio.play();
    btnPlay.classList.add("hidden");
    btnPausa.classList.remove("hidden");
  }
}

function pauseAudio() {
  var audio = document.getElementById("audioPrueba");
  var btnPlay = document.getElementById("btnPlay");
  var btnPausa = document.getElementById("btnPausa");

  if (audio && btnPlay && btnPausa) {
    audio.pause();
    btnPlay.classList.remove("hidden");
    btnPausa.classList.add("hidden");
  }
}

// ============================
// Scroll hacia contenido
// ============================
function scrollToContent() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

// ============================
// Inicializar AOS
// ============================
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true
    });
  } else {
    console.error("AOS no está definido.");
  }

  
});

document.addEventListener('DOMContentLoaded', () => {
    const fiestaSection = document.querySelector('.ceremonia-fiesta');
  
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        document.body.classList.add('seccion-fiesta-activa');
      } else {
        document.body.classList.remove('seccion-fiesta-activa');
      }
    }, {
      threshold: 0.5 // Detecta cuando al menos el 50% de la sección es visible
    });
  
    if (fiestaSection) {
      observer.observe(fiestaSection);
    }
  });

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });
// ============================
// Mostrar secciones al hacer scroll
// ============================
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // AOS existente
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true
      });
    }
  });

  
  