
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');

    
    if (href.startsWith('./')) {
      
      return;
    } else if (href.startsWith('#')) {
      
      event.preventDefault();
      const targetId = href.slice(1); 
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});


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


const projectButton = document.querySelector('.project-button');
if (projectButton) {
  projectButton.addEventListener('click', () => {
    window.location.href = './projects.html'; 
  });
}

const resumeButton = document.querySelector('.resume-button');
if (resumeButton) {
  resumeButton.addEventListener('click', () => {
    window.open('./resume.pdf', '_blank'); 
  });
}


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
