let champHp = document.querySelector("#champHp");
let champStr = document.querySelector("#champStr");
let enemyHp = document.querySelector("#enemyHp");
let enemyStr = document.querySelector("#enemyStr");
let finisher = document.querySelector("#finisher")

const combatWombat = async () => {
    
    enemyHp.innerHTML = "Hitpoints: " + opponent.hitpoints;
    enemyStr.innerHTML = "Strength: " + opponent.strength;

    fetch("api/games", {
         method: "GET",
     }).then((res) => 
        res.json()
    ).then((data) => {
        console.log(data);

        let playerChamp = {
            hitpoints: data.hitpoints,
            strength: data.strength
        }
    
    champHp.innerHTML = "Hitpoints: " + playerChamp.hitpoints;
    champStr.innerHTML = "Strength: " + playerChamp.strength;

    function attack(){
        opponent.hitpoints -= playerChamp.strength;
        playerChamp.hitpoints -= opponent.strength;
        champHp.innerHTML = "Hitpoints: " + playerChamp.hitpoints;
        enemyHp.innerHTML = "Hitpoints: " + opponent.hitpoints;
        death();
    }
    
    function death(){
        if (playerChamp.hitpoints <= 0){
            console.log("You have contracted death");
            finisher.innerHTML ="You have death";
            return;
        } else if (opponent.hitpoints <= 0) {
            console.log("Dark Lord Danny DeVito had died")
            finisher.innerHTML = "Dark Lord Danny DeVito had died"
            return;
        } else {
            attack();
        }
    }
     attack();   
})
}

const opponent = {
    name: "Dark Lord Danny DeVito",
    hitpoints: 40,
    strength: 20
};

document
    .querySelector("#combat")
    .addEventListener("click", combatWombat);