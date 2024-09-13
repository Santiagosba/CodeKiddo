// script.js

document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
    });
});
