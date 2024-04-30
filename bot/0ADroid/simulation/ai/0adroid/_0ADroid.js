Engine.IncludeModule("common-api");

var BOT = {};

BOT.OADroid = function (settings) {
  API3.BaseAI.call(this, settings);

  this.playedTurn = 0;
  this.elapsedTime = 0;

  this.uniqueIDs = {};

  //this.Config = new PETRA.Config(settings.difficulty, settings.behavior);

  this.savedEvents = {};
};

BOT.OADroid.prototype = Object.create(API3.BaseAI.prototype);
