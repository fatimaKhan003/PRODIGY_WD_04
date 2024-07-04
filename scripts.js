const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const skillIcons = document.querySelectorAll('.skill-icon');

skillIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const detail = icon.nextElementSibling;
        detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
    });
});

    // for about.html's hamburger menu
    function toggleMenu() {
        var navLinks = document.getElementById('nav-links');
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    }
//for projects.html
let currentProject = 0;
    const projects = document.querySelectorAll(".project-item");

    const showProject = (index) => {
        projects.forEach((project, i) => {
            project.classList.toggle("active", i === index);
        });
    };

    const nextProject = () => {
        currentProject = (currentProject + 1) % projects.length;
        showProject(currentProject);
    };

    const previousProject = () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        showProject(currentProject);
    };

    showProject(currentProject);
