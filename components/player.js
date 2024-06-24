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
        calcBaseDamage = (player.strength * player.durability) / 1000;
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


    console.log(player.classType);
    console.log(player.health);


    //Enemy attacks
    let enemyAttack = function () {
      let calcBaseDamage;
      if (enemy.durability > 0) {
        calcBaseDamage = (enemy.strength * enemy.durability) / 1000;
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

    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");



    // display battle data on screen arena
    // const displayHealth = function(arena) {
    //   document.querySelector('.arena').textContent = arena;
    // }


    //Initiate Attacks
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();

      let totalDamage = playerAttackValues[0] * playerAttackValues[1];

      enemy.health = enemy.health - totalDamage;

      alert(`${player.classType}` +  "did"  +  playerAttackValues[0]  +  "damage"  +  playerAttackValues[1]  +  "times.");
        
        //When enemy is at less than or equal to 0 health then the game will announce that the user has won the fight
      if (enemy.health <= 0) {
        alert("Ooooohhh he rocked him! - Joe Rogan");
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
          getEnemyHealth.innerHTML = 'Health: 0';
      }

      else {
          //Enemy Attacks
          let enemyAttackValues = enemyAttack();
          let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
          player.health = player.health - totalDamage;
          
      alert(`${enemy.enemyType}` +  enemyAttackValues[0]  +  "damage"  +  enemyAttackValues[1]  +  "times.");
      
      getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
      getPlayerHealth.innerHTML = 'Health: ' + player.health;

      }
        }
  
        
        else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = playerAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];

            player.health = player.health - totalDamage;
            
            alert(`${classType}` + enemyAttackValues[0] + "damage" + enemyAttackValues[1] + "times.");
              
              //When player is at less than or equal to 0 health then the game will announce that the user has won the fight
                    //When enemy is at less than or equal to 0 health then the game will announce that the user has won the fight

            if (player.health <= 0) {
              alert("I was not impressed by your performance");
                getEnemyHealth.innerHTML = 'Health; ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            }
            
            else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                
      
                //Player Attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert(`${enemy.enemyType}` +  playerAttackValues[0]  +  "damage"  +  playerAttackValues[1]  +  "times.");
              
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
