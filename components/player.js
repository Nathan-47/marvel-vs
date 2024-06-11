//The let player is within the global scope and can be accessed anywhere
let player;

//Create an object constructor as their are various fighters with different stats
function Player(classType, health, motivation, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.motivation = motivation;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
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
      if (player.motivation > 0) {
        calcBaseDamage = (player.strength * player.motivation) / 1000;
      }

      //This statement is created for fighters that have 0 moivation
      else {
        calcBaseDamage = (player.strength * player.agility) / 1000;
      }

      let offsetDamage = Math.trunc(Math.random() * Math.trunc(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //Number of hits the fighter makes
      let numberOfHits =
        Math.trunc((Math.random() * Math.trunc(player.agility / 10)) / 2) + 1;

      //Place the total damage in an array to gives the number and return it to the user
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };

    //Enemy attacks
    let enemyAttack = function () {
      let calcBaseDamage;
      if (enemy.motivation > 0) {
        calcBaseDamage = (enemy.strength * enemy.motivation) / 1000;
      }

      //This statement is created for fighters that have 0 moivation
      else {
        calcBaseDamage = (enemy.strength * enemy.agility) / 1000;
      }

      let offsetDamage = Math.trunc(Math.random() * Math.trunc(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;

      //Number of hits the fighter makes
      let numberOfHits =
        Math.trunc((Math.random() * Math.trunc(enemy.agility / 10)) / 2) + 1;

      //Place the total damage in an array to gives the number and return it to the user
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    };

    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");

    const displayHealth = function(arena) {
      document.querySelector('.arena').textContent = arena;
    }

    //Initiate Attacks
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      displayHealth("You hit" + playerAttackValues[0] + "damage" + playerAttackValues[1] + "times.");
        
        //When enemy is at less than or equal to 0 health then the game will announce that the user has won the fight

      if (enemy.health <= 0) {
        displayHealth('You Win !');
          getPlayerHealth.innerHTML = 'Health; ' + player.health;
          getEnemyHealth.innerHTML = 'Health: 0';
      }
      
      else {
          getEnemyHealth.innerHTML = 'health: ' + enemy.health;


          //Enemy Attacks
          let enemyAttackValues = enemyAttack();
          let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
          
          player.health = player.health - totalDamage;
          
          displayHealth("Opponent hit" +  enemyAttackValues[0]  +  "damage"   +   enemyAttackValues[1]   +  "times.");
        

      // HEALTH INDICATOR SECTION //

        //When enemy is at less than or equal to 0 health then the game will announce that the user has won the fight

      if (player.health <= 0) {
        displayHealth('You died!');
          // getPlayerHealth.innerHTML = 'Health: 0';
          // getEnemyHealth.innerHTML = 'Health: 0' + enemy.health;
      }

      else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
          }
      }
        }
        
        else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = playerAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("You hit" + enemyAttackValues[0] + "damage" + enemyAttackValues[1] + "times.");
              
              //When player is at less than or equal to 0 health then the game will announce that the user has won the fight
            if (player.health <= 0) {
              displayHealth('You Lost !');
                getEnemyrHealth.innerHTML = 'Health; ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            }
            
            else {
                getPlayerHealth.innerHTML = 'health: ' + player.health;
      
      
                //Player Attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("Opponent hit" +  playerAttackValues[0]  +  "damage"  +  playerAttackValues[1]  +  "times.");
              
              //When enemy is at less than or equal to 0 health then the game will announce that the user has won the fight
            if (enemy.health <= 0) {
              alert("Ooooohhh he rocked him! - Joe Rogan ");
                getEnemyHealth.innerHTML = 'Health: 0';
                getPlayerHealth.innerHTML = 'Health: 0' + player.health;
            }
      
            else {
              getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
          }
  }
};
