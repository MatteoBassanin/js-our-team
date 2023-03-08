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
let teamDom = document.getElementById("team");
// teamDom.innerHTML = ourTeam;



for ( let key in ourTeam) {
    console.log(ourTeam[key]);
}



for ( let key in ourTeam) {
    teamDom.innerHTML = ourTeam.key;
}