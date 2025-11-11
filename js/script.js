// Dato un array di oggetti rappresentante un team di un’azienda, 
// creare una pagina dedicata  in cui mostrare una card per ciascun componente.

// (trovate l’array del team all’interno della cartella in allegato)

// Bonus

// Curare meglio l'aspetto grafico
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare 
// il nuovo membro sulla pagina (usate una foto qualunque, anche vostra 
//   se volete sentirvi parte del team! 😀)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardTeam = document.querySelector(".card-team");
const newMemberBtn = document.querySelector(".new-member");
const deletMemberBtn = document.querySelector(".delete-member");
const formNew = document.querySelector(".form-new");
const formDelete = document.querySelector(".form-delete");


printMember();

newMemberBtn.addEventListener("click", function(){
  formNew.classList.remove("d-none");
})

formNew.addEventListener("submit",function(event){
  event.preventDefault();
  const input = document.querySelectorAll(".new");
  const name = input[0].value;
  const role = input[2].value;
  const email = input[2].value;
  let img = input[3].value;
  if(img === ""){
    img = "img/sconosciuto.png";
  }
  teamMembers.push({
    name,
    role,
    email,
    img,
  })
  console.log(img);
  
  formNew.classList.add("d-none");
  formNew.reset();
  printMember();  
})

deletMemberBtn.addEventListener("click",function(){
  formDelete.classList.remove("d-none");
})

formDelete.addEventListener("submit", function(event){
  event.preventDefault();
  const nameDelete = document.querySelector(".delete").value;
  let indice;  
  for(let i = 0; i < teamMembers.length; i++){
    const curName = teamMembers[i]["name"];
    if(nameDelete.toLowerCase() === curName.toLowerCase()){
      indice = i;
    }
  }

  teamMembers.splice(indice,1);

  formDelete.classList.add("d-none");
  formDelete.reset();
  printMember();  

})

function printMember() {
  let stringCard = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const curMember = teamMembers[i];
    card = createCard(curMember);
    stringCard += card;
  }
  cardTeam.innerHTML = stringCard;
}

function createCard(curMember) {
  const { name, role, email, img } = curMember;
  return `
  <div class="col-12 col-md-6 col-lg-4 ">
                  <div class="d-flex bg-dark">
                      <div class="col-4">
                          <img src="./${img}" class="img-fluid" alt="" style="background-size: cover;">
                       </div>
                      <div class="col-8 d-flex flex-column align-items-start justify-content-center pt-2 ps-2">
                          <h5 class="text-white">${name}</h5>
                          <h6 class="text-white">${role}</h6>
                           <h6 class="text-primary">${email}</h6>
                      </div>
                  </div>
               </div>
  `
}
