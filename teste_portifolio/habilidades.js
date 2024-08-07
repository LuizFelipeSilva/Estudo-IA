document.addEventListener("DOMContentLoaded", function() {
    const menuVideo = document.querySelector(".menu-video img");
    const navbar = document.querySelector("header.navbar");

    menuVideo.addEventListener("click", function() {
        navbar.classList.toggle("expanded");
    });
});

function showSkillDetails(skill) {
    const selectedIcon = document.getElementById('selected-icon');
    const skillDetails = document.querySelector('.skill-details');
    let iconSrc = '';
    let skillText = '';

    switch(skill) {
        case 'python':
            iconSrc = 'assets/images/python_icone.png';
            skillText = 'Python';
            break;
        case 'html':
            iconSrc = 'assets/images/html-5-icon.png';
            skillText = 'HTML';
            break;
        case 'css':
            iconSrc = 'assets/images/css-icon.png';
            skillText = 'CSS';
            break;
        case 'javascript':
            iconSrc = 'assets/images/javascript-logo.png';
            skillText = 'JavaScript';
            break;
        case 'mysql':
            iconSrc = 'assets/images/database-mysql.svg';
            skillText = 'MySQL';
            break;
        case 'office':
            iconSrc = 'assets/images/escritorio.png';
            skillText = 'Office';
            break;
    }

    selectedIcon.src = iconSrc;
    selectedIcon.style.display = 'block';
    skillDetails.style.display = 'block';
}
