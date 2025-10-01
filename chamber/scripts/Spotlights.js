const url_spotlights = './data/members.json';
const cards = document.querySelector('#cards');

async function getMembersData() {
  const response = await fetch(url_spotlights);
  const data = await response.json();
  displayMembers(data.companies);
}

getMembersData();

const displayMembers = (companies) => {

  const goldSilver = companies.filter(c => 
    c.membership.toLowerCase() === "gold" || 
    c.membership.toLowerCase() === "silver"
  );


  for (let i = goldSilver.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [goldSilver[i], goldSilver[j]] = [goldSilver[j], goldSilver[i]];
  }


  const numberToShow = Math.floor(Math.random() * 2) + 2; 
  const selected = goldSilver.slice(0, numberToShow);

 
  selected.forEach(company => {
    const card = document.createElement('section');
    card.classList.add("spotlight");

 
    const name = document.createElement('h2');
    name.textContent = company.name;

    const portrait = document.createElement('img');
    portrait.src = company.image;
    portrait.alt = `Logo of ${company.name}`;
    portrait.loading = 'lazy';
    portrait.width = 120;
    portrait.height = 120;


    const address = document.createElement('p');
    address.textContent = `📍 ${company.address}`;


    const phone = document.createElement('p');
    phone.textContent = `📞 ${company.phone}`;


    const website = document.createElement('a');
    website.href = company.website;
    website.target = "_blank";
    website.textContent = "🌐 Visit Website";


    const membership = document.createElement('p');
    membership.textContent = `⭐ Membership: ${company.membership}`;

    card.append(name, portrait, address, phone, website, membership);

    cards.appendChild(card);
  });
};
