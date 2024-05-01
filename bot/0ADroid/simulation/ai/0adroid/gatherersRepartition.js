/**
 * Gatherers Repartition
 * Handle the repartition of gatherers between resources
 */

/**
 * Repartition gatherers between resources.
 * @param {Object} gameState - The game state.
 */
BOT.OADroid.prototype.gatherersRepartition = function (gameState) {
  // constants definitions
  this.goalQueue = [];
  this.ID = gameState.ai.uniqueIDs.bases++;
};

/**
 * Initialize the gatherers repartition.
 * @param {Object} gameState - The game state.
 * @param {Array<{String: name, String: type, String: specType, Object : cost}>} GoalsQueue - The goals queue.
 */
BOT.OADroid.prototype.init = function (gameState, GoalsQueue) {
  // all initializations must be here

  this.goalQueue = GoalsQueue;

  // getting all units and workers filtering by my ID
  this.units = gameState
    .getOwnUnits()
    .filter(API3.Filters.byMetadata(PlayerID, "base", this.ID));
  this.workers = this.units.filter(
    API3.Filters.byMetadata(PlayerID, "role", BOT.UnitClasses.WORKER)
  );

  // keep up to date the entities collections
  this.units.registerUpdates();
  this.workers.registerUpdates();
};

BOT.OADroid.prototype.getTotalWorkers = function () {
  let workers = 0;

  return workers;
};
