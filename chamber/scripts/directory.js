const url = '../data/members.json';
const cards = document.querySelector('#cards');

async function getMembersData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('No se pudo cargar el JSON');

    const data = await response.json();

    if (data && Array.isArray(data.companies)) {
      displayMembers(data.companies);
    } else {
      console.error('El JSON no tiene la propiedad "companies"', data);
    }
  } catch (err) {
    console.error('Error al obtener datos:', err);
  }
}

function displayMembers(companies) {
  companies.forEach(company => {
    const card = document.createElement('section');
    const names = document.createElement('h2');
    const portrait = document.createElement('img');

    names.textContent = company.name;
    portrait.src = company.image;
    portrait.alt = `Portrait of ${company.name}`;
    portrait.loading = 'lazy';
    portrait.width = 340;
    portrait.height = 440;

    card.append(names, portrait);
    cards.appendChild(card);
  });
}

getMembersData();
