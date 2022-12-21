/*--------------------------------------TRACCIA-------------------------------------------

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto

----------------------------------------------------------------------------------------*/

// Creating data container

const teamMembers = [
{name: 'Wayne Barnett', role: 'Founder & CEO', picture: 'wayne-barnett-founder-ceo.jpg'}, 
{name: 'Angela Carol', role: 'Chief Editor', picture: 'angela-caroll-chief-editor.jpg'}, {name: 'Walter Gordon', role: 'Office Manager', picture: 'walter-gordon-office-manager.jpg'},
{name: 'Angela Lopez', role: 'Social Media Manager', picture: 'angela-lopez-social-media-manager.jpg'}, 
{name: 'Scott Estrada', role: 'Developer', picture: 'scott-estrada-developer.jpg'},
{name: 'Barbara Ramos', role: 'Graphic Designer', picture: 'barbara-ramos-graphic-designer.jpg'} 
];

////console.table(teamMembers);

//Pick target element

const teamCardsHolder = document.getElementById('team-cards-holder');
////console.log(teamCardsHolder);

//Card creation function

const createCard = (name, role, picture) => {
    const card = 
    `
    <div class="col">
        <div class="card mb-5">
            <img class="card-img-top" src="img/${picture}" alt="Card image cap">
            <div class="card-body text-center cs-text-gray">
            <h4>${name}</h4>
            <h6>${role}</h6>
            </div>
        </div>
    </div>
    `;
    return card;
}

//Preparing cards
let cards = '';

for (let teamMember of teamMembers){
    const card = createCard(teamMember.name, teamMember.role, teamMember.picture);
    cards += card;
}

//Show cards on page

teamCardsHolder.innerHTML = cards;