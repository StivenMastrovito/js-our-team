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
const deleteDeleteBtn = document.querySelector(".delete-delete");
const formNew = document.querySelector(".form-new");
const formDelete = document.querySelector(".form-delete");
const btnAnnulla = document.querySelector(".btn-annulla");

printMember();
let btnSelection = document.querySelectorAll(".btn-js");
let allCard = document.querySelectorAll(".card-number");


newMemberBtn.addEventListener("click", function () {
  formNew.classList.remove("d-none");
})

formNew.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.querySelectorAll(".new");
  const name = input[0].value;
  const role = input[1].value;
  const email = input[2].value;
  let img = input[3].value;
  if (img === "") {
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

let indice = [];

deletMemberBtn.addEventListener("click", function () {
  indice = [];
  newMemberBtn.disabled = true;
  deletMemberBtn.classList.add("d-none");
  deleteDeleteBtn.classList.remove("d-none");
  btnAnnulla.classList.remove("d-none");
  btnSelection = document.querySelectorAll(".btn-js");
  allCard = document.querySelectorAll(".card-number");
  for (let i = 0; i < btnSelection.length; i++) {
    btnSelection[i].classList.remove("d-none");
    btnSelection[i].addEventListener("click", function () {
      const curMember = btnSelection[i];
      const curCard = allCard[i];
      console.log(curMember);
      curCard.classList.add("card-green")
      curMember.classList.add("btn-green");
      curMember.classList.remove("bg-white");
      indice.push(i)
    })
  }

})

deleteDeleteBtn.addEventListener("click", function () {
  indice.sort((a, b) => a - b);
  console.log(indice);

  newMemberBtn.disabled = false;
  deletMemberBtn.classList.remove("d-none");
  deleteDeleteBtn.classList.add("d-none");
  btnAnnulla.classList.add("d-none");

  for (let i = 0; i < indice.length; i++) {
    teamMembers.splice(indice[i], 1);
    for (let j = i + 1; j < indice.length; j++) {
      indice[j]--;
      console.log(indice);

    }
  }

  printMember();
  for (let i = 0; i < btnSelection.length; i++) {
    btnSelection[i].classList.add("d-none");
    btnSelection[i].disabled = false;
  }
})

btnAnnulla.addEventListener("click", function () {
  btnAnnulla.classList.add("d-none");
  deletMemberBtn.classList.remove("d-none");
  deleteDeleteBtn.classList.add("d-none");
  btnSelection = document.querySelectorAll(".btn-js");
  allCard = document.querySelectorAll(".card-number");
  for (let i = 0; i < btnSelection.length; i++) {
    btnSelection[i].classList.add("d-none");
    btnSelection[i].disabled = false;
  }
  indice.sort((a, b) => a - b);
  console.log(indice);
  
  for (let i = 0; i < indice.length; i++) {
    const curMember = btnSelection[indice[i]];
    const curCard = allCard[indice[i]];
    console.log(curMember);
    curCard.classList.remove("card-green")
    curMember.classList.remove("btn-green");
    curMember.classList.add("bg-white");
  }

})


function printMember() {
  let stringCard = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const curMember = teamMembers[i];
    card = createCard(curMember, i);
    stringCard += card;
  }
  cardTeam.innerHTML = stringCard;

}

function createCard(curMember, i) {
  const { name, role, email, img } = curMember;
  return `
  <div class="card-member col-12 col-md-6 col-lg-4 ">
                  <div class="d-flex bg-dark position-relative card-number">
                      <div class="col-4">
                          <img src="./${img}" class="img-fluid" alt="" style="background-size: cover;">
                       </div>
                      <div class="col-8 d-flex flex-column align-items-start justify-content-center pt-2 ps-2">
                          <h5 class="text-white">${name}</h5>
                          <h6 class="text-white">${role}</h6>
                           <h6 class="text-primary">${email}</h6>
                      </div>
                      <button class="btn-js d-none btn position-absolute btn-selection z-1 bg-white" value="${i}"></button>
                    </div>
               </div>
  `
}
