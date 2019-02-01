let btn = document.querySelector('.top');
function toggleBtn () {
    if(pageYOffset > 350) {
        btn.classList.add('top--show');
    } else {
        btn.classList.remove('top--show');
    }
}
window.addEventListener('scroll', toggleBtn);