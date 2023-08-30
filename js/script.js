/* ==================== Toggle navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/* ================ Scroll bar active ==================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
    else {
      // Remove 'active' class from all nav links for sections other than navbar
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
    }
  });

  /* ==================== Sticky navbar ====================  */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*Remove toggle bar when click navbar link on scroll*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* =============== Scroll Animation and effects ============= */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.edu-row, .sk-row, .project-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h3, .about-content h3', { origin: 'left' });
ScrollReveal().reveal('.about-content , .home-content h4', { origin: 'right' });
ScrollReveal().reveal('.btn-con', { origin: 'left', distance: '30px', delay: 200 });
ScrollReveal().reveal('.btn', { origin: 'left', distance: '30px', delay: 200 });

/* =============== Text Animation and effects ================ */
/* =============== Lines are subjected to change ============= */

const lines = ["Software and Web Development", "Graphics and Visual Design", "User-centric Design", "Transforming ideas into reality through Software Development, Web Design, Graphics, and Intuitive User Experiences <br> - From Pixels to Platforms"];
const typedElements = [
  document.getElementById("line1"),
  document.getElementById("line2"),
  document.getElementById("line3"),
  document.getElementById("line4"),
];

function typeNextLine(index) {
  if (index >= typedElements.length) return;

  const typed = new Typed(typedElements[index], {
    strings: [lines[index]],
    typeSpeed: 50,
    showCursor: false,
    onComplete: () => {
      setTimeout(() => {
        typeNextLine(index + 1);
      }, 1000); // Delay before typing the next line
    }
  });
}

typeNextLine(0);

/* ==================== Read more button functionality ====================  */
const readMoreBtn = document.getElementById('readMoreBtn');
const additionalContent = document.querySelector('.additional-content');

readMoreBtn.addEventListener('click', () => {
  additionalContent.classList.toggle('show');
  if (additionalContent.classList.contains('show')) {
    readMoreBtn.textContent = 'Read Less';
  } else {
    readMoreBtn.textContent = 'Read More';
  }
});

// Rest of the code...

/* ====================  Contact form submission ==================== */
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Perform client-side validation
  if (!firstName || !lastName || !number || !email || !message) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please fill in all fields."
    });
    return;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Invalid email format."
    });
    return;
  }

  // Send email using EmailJS
  var templateParams = {
    name: firstName + " " + lastName,
    to_name: "faiazasim@gmail.com",
    number: number,
    email: email,
    message: message,
  };

  emailjs.send("service_cw2e0gr", "template_i55yasc", templateParams)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      var successMessage = "Your message has been successfully sent! Thank you for contacting.";
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: successMessage,
        confirmButtonText: "OK"
      });
      document.getElementById("contactForm").reset(); // Reset form
    }, function (error) {
      console.log("FAILED...", error);
      alert("Failed to send message. Please try again later.");
    });
});

/* ====================  Light and Dark Mode ==================== */
let colorModeButton = document.querySelector('.color-mode');
let isLightMode = localStorage.getItem('isLightMode') === 'true';

setTheme(isLightMode);

colorModeButton.addEventListener('click', toggleColorMode);

function setTheme(isLightMode) {
  if (isLightMode) {
    document.body.classList.add('light-mode');
    localStorage.setItem('isLightMode', 'true');
  } else {
    document.body.classList.remove('light-mode');
    localStorage.setItem('isLightMode', 'false');
  }
}

function toggleColorMode() {
  isLightMode = !isLightMode;
  setTheme(isLightMode);
}
