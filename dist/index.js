"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class DarkMagic {
    action(vs) {
        if ('power' in vs) {
            vs.health -= 15;
        }
    }
}
class Club {
    action(vs) {
        if ('power' in vs) {
            vs.health -= 15;
        }
    }
}
class Magic {
    action(vs) {
        if ('power' in vs) {
            vs.health -= 30;
        }
    }
}
class Sword {
    action(vs) {
        if ('power' in vs) {
            vs.health -= 25;
        }
    }
}
class Bow {
    action(vs) {
        if ('power' in vs) {
            vs.health -= 20;
        }
    }
}
// Step 2: Create Characters and Demons
class Tank {
    constructor(name) {
        this.attack = new Club();
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.class = 'Orge';
        this.weapon = 'Club';
        this.gold = 20;
        this.health = 120;
        this.power = 15;
    }
    action(vs) {
        this.attack.action(vs);
    }
}
class Wizard {
    constructor(name) {
        this.attack = new Magic();
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.class = 'Peon';
        this.weapon = 'Club';
        this.gold = 20;
        this.health = 60;
        this.power = 30;
    }
    action(vs) {
        this.attack.action(vs);
    }
}
class Knight {
    constructor(name) {
        this.attack = new Sword();
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.class = 'Knight';
        this.weapon = 'Sword';
        this.gold = 20;
        this.health = 80;
        this.power = 25;
    }
    action(vs) {
        this.attack.action(vs);
    }
}
class Archer {
    constructor(name) {
        this.attack = new Bow();
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.class = 'Archer';
        this.weapon = 'Bow';
        this.gold = 20;
        this.health = 80;
        this.power = 20;
    }
    action(vs) {
        this.attack.action(vs);
    }
}
class Demon {
    constructor(rank, health, power, gold) {
        this.attack = new DarkMagic();
        this.id = (0, uuid_1.v4)();
        this.rank = rank;
        this.gold = gold;
        this.health = health;
        this.power = power;
    }
    action(vs) {
        this.attack.action(vs);
    }
}

// Step 4: Create Players and Demons
const theTank = new Tank("Jim");
const theWizard = new Wizard("Sam");
const theKnight = new Knight("Guts");
const theArcher = new Archer("Robin");
const Demon5 = new Demon(5, 60, 15, 20);

// Step 5: Combat
console.log("--- Players ---");
console.log(theTank);
console.log(theWizard);
console.log(theKnight);
console.log(theArcher);

console.log("\n--- Combat ---");
console.log(`${theKnight.name} encounters a Demon of rank ${Demon5.rank} in combat!`);

// Player attacks
console.log(`${theKnight.name} attacks!`);
theKnight.action(Demon5);

// Check if Demon health reaches 0
if (Demon5.health <= 0) {
    console.log(`The Demon is defeated!`);
}
else {
    console.log(`The Demon remains standing with ${Demon5.health} health!`);
}

// Demon attacks
console.log('Demon attacks back!');
Demon5.action(theKnight);

// Check Knight health
console.log(`${theKnight.name} has ${theKnight.health} health left`);

// Player attacks
console.log(`${theKnight.name} attacks!`);
theKnight.action(Demon5);

// Check Demon health
if (Demon5.health <= 0) {
    console.log(`The Demon is defeated!`);
}
else {
    console.log(`The Demon remains with ${Demon5.health} health!`);
}
// Demon attacks
console.log('Demon attacks back!');
Demon5.action(theKnight);

// Check Knight health
console.log(`${theKnight.name} has ${theKnight.health} health left`);

// Player attacks
console.log(`${theKnight.name} attacks!`);
theKnight.action(Demon5);

// Check Demon health
if (Demon5.health <= 0) {
    console.log(`The Demon is defeated!`);
}
else {
    console.log(`The Demon remains with ${Demon5.health} health!`);
}

// Step 6: Collecting Gold
console.log("\n--- Collect Gold ---");

// Collect gold after defeating the Demon
theKnight.gold += Demon5.gold;
console.log(`${theKnight.name} collected ${Demon5.gold} from defeating the Demon`);
console.log(`${theKnight.name} now has ${theKnight.gold} gold in total`);
