// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
  mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Update active class for nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');

    // Close mobile menu after clicking
    mobileMenu.classList.remove('active');
    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
  });
});

// Order Modal
const orderBtn = document.querySelector('#order-btn');
const mobileOrderBtn = document.querySelector('#mobile-order-btn');
const orderModal = document.querySelector('#order-modal');
const closeOrder = document.querySelector('#close-order');
const orderItemBtns = document.querySelectorAll('.order-item-btn');

orderBtn.addEventListener('click', () => {
  orderModal.classList.add('active');
});

mobileOrderBtn.addEventListener('click', () => {
  orderModal.classList.add('active');
});

orderItemBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    orderModal.classList.add('active');
  });
});

closeOrder.addEventListener('click', () => {
  orderModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
  if (e.target === orderModal) {
    orderModal.classList.remove('active');
  }
});

// Order Form Submission (Mock)
document.getElementById('order-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Item added to cart! (Mock)');
  this.reset();
  orderModal.classList.remove('active');
});

// Reservation Form Submission (Mock)
document.getElementById('reservation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value.trim();
  const phone = this.querySelector('input[type="tel"]').value.trim();
  const date = this.querySelector('input[type="date"]').value;
  const guests = this.querySelector('select').value;

  if (!name || !phone || !date || !guests) {
    alert('Please fill in all required fields.');
    return;
  }

  alert('Table reserved successfully! (Mock)');
  this.reset();
});

// Table Selection
document.querySelectorAll('.table').forEach(table => {
  table.addEventListener('click', function() {
    document.querySelectorAll('.table').forEach(t => t.classList.remove('selected'));
    this.classList.add('selected');
  });
});

// Testimonial Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const sliderDots = document.querySelectorAll('.dot');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
let currentSlide = 0;

function showSlide(index) {
  testimonialCards.forEach(card => card.classList.remove('active'));
  sliderDots.forEach(dot => dot.classList.remove('active'));
  testimonialCards[index].classList.add('active');
  sliderDots[index].classList.add('active');
}

sliderNext.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % testimonialCards.length;
  showSlide(currentSlide);
});

sliderPrev.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
  showSlide(currentSlide);
});

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonialCards.length;
  showSlide(currentSlide);
}, 5000);

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Live Demo Disclaimer Modal
const liveDemoBtn = document.querySelector('#live-demo-btn');
const disclaimerModal = document.querySelector('#disclaimer-modal');
const closeDisclaimer = document.querySelector('#close-disclaimer');
const closeDisclaimerBtn = document.querySelector('#close-disclaimer-btn');

liveDemoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  disclaimerModal.classList.add('active');
});

closeDisclaimer.addEventListener('click', () => {
  disclaimerModal.classList.remove('active');
});

closeDisclaimerBtn.addEventListener('click', () => {
  disclaimerModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
  if (e.target === disclaimerModal) {
    disclaimerModal.classList.remove('active');
  }
});