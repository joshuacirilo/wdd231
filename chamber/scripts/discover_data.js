const url_data_chamber_items = './data/chamber_items_area.json';


const cards = document.querySelector('#cards');

async function getChamberItems() {
    const response = await fetch(url_data_chamber_items);

    const data = await response.json();

      displayitems(data.items);





}

getChamberItems()

const displayitems = (items) => {
  items.forEach(item => {
    const card = document.createElement('section');
    

    // names
    const name = document.createElement('h2');
    name.textContent = item.name;

    // img
    const portrait = document.createElement('img');
    portrait.src = item.image;
    portrait.alt = `Logo of ${item.name}`;
    portrait.loading = 'lazy';
    portrait.width = 120;
    portrait.height = 120;

    // location
    const location = document.createElement('p');
    location.textContent = `📍 ${item.location}`;
    

    // short description
    const description = document.createElement('p');
    description.textContent = item.description;

    // button
    const button_learn_more = document.createElement('button');
    button_learn_more.textContent = 'Learn More';
    button_learn_more.classList.add('learn-more-btn');

    // dialog
    const dialog = document.createElement('dialog');
    dialog.classList.add('info-dialog');

    // contenido del dialog
    dialog.innerHTML = `
      <h2>${item.name}</h2>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Description:</strong> ${item.fullDescription}</p>
      <button class="close-btn">Close</button>
    `;

    // evento para abrir el dialogo
    button_learn_more.addEventListener('click', () => {
      dialog.showModal();
    });

    // evento para cerrar el dialogo
    dialog.querySelector('.close-btn').addEventListener('click', () => {
      dialog.close();
    });

    // agregar todo al card
    card.append(name, portrait, location, description, button_learn_more, dialog);
    cards.appendChild(card);
  });
};
