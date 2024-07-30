'use strict';

//Object that will control what happens at each stage of the game
let GameManager = {
    setGameStart: function(classType) {
    this.setPlayer(classType);
    },
    
        //This allows for users to choose what fighter they want and be able to see the stats of the fighter.
    setPlayer: function(classType) {

        //Fighter names giving them their unique id.
        switch (classType) {
            case "Hulk":
                    player = new Player(classType, 100, 70, 70, 70, 50);
                break;
            
                case "Ironman":
                    player = new Player(classType, 100, 60, 50, 60, 30);
                break;
            
                case "Wolverine":
                    player = new Player(classType, 100, 40, 30, 70, 60);
                break;
            
                case "Spiderman":
                    player = new Player(classType, 100, 40, 50, 30, 50);
                break;
            
                default:
        }
    
        //All data within the interface tag found in the index page will be taken and deleted, so that the new content in the let variable
        //below can be entered.
        let getInterface = document.querySelector(".interface");
        
        getInterface.innerHTML = '<img src="../images/side/' +
            player.classType.toLowerCase() + '.svg" class="assets/images"><div><p>' + player.classType + '</p><p class="health-player"><progress id="healthBarOne" value="100" max="100"> ' + player.health + ' </progress></p><p class="playerNumberHealth"></p></div>';

        let getBattlePlayer = document.querySelector('.battle-player');

        getBattlePlayer.innerHTML = '<img src="../images/side/' +
            player.classType.toLowerCase() + '.svg" ';
    },
    

        
        // ENEMY BATTLE STAT SETTINGS
        
        setFight: function () {
            let getEnemy = document.querySelector(".enemy");
            

            //Create enemies
            let enemy00 = new Enemy("Magneto", 100, 20, 40, 60, 30);
            let enemy01 = new Enemy("Venom", 100, 50, 30, 50, 40);
            let enemy02 = new Enemy("Redhulk", 100, 70, 20, 60, 60);
            let enemy03 = new Enemy("Sabretooth", 100, 40, 20, 50, 70);
            

            //Will choose a random opponent between 0 - 4
            let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
    

            // Switch between enemy ID for battle
            switch (chooseRandomEnemy) {
                case 0: enemy = enemy00;
                break;

                case 1: enemy = enemy01;
                break;
                
                case 2: enemy = enemy02;
                break;
                
                case 3: enemy = enemy03;
                break;
            }
    
            getEnemy.innerHTML = '<img src="../images/side/' +
            enemy.enemyType.toLowerCase() + '.svg" class="../images/enemy"><div><p>' + enemy.enemyType + '</p><p class="health-enemy"><progress id="healthBarTwo" value="100" max="100"> ' + enemy.health + ' </progress></p><p class="enemyNumberHealth"></p></div>';
        }
    };
    
    