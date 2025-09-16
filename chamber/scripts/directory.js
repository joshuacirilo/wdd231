const url = '../data/members.json';


const cards = document.querySelector('#cards'); //this part is how we can conect html and javascript


async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();

    
    displayMembers(data.companies)
}

getMembersData()


const displayMembers = (companies) => {
  companies.forEach((company) => {
        // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let names = document.createElement('h2'); // fill in the blank
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName); 
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}