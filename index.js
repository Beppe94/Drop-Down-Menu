const carMenu = document.getElementById('car-menu');
const dropCarMenu = document.getElementById('drop-car-menu');
const modelMenu = document.getElementById('drop-model-menu');
const arrow = document.getElementById('arrow');
const brandsArrow = document.getElementById('brands-arrow');


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

window.addEventListener('load', function() {

    document.addEventListener('click', (e) => {
        document.querySelectorAll('.menu-car-model').forEach(function(el) {
            if(el !== e.target)  {
                el.classList.remove('active');
                brandsArrow.classList.remove('down')
            }
        });
        console.log(e.target.matches('.car-menu'));
        if(e.target.matches('.car')) {
            e.target.closest('.drop-down-brands').querySelector('.menu-car-model').classList.toggle('active');
            e.target.closest('.drop-down-brands').querySelector('.arrow').classList.add('down')
        }
    });
});
