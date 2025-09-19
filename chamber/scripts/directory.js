const url = './data/members.json';


const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch(url);

    const data = await response.json();

      displayMembers(data.companies);





}

      getMembersData()

const displayMembers = (companies) => {
  companies.forEach(company => {
    const card = document.createElement('section');
    

    // names
    const name = document.createElement('h2');
    name.textContent = company.name;

    // img
    const portrait = document.createElement('img');
    portrait.src = company.image;
    portrait.alt = `Logo of ${company.name}`;
    portrait.loading = 'lazy';
    portrait.width = 120;
    portrait.height = 120;

    // address
    const address = document.createElement('p');
    address.textContent = `📍 ${company.address}`;

    // phone
    const phone = document.createElement('p');
    phone.textContent = `📞 ${company.phone}`;

    // Website
    const website = document.createElement('a');
    website.href = company.website;
    website.target = "_blank";
    website.textContent = "🌐 Visit Website";

    // Industry
    const industry = document.createElement('p');
    industry.textContent = `🏭 Industry: ${company.industry}`;

    // Contact Person
    const contact = document.createElement('p');
    contact.textContent = `👤 Contact: ${company.contact_person}`;

    // Email
    const email = document.createElement('a');
    email.href = `mailto:${company.email}`;
    email.textContent = `✉️ ${company.email}`;

    
    card.append(name, portrait, address, phone, website, industry, contact, email);

    
    cards.appendChild(card);
  });
};
