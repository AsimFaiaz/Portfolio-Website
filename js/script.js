
/* Toggle navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* Scroll bar active */
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
        };
    });

    // /* Sticky navbar */
    // let header = document.querySelector('header');

    // header.classList.toggle('sticky', window.scrollY > 100);

    /*Remove toggle bar when click navbar link on scroll*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Scroll Animation and effects */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.edu-row, .sk-row, .project-box, .contact-form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h3, .about-content h3', { origin:'left' });
ScrollReveal().reveal('.about-content', { origin:'right' });

/* Text Animation and effects */

const lines = ["Software Development", "Web Development", "Graphics Design", "Video Editing"];
const typedElements = [
  document.getElementById("line1"),
  document.getElementById("line2"),
  document.getElementById("line3"),
  document.getElementById("line4")
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

/* Read more button functionality */
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

// function sendMail(){
//   var params ={
//     firstname: document.getElementById("firstName").value,
//     lastname: document.getElementById ("lastName").value,
//     email: document.getElementById("email").value,
//     number: document.getElementById("number").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID  = "service_cw2e0gr";
//   const templateID = "template_i55yasc";

//   emailjs.send(serviceID, templateID, params)
//     .then((res) => {
//       document.getElementById("firstName").value = "";
//       document.getElementById("lastName").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("number").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//     alert("Message sent successfully!");
//   })
//     .catch((err) => console.log(err));
// }


document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

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
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset(); // Reset form
    }, function (error) {
      console.log("FAILED...", error);
      alert("Failed to send message. Please try again later.");
    });
});