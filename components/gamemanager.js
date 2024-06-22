//Object that will control what happens at each stage of the game
let GameManager = {
    setGameStart: function(playerType) {
    this.setPlayer(playerType);
    this.setPreFight();
    },
    
        //This allows for users to choose what fighter they want and be able to see the stats of the fighter.
    setPlayer: function(playerType) {

        //Fighter names giving them their unique id.
        switch (playerType) {
            case "Hulk":
                    player = new Player(playerType, 100, 70, 70, 70, 50);
                break;
            
                case "Iron Man":
                    player = new Player(playerType, 100, 60, 50, 60, 30);
                break;
            
                case "Wolverine":
                    player = new Player(playerType, 100, 40, 30, 70, 60);
                break;
            
                case "Spiderman":
                    player = new Player(playerType, 100, 40, 50, 30, 50);
                break;
            
                default:
    
        }
    
        //All data within the interface tag found in the index page will be taken and deleted, so that the new content in the let variable
        //below can be entered.
        let getInterface = document.querySelector(".interface");
        
        getInterface.innerHTML = '<img src="assets/images/' +
            playerType.toLowerCase() + '.png" class="assets/images"><div><h3>' + playerType + '</h3><p class="health-player">Health: ' + player.health + '</p></div>';
    },
    
        setPreFight: function () {
            let getActions = document.querySelector(".actions");

    
            TODO:// Place the not Marvel logo here
            // getHeader.innerHTML = '<p>Task: Find an opponent</p>';


            //Search for opponent to battle
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for Opponent</a>';
        },
        



        // ENEMY BATTLE STAT SETTINGS
        
        setFight: function () {
            let getActions = document.querySelector(".actions");
            let getEnemy = document.querySelector(".enemy");
            

            //Create enemies
            let enemy00 = new Enemy("Magneto", 100, 20, 40, 60, 30);
            let enemy01 = new Enemy("Venom", 100, 50, 30, 50, 40);
            let enemy02 = new Enemy("Abomination", 100, 70, 20, 60, 40);
            let enemy03 = new Enemy("Sabretooth", 100, 40, 20, 70, 70);
            

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


            // Click to fight
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Fight!</a>';
    
            getEnemy.innerHTML = '<img src="assets/images/enemy/' +
            enemy.enemyType.toLowerCase() + '.png" class="assets/images/enemy"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p></div>';
        }
    }
    
    