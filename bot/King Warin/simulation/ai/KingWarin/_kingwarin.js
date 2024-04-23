Engine.IncludeModule("common-api");

var KINGWARIN = {};

KINGWARIN.WarinBot = function(settings) {
    API3.BaseAI.call(this, settings);
    this.uniqueID = {
        "test" : 1
    }
    this.Config = new KINGWARIN.Config(settings.difficulty, settings.behavior);
};