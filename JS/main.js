const menuItems = document.querySelectorAll('.menu-nav');

const menuHamburguesa = document.querySelector('#hamburguesa')

menuHamburguesa.addEventListener('click', function(){
    document.body.classList.toggle('mobile-menu-active')
});

menuItems.forEach(function(item){
    item.addEventListener('click', function(e){
        const activeItem = document.querySelector('.active');
        activeItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

