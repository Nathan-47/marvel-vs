'use strict';

//The let player is within the global scope and can be accessed anywhere
let player;

//Create an object constructor as their are various fighters with different stats
function Player(classType, health, strength, speed, durability, fightIq) {
  this.classType = classType;
  this.health = health;
  this.strength = strength;
  this.speed = speed;
  this.durability = durability;
  this.fightIq = fightIq;
}

//Allow players to attack the opponent
let PlayerMoves = {
  calcAttack: function () {

    //Determines who attacks first
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;


    //Player attacks
    let playerAttack = function () {
      let calcBaseDamage;
      if (player.durability > 0) {
        calcBaseDamage = (player.strength * player.fightIq) / 1000;
      }

      //This statement is created for fighters that have 0 moivation
      else {
        calcBaseDamage = Math.ceil(player.strength * player.speed) / 100;
      }

      let offsetDamage = Math.floor(Math.random() * Math.round(10));

      let calcOutputDamage = Math.trunc(calcBaseDamage + offsetDamage);

      //Number of hits the fighter makes
      let numberOfHits =
        Math.trunc((Math.random() * Math.round(player.speed / 10)) / 2) + 1;

      //Place the total damage in an array to gives the number and return it to the user
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };


    // HUD Components 

  //  FIXME: Why does health of both player and enemy not show simultaneously in arena 

      // display battle data on screen arena
   const displayHealth = function(arenaPlayer) {
      document.querySelector('.arenaPlayer').textContent = arenaPlayer;
    }
        // Allows the porgress health bar to read the player and enemy health
        let getPlayerHealth = document.getElementById("healthBarOne");
        getPlayerHealth.value = player.health;
    
        let getEnemyHealth = document.getElementById("healthBarTwo");
        getEnemyHealth.value = enemy.health;

     // HUD Components 


    //Enemy attacks
    let enemyAttack = function () {
      let calcBaseDamage;
      if (enemy.durability > 0) {
        calcBaseDamage = (enemy.strength * enemy.fightIq) / 1000;
      }

      //This statement is created for fighters that have 0 moivation
      else {
        calcBaseDamage = (enemy.strength * enemy.speed) / 1000;
      }

      let offsetDamage = Math.floor(Math.random() * Math.round(10));

      let calcOutputDamage = Math.trunc(calcBaseDamage + offsetDamage);

      //Number of hits the fighter 
      let numberOfHits =
        Math.round((Math.random() * Math.round(enemy.speed / 10)) / 2) + 1;

      //Place the total damage in an array to gives the number and return it to the user
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };

    // Enemy health boost 
    function enemyHealthBoost () {
            // Enemy receives boost depending on their durability and fight IQ status
            if (enemy.health <= 20 && enemy.durability >= 50 && enemy.fightIq > 50) {
              console.log('enemy recieves power buff');
              enemy.health = enemy.health - 1;
              console.log(enemy.health);
            }
    }


    //Initiate Attacks - If player is faster than they attack first if not then enemy attacks first
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();

      let totalDamage = playerAttackValues[0] * playerAttackValues[1];

      enemy.health = enemy.health - totalDamage;

      displayHealth(`${player.classType}` +  playerAttackValues[0]  +  "damage"  +  playerAttackValues[1]  +  "times.");
      
      // Display enemy health updates
      enemy.health += 1;

      //When enemy is at less than or equal to 0 health then the game will announce that the user has won the fight
      if (enemy.health <= 0) {
        displayHealth(`${player.classType} wins!`);
        document.getElementById('item-roll').classList.add('hidden');
        document.getElementById('end-battle').classList.add('hidden');
        document.getElementById('opponent-search').classList.add('hidden');
        document.getElementById('start-fight').classList.add('hidden');
        document.getElementById('end-battle-final').classList.remove('hidden');
      }

      else {
          //Enemy Attacks first if faster than player
          let enemyAttackValues = enemyAttack();
          let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
          player.health = player.health - totalDamage;
          
      displayHealth(`${enemy.enemyType}` +  enemyAttackValues[0]  +  "damage"  +  enemyAttackValues[1]  +  "times."); 
      
      // Display player health updates
      player.health += 1;

      enemyHealthBoost()
      }
        }
  
        else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = playerAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];

            player.health = player.health - totalDamage;
            
            displayHealth(`${player.classType}` + enemyAttackValues[0] + "damage" + enemyAttackValues[1] + "times.");
              
              //When player is at less than or equal to 0 health then the game will announce that the user has won the fight
            if (player.health <= 0) {
              displayHealth(`${enemy.enemyType} wins!`);
            }
            
            else {

                //Player Attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];

            enemy.health = enemy.health - totalDamage;

            alert(`${enemy.enemyType}` +  playerAttackValues[0]  +  "damage"  +  playerAttackValues[1]  +  "times.");

            // Display enemy health updates
            enemy.health += 1;
            }
          }
  }
};
