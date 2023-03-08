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


// let imgDom = getElementById("container");
// imgDom = document.createElement('div');
// imgDom.innerHTML = (src="/Users/matteobassanin/Desktop/Boolean/js-our-team/img/angela-caroll-chief-editor.jpg");



let imgListDom = document.querySelector(".container");

bigWrapperDom = "";


for (let i = 0; i < ourTeam.length; i++ ){
    const newImgDom =   `<img src="/Users/matteobassanin/Desktop/Boolean/js-our-team/img/" + ${ourTeam[i]}>
    
    `;

    bigWrapperDom += newImgDom;

}

imgListDom.innerHTML = bigWrapperDom;