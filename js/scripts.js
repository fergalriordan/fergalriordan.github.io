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

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.top = "0";
}
function closemenu(){
  sidemenu.style.top = "-100vh";
}

// Close menu when clicking on a nav link
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#sidemenu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closemenu();
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleWorkBtn = document.getElementById('toggleWork');
  const hiddenWorks = document.querySelectorAll('.work.hidden');
  
  toggleWorkBtn.addEventListener('click', function(event) {
    event.preventDefault();
    hiddenWorks.forEach(work => {
      work.classList.toggle('hidden');
    });
    this.textContent = this.textContent === 'See More' ? 'See Less' : 'See More';
  });
});