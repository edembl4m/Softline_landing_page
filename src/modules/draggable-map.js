let isDragging = false;
let offsetX, offsetY;
const draggable = document.getElementById('draggable');
const container = document.querySelector('.office-map__map');

draggable.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - draggable.getBoundingClientRect().left;
  offsetY = e.clientY - draggable.getBoundingClientRect().top;
  draggable.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const newX = e.clientX - offsetX;

  draggable.style.left = `${Math.min(0, Math.max(newX, container.clientWidth - draggable.clientWidth))}px`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggable.style.cursor = 'grab';
});