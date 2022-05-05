let champHp = document.querySelector("#champHp");
let champStr = document.querySelector("#champStr");
let enemyHp = document.querySelector("#enemyHp");
let enemyStr = document.querySelector("#enemyStr");
//let currentUser = null;
const combatWombat = async () => {

    enemyHp.innerHTML = "Hitpoints: " + opponent.hitpoints;
    enemyStr.innerHTML = "Strength: " + opponent.strength;
     
    // let currentUser = await fetch("api/games/", {
    //     method: "GET"
    // });
    //console.log(currentUser);
     const champion = await fetch("api/champions/fight", {
         method: "GET",
        //  include: {
        //      hitpoints,
        //      strength
        //  },
         //body: JSON.stringify({ hitpoints, strength })
     });





}

const opponent = {
    name: "Dark Lord Danny DeVito",
    hitpoints: 40,
    strength: 20
};


document
    .querySelector("#combat")
    .addEventListener("click", combatWombat);