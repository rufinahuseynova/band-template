const toogleBtn = document.querySelector(".toogle");
const toogleBtnIcon = document.querySelector(".toogle i");
const dropdownmenu = document.querySelector(".dropdownmenu");
toogleBtn.onclick = function () {
  dropdownmenu.classList.toggle("open");
  const isOpen = dropdownmenu.classList.contains("open");
  const faBars = document.querySelector(".fa-solid.fa-bars");
  if (isOpen) {
    toogleBtn.children[0].classList.remove('fa-solid','fa-bars');
    toogleBtn.children[0].classList.add('fa-solid','fa-x');

  } else {
    toogleBtn.children[0].classList.remove('fa-solid','fa-x');
    toogleBtn.children[0].classList.add('fa-solid', 'fa-bars');
  }
 
};
