KINGWARIN.DIFFICULTY_SANDBOX = 0;
KINGWARIN.DIFFICULTY_VERY_EASY = 1;
KINGWARIN.DIFFICULTY_EASY = 2;
KINGWARIN.DIFFICULTY_MEDIUM = 3;
KINGWARIN.DIFFICULTY_HARD = 4;
KINGWARIN.DIFFICULTY_VERY_HARD = 5;

// function to create a new config object
KINGWARIN.Config = function (difficulty = KINGWARIN.DIFFICULTY_HARD, behavior) {
    this.difficulty = difficulty;
    this.behavior = behavior || "default";

    // debug level: 0=none, 1=sanity checks, 2=debug, 3=detailed debug, -100=serializatio debug
    this.debug = 0;

    this.chat = true;

    //  fill later in a json format : e.g this.build = {"athen" : "barracks"}

};

// when the game initialise need to use this to scale the ai to the user chocie: easy, medium, hard etc.
KINGWARIN.Config.prototype.setConfig = function (gameState) {

    switch (this.difficulty) {
        case KINGWARIN.DIFFICULTY_SANDBOX:
            this.setSandbox(gameState);
            break;
        case KINGWARIN.DIFFICULTY_VERY_EASY:
            this.setVeryEasy(gameState);
            break;
        case KINGWARIN.DIFFICULTY_EASY:
            this.setEasy(gameState);
            break;
        case KINGWARIN.DIFFICULTY_MEDIUM:
            this.setMedium(gameState);
            break;
        case KINGWARIN.DIFFICULTY_HARD:
            this.setHard(gameState);
            break;
        case KINGWARIN.DIFFICULTY_VERY_HARD:
            this.setVeryHard(gameState);
            break;
    }


    if (gameState.playerData.teamsLocked)
    {

    }
    else if (gameState.getAlliedVictory())
    {

    }    

    let maxPop = gameState.getPopulationMax();
    // TODO set workers ratio, military ratio, etc.

    if (gameState.getVictoryConditions().has("wonder"))
	{
        // TODO set wonder reach strategy infos
	}

    //TODO log to the game the usefull information about what the ai have set

};

// set the ai to sandbox mode
KINGWARIN.Config.prototype.setSandbox = function (gameState) {
    this.debug = 3;
    this.chat = true;
};

// set the ai to very easy mode
KINGWARIN.Config.prototype.setVeryEasy = function (gameState) {
    this.debug = 3;
    this.chat = true;
};

// set the ai to easy mode
KINGWARIN.Config.prototype.setEasy = function (gameState) {
    this.debug = 3;
    this.chat = true;
};

// set the ai to medium mode
KINGWARIN.Config.prototype.setMedium = function (gameState) {
    this.debug = 3;
    this.chat = true;
};

// set the ai to hard mode
KINGWARIN.Config.prototype.setHard = function (gameState) {
    this.debug = 3;
    this.chat = true;
};

// set the ai to very hard mode
KINGWARIN.Config.prototype.setVeryHard = function (gameState) {
    this.debug = 3;
    this.chat = true;
};

