const officeBtn = document.querySelector('.office-map__btn');
const officeBtnArrow = document.querySelector('.office-map__btn-arrow')


officeBtn.addEventListener('click', () => {
    officeBtnArrow.classList.toggle('arrow-active');
    console.log(1);
});