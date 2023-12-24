const officeBtn = document.querySelector('.office-map__btn');
const officeBtnArrow = document.querySelector('.office-map__btn-arrow');
const officeMapSubmenu = document.querySelector('.office-map__submenu');
const officeMapListItem = document.querySelectorAll('.office-map__list-item');  //пункт меню
const officeMapSubmenuTitle = document.querySelectorAll('.office-map__submenu-item-title'); //пункт подменю


const allCity = document.querySelectorAll('.office-map__map-mark')
const moscow = document.querySelectorAll('.moscow');
const center = document.querySelectorAll('.center');
const northwest = document.querySelectorAll('.northwest');
const south = document.querySelectorAll('.south');
const volga = document.querySelectorAll('.volga');
const ural = document.querySelectorAll('.ural');
const siberia = document.querySelectorAll('.siberia');
const farEast = document.querySelectorAll('.far-east');

const zonesObj = {
    'allCity': allCity,
    'moscow': moscow,
    'center': center,
    'northwest': northwest,
    'south': south,
    'volga': volga,
    'ural': ural,
    'siberia': siberia,
    'farEast': farEast,
}


//кнопка Офисы Softline
officeBtn.addEventListener('click', () => toggleSubmenu());

function toggleSubmenu() {
    officeBtnArrow.classList.toggle('arrow-active');
    officeMapSubmenu.classList.toggle('submenu-active');
}

function closeSubmenu() {
    officeBtnArrow.classList.remove('arrow-active');
    officeMapSubmenu.classList.remove('submenu-active');
}



function closeTabs() {
    for(let i = 0; i < officeMapListItem.length; i++) {
        officeMapListItem[i].classList.remove('active');
        allCity.forEach(item => {
            item.classList.remove('mark-show')
        })

    }
    officeMapSubmenuTitle.forEach(item => {item.classList.remove('active')});
}

function toggleSelect(tab) {
    closeTabs();
    const zoneEl = document.querySelectorAll(`[data-zone="${tab.dataset.zone}"]`);  //выборка активного пункта меню и подменю
    zoneEl.forEach(item => {    //подсветка выбранного путкта меню и подменю
        item.classList.add('active');
    });
    zonesObj[tab.dataset.zone].forEach(item => { //показать точки городов зоны
        item.classList.add('mark-show');
    });
    closeSubmenu();
}


officeMapListItem.forEach(item => { //событие пунктов меню
    item.addEventListener('click', () => toggleSelect(item))
});

officeMapSubmenuTitle.forEach(item => { //событие пунктов подменю
    item.addEventListener('click', () => toggleSelect(item));
})