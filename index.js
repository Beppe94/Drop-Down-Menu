const dropCarMenu = document.getElementById('drop-car-menu');
const dropBikeMenu = document.getElementById('drop-bike-menu');
const arrow = document.getElementById('arrow');

//Cars Menus
document.addEventListener('click', (e) => {
    if(e.target.closest('.car-menu')) {
        dropCarMenu.classList.add('active');
        arrow.classList.remove('right');
        arrow.classList.add('down');
    } else {
        dropCarMenu.classList.remove('active');
        arrow.classList.remove('down');
        arrow.classList.add('right');
    } 
});


document.addEventListener('click', (e) => {
    document.querySelectorAll('.drop-down-brands').forEach(function(el) {
        if(el !== e.target)  {
            el.querySelector('.menu-car-model').classList.remove('active');
            el.querySelector('.arrow').classList.remove('down');
        }
    });
    if(e.target.matches('.car')) {
        e.target.closest('.drop-down-brands').querySelector('.menu-car-model').classList.toggle('active');
        e.target.closest('.drop-down-brands').querySelector('.arrow').classList.add('down')
    }
});

//Bikes Menus
document.addEventListener('click', (e) => {
    if(e.target.closest('.bike-menu')) {
        dropBikeMenu.classList.add('active');
        if(e.target.querySelector('.arrow')) {
            e.target.querySelector('.arrow').classList.add('down');
        }
    } else {
        dropBikeMenu.classList.remove('active');
        document.querySelector('.bike-menu').querySelector('.arrow').classList.remove('down')
    } 
});
document.addEventListener('click', (e) => {
    document.querySelectorAll('.drop-down-bike-brands').forEach(function(el) {
        if(el !== e.target)  {
            el.querySelector('.menu-bike-model').classList.remove('active');
            el.querySelector('.arrow').classList.remove('down');
        }
    });
    if(e.target.matches('.bike')) {
        e.target.closest('.drop-down-bike-brands').querySelector('.menu-bike-model').classList.toggle('active');
        e.target.closest('.drop-down-bike-brands').querySelector('.arrow').classList.add('down')
    }
});
