// ---- Tab switching ----
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ---- Mobile menu ----
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.top = "0";
}
function closemenu() {
  sidemenu.style.top = "-100vh";
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('copyright-year').textContent = new Date().getFullYear();

  // Close mobile menu on nav link click
  document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', closemenu);
  });

  // ---- See More / See Less toggle ----
  const toggleWorkBtn = document.getElementById('toggleWork');
  const hiddenWorks = document.querySelectorAll('.work.hidden');

  toggleWorkBtn.addEventListener('click', function (event) {
    event.preventDefault();
    hiddenWorks.forEach(work => work.classList.toggle('hidden'));
    this.textContent = this.textContent === 'See More' ? 'See Less' : 'See More';
  });

  // ---- Nav backdrop on scroll ----
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ---- Scroll-spy: highlight active nav link ----
  const sections = document.querySelectorAll('#header, #about, #portfolio, #contact');
  const navLinks = document.querySelectorAll('nav ul li a');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(section => spyObserver.observe(section));

  // ---- Fade-in on scroll ----
  const fadeTargets = [
    ...document.querySelectorAll('.work'),
    ...document.querySelectorAll('.about-col-1, .about-col-2'),
    ...document.querySelectorAll('#contact .contact'),
  ];

  fadeTargets.forEach((el, i) => {
    el.classList.add('fade-in');
    // Stagger cards in the same grid row
    if (el.classList.contains('work')) {
      el.style.transitionDelay = `${(i % 3) * 0.1}s`;
    }
  });

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeTargets.forEach(el => fadeObserver.observe(el));
});
