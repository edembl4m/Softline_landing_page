const officeBtn = document.querySelector('.office-map__btn');
const officeBtnArrow = document.querySelector('.office-map__btn-arrow');
const officeMapSubmenu = document.querySelector('.office-map__submenu');
// const officeMapSubmenuTitle = document.querySelectorAll('.office-map__submenu-item-title');
const officeMapListItem = document.querySelectorAll('.office-map__list-item');

officeBtn.addEventListener('click', () => openSubmenu());


function openSubmenu() {
    officeBtnArrow.classList.toggle('arrow-active');
    officeMapSubmenu.classList.toggle('submenu-active');
}

function closeTabs() {
    officeMapListItem.forEach(item => {
        item.classList.remove('active');
    })
}

function toggleSelect(tab) {
    closeTabs();
    tab.classList.add('active');
}


officeMapListItem.forEach(item => {
    item.addEventListener('click', () => toggleSelect(item))
});