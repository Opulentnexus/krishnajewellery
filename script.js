// Simple scroll animation
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

// Initial animation state
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(40px)";
});




const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, { threshold: 0.2 }); // Triggers when 20% of the H2 is visible

observer.observe(document.querySelector('.collection h2'));



function showSection(sectionId) {
    // First, hide all open sections
    hideAll();
    
    // Show the specific section clicked
    const target = document.getElementById(sectionId);
    target.classList.add('active');
    
    // Smooth scroll to the section
    target.scrollIntoView({ behavior: 'smooth' });
}

function hideAll() {
    const sections = document.querySelectorAll('.hidden-section');
    sections.forEach(sec => {
        sec.classList.remove('active');
    });
}



document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    // Select all individual links inside the navigation
    const allLinks = document.querySelectorAll('.nav-links a');

    if(menuBtn) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }
        });
    }

    /* --- NEW LOGIC TO CLOSE MENU ON CLICK --- */
    allLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class to hide the menu
            navLinks.classList.remove('active');
            // Change the X back to the Hamburger icon
            menuBtn.innerHTML = "☰";
        });
    });
});





function sendWhatsApp() {
    const name = document.getElementById('wa-name').value;
    const message = document.getElementById('wa-msg').value;
    const phoneNumber = "918921276403"; // Your phone number

    const text = `Hello Luxora! My name is ${name}. I am interested in: ${message}`;
    const encodedText = encodeURIComponent(text);
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappURL, '_blank');
}