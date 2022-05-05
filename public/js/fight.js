// const session = require("express-session");
// const res = require("express/lib/response");
let champHp = document.querySelector("#champHp");
let champStr = document.querySelector("#champStr");
let enemyHp = document.querySelector("#enemyHp");
let enemyStr = document.querySelector("#enemyStr");

const combatWombat = async () => {
    // const api = session.user_id;
    // const champion = await fetch(`api/champions/fight/${api}`, {
    //     method: "GET",
    //     body: JSON.stringify({ hitpoints, strength })
    // });

    console.log(wow);

    // enemyHp.innerHTML = opponent.hitpoints;
    // enemyStr.innerHTML = opponent.strength;

}

const opponent = {
    name: "Dark Lord Danny DeVito",
    hitpoints: 40,
    strength: 20
};


document
    .querySelector("#combat")
    .addEventListener("click", combatWombat);