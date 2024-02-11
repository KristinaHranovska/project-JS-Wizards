
function createModalButton(obj) {
  const modalButtons = document.getElementById('modalButtons');

  const button = document.createElement('button');
  button.className = 'modal-button-favorites';
  button.setAttribute('type', 'button');
  button.textContent = 'Add to favorites';

  const svgIcon = document.createElementNS("svg");
  svgIcon.className = 'modal-button-favorites-icon';
  
  const useElement = document.createElementNS("use");
  useElement.setAttribute('href', `icon-favorites-heart`);
  
  svgIcon.appendChild(useElement);
  button.appendChild(svgIcon);

  modalButtons.appendChild(button);

  button.addEventListener('click', function() {
    if (button.textContent === 'Add to favorites') {
      button.textContent = 'Remove from favorites';
    } else {
      button.textContent = 'Add to favorites';
    }
  });
}

const exampleObject = {
  _id: 'icon-favorites-heart',
};

createModalButton(exampleObject);