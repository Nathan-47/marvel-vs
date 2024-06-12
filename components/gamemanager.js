//Object that will control what happens at each stage of the game
let GameManager = {
    setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
    },
    
        //This allows for users to choose what fighter they want and be able to see the stats of the fighter.
        //The class types are seperate via fighters names giving them there unique id.
    resetPlayer: function(classType) {
        switch (classType) {
            case "Adesanya":
                player = new Player(classType , 190, 100, 70, 90, 90);
                break;
            
                case "Jones":
                    player = new Player(classType , 200, 75, 95, 80, 90);
                break;
            
                case "McGregor":
                    player = new Player(classType , 90, 0, 70, 100, 100);
                break;
            
                case "Edwards":
                    player = new Player(classType , 180, 90, 80, 80, 80);
                break;
            
                default:
    
        }
    
        //All data within the interface tag found in the index page will be taken and deleted, so that the new content in the let variable
        //below can be entered.
        let getInterface = document.querySelector(".interface");
        
        getInterface.innerHTML = '<img src="assets/images/' +
            classType.toLowerCase() + '.png" class="assets/images"><div><h3>' + player.classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Motivation: ' + player.motivation + '</p> <p>Strength: ' + player.strength + '</p> <p>Agility: ' + player.agility + '</p> <p>Speed: ' + player.speed + '</p></div>';
    },
    
        setPreFight: function () {
            let getHeader = document.querySelector(".header");
            let getActions = document.querySelector(".actions");
            let getArena = document.querySelector(".arena");
    
            getHeader.innerHTML = '<p>Task: Find an opponent</p>';
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for Opponent</a>';
            getArena.style.visibility = "visible";
    
        },
        
        setFight: function () {
            let getHeader = document.querySelector(".header");
            let getActions = document.querySelector(".actions");
            let getEnemy = document.querySelector(".enemy");
            
            //Create Opponents
            let enemy00 = new Enemy("Ferguson", 200, 100, 70, 90, 100);
            let enemy01 = new Enemy("Nurmagamedov", 200, 90, 100, 70, 80);
            let enemy02 = new Enemy("Thompson", 180, 70, 70, 80, 80);
            let enemy03 = new Enemy("Whittaker", 190, 90, 90, 80, 80);
            
            //Wiil choose a random opponent between 0 - 1
            let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
    
            //Console log used to test out the random number generator to see if if outputs the max values needed
            //console.log(chooseRandomEnemy);
    
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
    
            getHeader.innerHTML = '<p>Task: Choose your move</p>';
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Fight!</a>';
    
            getEnemy.innerHTML = '<img src="assets/images/enemy/' +
            enemy.enemyType.toLowerCase() + '.png" class="assets/images/enemy"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Motivation: ' + enemy.motivation + '</p> <p>Strength: ' + enemy.strength + '</p> <p>Agility: ' + enemy.agility + '</p> <p>Speed: ' + enemy.speed + '</p></div>';
        }
    
    }
    
    