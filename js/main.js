const ourTeam =[
    {
        "name": "Wayne Barnett",
        "position": "Founder & CEO",
        "image": "wayne-barnett-founder-ceo.jpg",
    },

    {
        "name": "Angela Caroll",
        "position": "Chief Editor",
        "image": "angela-caroll-chief-editor.jpg",
    },

    {
        "name": "Walter Gordon",
        "position": "Office Manager",
        "image": "walter-gordon-office-manager.jpg",
    },

    {
        "name": "Angela Lopez",
        "position": "Social Media Manager",
        "image": "angela-lopez-social-media-manager.jpg",
    },

    {
        "name": "Scott Estrada",
        "position": "Developer",
        "image": "scott-estrada-developer.jpg",
    },

    {
        "name": "Barbara Ramos",
        "position": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer.jpg",
    }
]


console.log(ourTeam);



for ( let key in ourTeam) {
    console.log(ourTeam[key]);
}

let ourTeamString = JSON.stringify(ourTeam);



let teamDom = document.getElementById("team");
teamDom.innerHTML = ourTeamString;



let imgListDom = document.querySelector(".container");
let nameDom = document.querySelector(".container_1");
let positionDom = document.querySelector(".container_2");
bigImgDom = "";
bigNameDom = "";
bigPositionDom = "";


for (let i = 0; i < ourTeam.length; i++ ){



    let containerImgDom = document.createElement("div");
    containerImgDom.classList.add("image");
    let newImgDom =   `<img src="img/${ourTeam[i].image}"> `;   
    bigImgDom += newImgDom;

    let containerNameDom = document.createElement("div");
    containerNameDom.classList.add("name");
    let newNameDom =   `<div>${ourTeam[i].name}"</div> `;   
    bigNameDom += newNameDom;

    let containerPositionDom = document.createElement("div");
    containerPositionDom.classList.add("position");
    let newPositionDom =   `<div>${ourTeam[i].position}"</div> `;   
    bigPositionDom += newPositionDom;

}
imgListDom.innerHTML = bigImgDom;
nameDom.innerHTML = bigNameDom;
positionDom.innerHTML = bigPositionDom;




