'use strict';

let enemy;

// Enemy player stats will read from this
function Enemy(enemyType, health, strength, speed, durability, fightIq) {
    this.enemyType = enemyType;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.durability = durability;
    this.fightIq = fightIq;
}


