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
        calcBaseDamage = (player.strength * player.speed) / 1000;
      }

      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //Number of hits the fighter makes
      let numberOfHits =
        Math.floor((Math.random() * Math.floor(player.speed / 10)) / 2) + 1;

      //Place the total damage in an array to gives the number and return it to the user
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };


    console.log(player.health);
     console.log(enemy.health);


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

      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //Number of hits the fighter 
      let numberOfHits =
        Math.floor((Math.random() * Math.floor(enemy.speed / 10)) / 2) + 1;

      //Place the total damage in an array to gives the number and return it to the user
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };


    // Allows the porgress health bar to read the player and enemy health
    let getPlayerHealth = document.getElementById("healthBarOne");
    getPlayerHealth.value = player.health;

    let getEnemyHealth = document.getElementById("healthBarTwo");
    getEnemyHealth.value = enemy.health;



    // display battle data on screen arena
    // const displayHealth = function(arena) {
    //   document.querySelector('.arena').textContent = arena;
    // }


    //Initiate Attacks - If player is faster than they attack first if not then enemy attacks first
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();

      let totalDamage = playerAttackValues[0] * playerAttackValues[1];

      enemy.health = enemy.health - totalDamage;

      alert(`${player.classType}` +  "did"  +  playerAttackValues[0]  +  "damage"  +  playerAttackValues[1]  +  "times.");
      
      // Display enemy health updates
      enemy.health += 1;

      //When enemy is at less than or equal to 0 health then the game will announce that the user has won the fight
      if (enemy.health <= 0) {
        alert("You Win!");
      }

      else {
          //Enemy Attacks first if faster than player
          let enemyAttackValues = enemyAttack();
          let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
          player.health = player.health - totalDamage;
          
      alert(`${enemy.enemyType}` +  enemyAttackValues[0]  +  "damage"  +  enemyAttackValues[1]  +  "times.");
      
      // Display player health updates
      player.health += 1;
      }
        }
  
        else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = playerAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];

            player.health = player.health - totalDamage;
            
            alert(`${classType}` + enemyAttackValues[0] + "damage" + enemyAttackValues[1] + "times.");
              
              //When player is at less than or equal to 0 health then the game will announce that the user has won the fight
            if (player.health <= 0) {
              alert("You Lost!");
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
