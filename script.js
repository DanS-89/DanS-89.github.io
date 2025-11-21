// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Optional: highlight nav link for current section on scroll
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute('href').slice(1);
    return document.getElementById(id);
}).filter(Boolean);

function onScroll() {
    const scrollPos = window.scrollY + 120; // offset for header
    let activeId = null;

    for (const section of sections) {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            activeId = section.id;
            break;
        }
    }

    navLinks.forEach(link => {
        const id = link.getAttribute('href').slice(1);
        if (id === activeId) {
            link.style.color = '#f5f5f7';
        } else {
            link.style.color = ''; // back to CSS default
        }
    });
}

window.addEventListener('scroll', onScroll);
onScroll();