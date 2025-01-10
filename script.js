// // script.js

// // Toggle navigation for smaller screens
// const navToggle = document.querySelector('.chat-button');
// const navLinks = document.querySelector('.nav-links');

// if (navToggle && navLinks) {
//   navToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//   });
// }

// // Smooth scrolling for navigation links
// const links = document.querySelectorAll('.nav-links a');
// links.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const targetId = link.getAttribute('href').slice(2); // Remove "./"
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // Form validation for the contact page
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//   contactForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const subject = document.getElementById('subject').value.trim();
//     const message = document.getElementById('message').value.trim();

//     if (!name || !email || !subject || !message) {
//       alert('All fields are required!');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       alert('Please enter a valid email address!');
//       return;
//     }

//     alert('Thank you for your message!');
//     contactForm.reset();
//   });
// }

// // Dynamic theme switcher
// const themeToggle = document.createElement('button');
// themeToggle.textContent = 'Switch Theme';
// themeToggle.style.position = 'fixed';
// themeToggle.style.bottom = '20px';
// themeToggle.style.right = '20px';
// themeToggle.style.padding = '10px';
// themeToggle.style.backgroundColor = '#4c2ce6';
// themeToggle.style.color = '#fff';
// themeToggle.style.border = 'none';
// themeToggle.style.borderRadius = '5px';
// themeToggle.style.cursor = 'pointer';
// document.body.appendChild(themeToggle);

// themeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-theme');
//   if (document.body.classList.contains('dark-theme')) {
//     document.body.style.backgroundColor = '#333';
//     document.body.style.color = '#fff';
//   } else {
//     document.body.style.backgroundColor = '#e5d9f2';
//     document.body.style.color = '#000';
//   }
// });

// // Gallery lightbox effect (for adventure.html)
// const galleryImages = document.querySelectorAll('.gallery-image');
// if (galleryImages.length > 0) {
//   galleryImages.forEach(image => {
//     image.addEventListener('click', () => {
//       const lightbox = document.createElement('div');
//       lightbox.id = 'lightbox';
//       lightbox.style.position = 'fixed';
//       lightbox.style.top = '0';
//       lightbox.style.left = '0';
//       lightbox.style.width = '100%';
//       lightbox.style.height = '100%';
//       lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
//       lightbox.style.display = 'flex';
//       lightbox.style.justifyContent = 'center';
//       lightbox.style.alignItems = 'center';
//       lightbox.style.zIndex = '1000';

//       const img = document.createElement('img');
//       img.src = image.src;
//       img.style.maxWidth = '90%';
//       img.style.maxHeight = '90%';

//       lightbox.appendChild(img);
//       document.body.appendChild(lightbox);

//       lightbox.addEventListener('click', () => {
//         document.body.removeChild(lightbox);
//       });
//     });
//   });

// }


// huletegnaw java script
// script.js

// Navigation Toggle for Smaller Screens
// const navToggle = document.querySelector('.chat-button');
// const navLinks = document.querySelector('.nav-links');

// if (navToggle && navLinks) {
//   navToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//   });
// }

// // Close Navigation Menu on Link Click (Mobile)
// const navItems = document.querySelectorAll('.nav-links a');
// navItems.forEach(item => {
//   item.addEventListener('click', () => {
//     if (navLinks.classList.contains('active')) {
//       navLinks.classList.remove('active');
//     }
//   });
// });

// // Typewriter Effect for Hero Section
// const heroTitle = document.querySelector('.hero-title');
// const textArray = ["Hi, I'm Bedru Mekiyu", "I'm a Fullstack Developer", "I'm a Data Scientist"];
// let textIndex = 0;
// let charIndex = 0;

// function typeWriter() {
//   if (heroTitle) {
//     if (charIndex < textArray[textIndex].length) {
//       heroTitle.textContent += textArray[textIndex].charAt(charIndex);
//       charIndex++;
//       setTimeout(typeWriter, 100);
//     } else {
//       setTimeout(() => {
//         charIndex = 0;
//         textIndex = (textIndex + 1) % textArray.length;
//         heroTitle.textContent = '';
//         typeWriter();
//       }, 2000);
//     }
//   }
// }
// typeWriter();

// // Smooth Scrolling for Navigation Links
// navItems.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const targetId = link.getAttribute('href').slice(2);
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // Scroll-to-Top Button
// const scrollToTopButton = document.createElement('button');
// scrollToTopButton.textContent = '↑';
// scrollToTopButton.style.position = 'fixed';
// scrollToTopButton.style.bottom = '20px';
// scrollToTopButton.style.right = '20px';
// scrollToTopButton.style.padding = '10px';
// scrollToTopButton.style.backgroundColor = '#4c2ce6';
// scrollToTopButton.style.color = '#fff';
// scrollToTopButton.style.border = 'none';
// scrollToTopButton.style.borderRadius = '5px';
// scrollToTopButton.style.cursor = 'pointer';
// scrollToTopButton.style.display = 'none';
// document.body.appendChild(scrollToTopButton);

// window.addEventListener('scroll', () => {
//   scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
// });

// scrollToTopButton.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// // Highlight Active Navigation Link
// const sections = document.querySelectorAll('section');
// window.addEventListener('scroll', () => {
//   let current = '';
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     if (window.scrollY >= sectionTop - 60) {
//       current = section.getAttribute('id');
//     }
//   });

//   navItems.forEach(link => {
//     link.classList.remove('active');
//     if (link.getAttribute('href').slice(2) === current) {
//       link.classList.add('active');
//     }
//   });
// });

// // Skills Progress Bars Animation
// const skillBars = document.querySelectorAll('.skills-bar');
// const options = { threshold: 0.5 };
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.width = entry.target.getAttribute('data-progress') + '%';
//     }
//   });
// }, options);

// if (skillBars.length > 0) {
//   skillBars.forEach(bar => {
//     observer.observe(bar);
//   });
// }

// // Form Validation for Contact Page
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//   contactForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const subject = document.getElementById('subject').value.trim();
//     const message = document.getElementById('message').value.trim();

//     if (!name || !email || !subject || !message) {
//       alert('All fields are required!');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       alert('Please enter a valid email address!');
//       return;
//     }

//     alert('Thank you for your message!');
//     contactForm.reset();
//   });
// }

// // Gallery Lightbox Effect
// const galleryImages = document.querySelectorAll('.gallery-image');
// if (galleryImages.length > 0) {
//   galleryImages.forEach(image => {
//     image.addEventListener('click', () => {
//       const lightbox = document.createElement('div');
//       lightbox.id = 'lightbox';
//       lightbox.style.position = 'fixed';
//       lightbox.style.top = '0';
//       lightbox.style.left = '0';
//       lightbox.style.width = '100%';
//       lightbox.style.height = '100%';
//       lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
//       lightbox.style.display = 'flex';
//       lightbox.style.justifyContent = 'center';
//       lightbox.style.alignItems = 'center';
//       lightbox.style.zIndex = '1000';

//       const img = document.createElement('img');
//       img.src = image.src;
//       img.style.maxWidth = '90%';
//       img.style.maxHeight = '90%';

//       lightbox.appendChild(img);
//       document.body.appendChild(lightbox);

//       lightbox.addEventListener('click', () => {
//         document.body.removeChild(lightbox);
//       });
//     });
//   });
// }



// navigator and tedergo
// script.js

// Navigation Toggle for Smaller Screens
// const navToggle = document.querySelector('.chat-button');
// const navLinks = document.querySelector('.nav-links');

// if (navToggle && navLinks) {
//   navToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//   });
// }

// // Close Navigation Menu on Link Click (Mobile)
// const navItems = document.querySelectorAll('.nav-links a');
// navItems.forEach(item => {
//   item.addEventListener('click', () => {
//     if (navLinks.classList.contains('active')) {
//       navLinks.classList.remove('active');
//     }
//   });
// });

// // Typewriter Effect for Hero Section
// const heroTitle = document.querySelector('.hero-title');
// const textArray = ["Hi, I'm Bedru Mekiyu", "I'm a Fullstack Developer", "I'm a Data Scientist"];
// let textIndex = 0;
// let charIndex = 0;

// function typeWriter() {
//   if (heroTitle) {
//     if (charIndex < textArray[textIndex].length) {
//       heroTitle.textContent += textArray[textIndex].charAt(charIndex);
//       charIndex++;
//       setTimeout(typeWriter, 100);
//     } else {
//       setTimeout(() => {
//         charIndex = 0;
//         textIndex = (textIndex + 1) % textArray.length;
//         heroTitle.textContent = '';
//         typeWriter();
//       }, 2000);
//     }
//   }
// }
// typeWriter();

// // Smooth Scrolling for Navigation Links
// navItems.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const targetId = link.getAttribute('href').slice(2);
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // Scroll-to-Top Button
// const scrollToTopButton = document.createElement('button');
// scrollToTopButton.textContent = '↑';
// scrollToTopButton.style.position = 'fixed';
// scrollToTopButton.style.bottom = '20px';
// scrollToTopButton.style.right = '20px';
// scrollToTopButton.style.padding = '10px';
// scrollToTopButton.style.backgroundColor = '#4c2ce6';
// scrollToTopButton.style.color = '#fff';
// scrollToTopButton.style.border = 'none';
// scrollToTopButton.style.borderRadius = '5px';
// scrollToTopButton.style.cursor = 'pointer';
// scrollToTopButton.style.display = 'none';
// document.body.appendChild(scrollToTopButton);

// window.addEventListener('scroll', () => {
//   scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
// });

// scrollToTopButton.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// // Highlight Active Navigation Link
// const sections = document.querySelectorAll('section');
// window.addEventListener('scroll', () => {
//   let current = '';
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     if (window.scrollY >= sectionTop - 60) {
//       current = section.getAttribute('id');
//     }
//   });

//   navItems.forEach(link => {
//     link.classList.remove('active');
//     if (link.getAttribute('href').slice(2) === current) {
//       link.classList.add('active');
//     }
//   });
// });

// // Search Button Functionality
// const searchButton = document.querySelector('.chat-button');
// if (searchButton) {
//   searchButton.addEventListener('click', () => {
//     const searchTerm = prompt("Enter your search query:");
//     if (searchTerm) {
//       let found = false;
//       sections.forEach(section => {
//         if (section.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
//           section.scrollIntoView({ behavior: 'smooth' });
//           section.style.border = '2px solid red';
//           found = true;
//           setTimeout(() => {
//             section.style.border = 'none';
//           }, 3000);
//         }
//       });

//       if (!found) {
//         alert("No matching content found!");
//       }
//     }
//   });
// }

// // Form Validation for Contact Page
// const contactForm = document.querySelector('.contact-form');
// if (contactForm) {
//   contactForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const subject = document.getElementById('subject').value.trim();
//     const message = document.getElementById('message').value.trim();

//     if (!name || !email || !subject || !message) {
//       alert('All fields are required!');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       alert('Please enter a valid email address!');
//       return;
//     }

//     alert('Thank you for your message!');
//     contactForm.reset();
//   });
// }

// // Ensure Links Work
// const projectButton = document.querySelector('.project-button');
// if (projectButton) {
//   projectButton.addEventListener('click', () => {
//     window.location.href = './projects.html'; // Replace with actual project page
//   });
// }

// const resumeButton = document.querySelector('.resume-button');
// if (resumeButton) {
//   resumeButton.addEventListener('click', () => {
//     window.open('./resume.pdf', '_blank'); // Replace with the actual resume file
//   });
// }

// // Gallery Lightbox Effect
// const galleryImages = document.querySelectorAll('.gallery-image');
// if (galleryImages.length > 0) {
//   galleryImages.forEach(image => {
//     image.addEventListener('click', () => {
//       const lightbox = document.createElement('div');
//       lightbox.id = 'lightbox';
//       lightbox.style.position = 'fixed';
//       lightbox.style.top = '0';
//       lightbox.style.left = '0';
//       lightbox.style.width = '100%';
//       lightbox.style.height = '100%';
//       lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
//       lightbox.style.display = 'flex';
//       lightbox.style.justifyContent = 'center';
//       lightbox.style.alignItems = 'center';
//       lightbox.style.zIndex = '1000';

//       const img = document.createElement('img');
//       img.src = image.src;
//       img.style.maxWidth = '90%';
//       img.style.maxHeight = '90%';

//       lightbox.appendChild(img);
//       document.body.appendChild(lightbox);

//       lightbox.addEventListener('click', () => {
//         document.body.removeChild(lightbox);
//       });
//     });
//   });
// }
//  latest try for today 



// Ensure Proper Navigation for Links
// const navLinks = document.querySelectorAll('.nav-links a');

// navLinks.forEach(link => {
//   link.addEventListener('click', event => {
//     const href = link.getAttribute('href');

//     // Check if it's an internal link (starts with './') or an external URL
//     if (href.startsWith('./')) {
//       // Allow navigation to other pages
//       window.location.href = href;
//     } else if (href.startsWith('#')) {
//       // Smooth scroll for in-page links
//       event.preventDefault();
//       const targetId = href.slice(1); // Remove the '#' symbol
//       const targetElement = document.getElementById(targetId);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   });
// });

// // Navigation Toggle for Smaller Screens
// const navToggle = document.querySelector('.chat-button');
// const navLinksContainer = document.querySelector('.nav-links');

// if (navToggle && navLinksContainer) {
//   navToggle.addEventListener('click', () => {
//     navLinksContainer.classList.toggle('active');
//   });
// }

// // Smooth Scrolling for Internal Page Links
// const internalLinks = document.querySelectorAll('a[href^="#"]');
// internalLinks.forEach(link => {
//   link.addEventListener('click', event => {
//     event.preventDefault();
//     const targetId = link.getAttribute('href').slice(1); // Remove the '#' symbol
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // Scroll-to-Top Button
// const scrollToTopButton = document.createElement('button');
// scrollToTopButton.textContent = '↑';
// scrollToTopButton.style.position = 'fixed';
// scrollToTopButton.style.bottom = '20px';
// scrollToTopButton.style.right = '20px';
// scrollToTopButton.style.padding = '10px';
// scrollToTopButton.style.backgroundColor = '#4c2ce6';
// scrollToTopButton.style.color = '#fff';
// scrollToTopButton.style.border = 'none';
// scrollToTopButton.style.borderRadius = '5px';
// scrollToTopButton.style.cursor = 'pointer';
// scrollToTopButton.style.display = 'none';
// document.body.appendChild(scrollToTopButton);

// window.addEventListener('scroll', () => {
//   scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
// });

// scrollToTopButton.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// Updated JavaScript Code (Final Fix)


// Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');

    // Internal links (navigate to another page or scroll to section)
    if (href.startsWith('./')) {
      // Allow navigation to other pages
      return; // Let the browser handle the navigation
    } else if (href.startsWith('#')) {
      // Smooth scroll for in-page links
      event.preventDefault();
      const targetId = href.slice(1); // Remove the '#' symbol
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Search Button Functionality
const searchButton = document.querySelector('.chat-button');
if (searchButton) {
  searchButton.addEventListener('click', () => {
    const searchTerm = prompt("Enter your search query:");
    if (searchTerm) {
      let found = false;
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
          section.scrollIntoView({ behavior: 'smooth' });
          section.style.border = '2px solid red';
          found = true;
          setTimeout(() => {
            section.style.border = 'none';
          }, 3000);
        }
      });

      if (!found) {
        alert("No matching content found!");
      }
    }
  });
}

// Buttons for Other Actions (e.g., Resume or Projects)
const projectButton = document.querySelector('.project-button');
if (projectButton) {
  projectButton.addEventListener('click', () => {
    window.location.href = './projects.html'; // Update with the correct page
  });
}

const resumeButton = document.querySelector('.resume-button');
if (resumeButton) {
  resumeButton.addEventListener('click', () => {
    window.open('./resume.pdf', '_blank'); // Update with the actual resume file
  });
}

// Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.backgroundColor = '#4c2ce6';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
