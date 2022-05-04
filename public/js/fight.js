const session = require("express-session");

const warGame = async () => {
    const api = session.user_id;
    const champion = await fetch(`api/champions/fight/${api}`, {
        method: "GET",
        body: JSON.stringify({ hitpoints, strength })
    });

    
}

const opponent = {
    name: "Dark Lord Danny DeVito",
    hitpoints: 40,
    strength: 20
};


