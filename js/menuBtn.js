const clock_menus = document.querySelectorAll('#clock_menu li');

for(let i = 0; i < clock_menus.length; i++) {
  clock_menus[i].addEventListener('click', (e) => {
    e.preventDefault();
    for(let j = 0; j < clock_menus.length; j++){
      clock_menus[j].classList.remove('menu_btn');
    }
    clock_menus[i].classList.add('menu_btn');
  })
}