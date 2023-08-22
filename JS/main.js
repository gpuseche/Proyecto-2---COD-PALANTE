//menu desplegable
const menuHamburguesa = document.querySelector('#hamburguesa')

menuHamburguesa.addEventListener('click', function(){
    document.body.classList.toggle('mobile-menu-active')
});


//sostener el "hover" de color amarillo en el nav
const menuItems = document.querySelectorAll('.menu-nav');

menuItems.forEach(function(item){
    item.addEventListener('click', function(e){
        const activeItem = document.querySelector('.active');
        activeItem.classList.remove('active');
        e.target.classList.add('active');
    });
});


//activar modo oscuro
const modoOscuroBtn = document.querySelector('#modo-oscuro')

modoOscuroBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode')
});