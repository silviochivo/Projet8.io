const modal1 = document.getElementById('myModal1');
const modalBtn1 = document.getElementById('modalBtn1');
const closeBtn1 = modal1.querySelector('.close');

const modal2 = document.getElementById('myModal2');
const modalBtn2 = document.getElementById('modalBtn2');
const closeBtn2 = modal2.querySelector('.close');

// Ouvrir la première modale
modalBtn1.addEventListener('click', () => {
  modal1.style.display = 'block';
});

// Fermer la première modale
closeBtn1.addEventListener('click', () => {
  modal1.style.display = 'none';
});

// Fermer la première modale en cliquant en dehors de celle-ci
window.addEventListener('click', (event) => {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
});

// Ouvrir la deuxième modale
modalBtn2.addEventListener('click', () => {
  modal2.style.display = 'block';
});

// Fermer la deuxième modale
closeBtn2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

// Fermer la deuxième modale en cliquant en dehors de celle-ci
window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
});