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
    const address = document.createElement('p');
    address.textContent = `📍 ${item.address}`;
    

    
    // description
    const description = document.createElement('a');
    description.textContent = description.name;


    
    card.append(name, portrait, address, description);

    
    cards.appendChild(card);
  });
};
