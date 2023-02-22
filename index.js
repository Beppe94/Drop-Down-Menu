const carMenu = document.getElementById('car-menu');
const dropCarMenu = document.getElementById('drop-car-menu')


document.addEventListener('click', (e) => {
    if(e.target.closest('.car-menu')) {
        dropCarMenu.classList.add('active');
    } else {
        dropCarMenu.classList.remove('active')
    }
})