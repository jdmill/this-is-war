const warGame = async () => {
    const champions = await fetch("api/champions", {
        method: "GET",
        body: JSON.stringify({ hitpoints, strength })
    });


}

Champion.prototype.attack = function (target) {
    target.hitpoints -= this.strength;
};

Champion.prototype.isAlive = function () {
    if (this.hitpoints > 0) {
        return true;
    }
    return false;
}

