// ============================
// Cuenta regresiva
// ============================
const fechaDelEvento = new Date("2025-06-21T21:00:00").getTime();

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
// Reproducir/Pausar audio manual
// ============================
function playAudio() {
  var audio = document.getElementById("audioPrueba");
  var btnPlay = document.getElementById("btnPlay");
  var btnPausa = document.getElementById("btnPausa");
  var widget = document.getElementById("musicWidget");

  if (audio && btnPlay && btnPausa && widget) {
    audio.play();
    btnPlay.classList.add("hidden");
    btnPausa.classList.remove("hidden");
    widget.classList.add("latido");
  }
}

function pauseAudio() {
  var audio = document.getElementById("audioPrueba");
  var btnPlay = document.getElementById("btnPlay");
  var btnPausa = document.getElementById("btnPausa");
  var widget = document.getElementById("musicWidget");

  if (audio && btnPlay && btnPausa && widget) {
    audio.pause();
    btnPlay.classList.remove("hidden");
    btnPausa.classList.add("hidden");
    widget.classList.remove("latido");
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
// Todo el DOM cargado
// ============================
document.addEventListener('DOMContentLoaded', function () {
  // AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true
    });
  } else {
    console.error("AOS no está definido.");
  }

  // Animación de bienvenida + Música al tocar
  const overlay = document.getElementById('intro-overlay');
  const audio = document.getElementById('audioPrueba');

  const dismissIntro = () => {
    if (overlay) {
      overlay.classList.add('fade-out');
      setTimeout(() => overlay.style.display = 'none', 1000);
    }
    if (audio) {
      audio.play().catch(err => {
        console.warn("La música no se pudo reproducir automáticamente:", err);
      });
    }
  };

  if (overlay) {
    overlay.addEventListener('click', dismissIntro);
    overlay.addEventListener('touchstart', dismissIntro);
  }

  // Activar color de fondo en sección fiesta
  const fiestaSection = document.querySelector('.ceremonia-fiesta');
  const fiestaObserver = new IntersectionObserver(entries => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      document.body.classList.add('seccion-fiesta-activa');
    } else {
      document.body.classList.remove('seccion-fiesta-activa');
    }
  }, {
    threshold: 0.5
  });
  if (fiestaSection) {
    fiestaObserver.observe(fiestaSection);
  }

  // Mostrar secciones al hacer scroll
  const sections = document.querySelectorAll('section');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});

// ============================
// Marcar body como cargado al terminar
// ============================
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});
