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


// console.log(ourTeam);



// for ( let key in ourTeam) {
//     console.log(ourTeam[key]);
// }

let ourTeamString = JSON.stringify(ourTeam);



let teamDom = document.getElementById("team");



for ( let key in ourTeam) {
    let containerImgDom = document.createElement("div");

    containerImgDom.innerHTML = `
            <span class="name">${ourTeam[key].name}</span>
            <img src="img/${ourTeam[key].image}">
            <span class="name">${ourTeam[key].position}</span>

    `;
    containerImgDom.classList.add("container")
    teamDom.appendChild(containerImgDom);
}





for ( let key in ourTeam) {
    let containerImgDom = document.createElement("div");

    containerImgDom.innerHTML = `
            <span class="name">${ourTeam[key].name}</span>
            <img src="img/${ourTeam[key].image}">
            <span class="name">${ourTeam[key].position}</span>

    `;
    containerImgDom.classList.add("container")
    teamDom.appendChild(containerImgDom);
}