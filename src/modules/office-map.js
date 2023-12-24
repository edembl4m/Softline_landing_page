const officeBtn = document.querySelector('.office-map__btn');
const officeBtnArrow = document.querySelector('.office-map__btn-arrow');
const officeMapSubmenu = document.querySelector('.office-map__submenu');
const officeMapListItem = document.querySelectorAll('.office-map__list-item');


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
officeBtn.addEventListener('click', () => openSubmenu());

function openSubmenu() {
    officeBtnArrow.classList.toggle('arrow-active');
    officeMapSubmenu.classList.toggle('submenu-active');
}



function closeTabs(index) {
    for(let i = 0; i < officeMapListItem.length; i++) {
        officeMapListItem[i].classList.remove('active');
        allCity.forEach(item => {
            item.classList.remove('mark-show')
        })

    }
}

function toggleSelect(tab) {
    closeTabs(tab.id);
    tab.classList.add('active');
    console.log(tab.id);
    zonesObj[tab.id].forEach(item => {
        item.classList.add('mark-show');
    });

}


officeMapListItem.forEach(item => {
    item.addEventListener('click', () => toggleSelect(item))
});