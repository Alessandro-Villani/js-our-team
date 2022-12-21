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
{name: 'Wayne Barnett', role: 'Founder & CEO', picture: 'img/wayne-barnett-founder-ceo.jpg'}, 
{name: 'Angela Carol', role: 'Chief Editor', picture: 'img/angela-caroll-chief-editor.jpg'}, {name: 'Walter Gordon', role: 'Office Manager', picture: 'img/walter-gordon-office-manager.jpg'},
{name: 'Angela Lopez', role: 'Social Media Manager', picture: 'img/angela-lopez-social-media-manager.jpg'}, 
{name: 'Scott Estrada', role: 'Developer', picture: 'img/scott-estrada-developer.jpg'},
{name: 'Barbara Ramos', role: 'Graphic Designer', picture: 'img/barbara-ramos-graphic-designer.jpg'} 
];

////console.table(teamMembers);

//Pick target element

const teamCardsHolder = document.getElementById('team-cards-holder');
////console.log(teamCardsHolder);
const form = document.getElementById('add-team');
const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputRole = document.getElementById('role');
const inputPicture = document.getElementById('picture');


//Card creation function

const createCard = (name, role, picture) => {
    const card = 
    `
    <div class="col">
        <div class="card mb-5">
            <img class="card-img-top" src="${picture}" alt="Card image cap">
            <div class="card-body text-center cs-text-gray">
            <h4>${name}</h4>
            <h6>${role}</h6>
            </div>
        </div>
    </div>
    `;
    return card;
}

//add member function
const addMember = (list, nameSurname, role, picture) => {

    const member = {
        name: nameSurname, role: role, picture: picture}

    list.push(member);

}

//add cards function
const addCards = () => {
let cards = '';

for (let teamMember of teamMembers){
    const card = createCard(teamMember.name, teamMember.role, teamMember.picture);
    cards += card;
}
    return cards
}

const cards = addCards();
//Show cards on page
teamCardsHolder.innerHTML = cards;

//display new card when submit
form.addEventListener("submit", function(event){
    
    event.preventDefault();

    const nameSurname = inputName.value + " " + inputSurname.value;
    const role = inputRole.value;
    let picture = inputPicture.value;

    if (!picture){
        picture = 'img/anon.png'
    }

    addMember(teamMembers, nameSurname, role, picture);
    const cards = addCards();
    console.log(cards);
    teamCardsHolder.innerHTML = cards;
    

})