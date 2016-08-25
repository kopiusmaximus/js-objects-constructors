'use strict';

// In node, use like so:
//
//    const runTracker = require('./lib/runs');
//    let mcFace = new runTracker.User('Person McFace', 'wdi@personmcface.com');

// constructor for a Run object
const Run = function(date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

// constructor for a User object
const User = function(name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

// Methods for a User object

// Add a function that calculates total distance run to the User prototype
User.prototype.totalDistance = function () {
  // define an auxillary variable
  let runs = this.runs;

  // define an accumulator
  let result = 0;

  // work on accumulator
  for (let i = 0; i < runs.length; i++) {
    result += runs[i].distance;
  }

  // return accumulator
  return result;
};

// Add a function that finds and returns the longest run the user has done
User.prototype.longestRun = function () {
  // define an auxillary variable
  let runs = this.runs;

  let result = runs[0].distance;

  for (let i = 1; i < runs.length; i++) {
    if (runs[i].distance > result) {
      result = runs[i].distance;
    }
  }

  return result;
};

// Add a function that returns the user's average speed across all runs
User.prototype.averageSpeed = function () {
  // define an auxillary variable
  let runs = this.runs;

  let totalTime = 0;

  for (let i = 0; i < runs.length; i++) {
    totalTime += runs[i].timeTaken;
  }

  return this.totalDistance() / totalTime;
};

// This is an example of a User object after several Run objects have been added

// const mcFaceRuns = {
//   name: 'Person McFace',
//   email: 'wdi@personmcface.com',
//   runs: [
//     {
//       date: '2015-05-25 15:00',
//       distance: 1200,
//       timeTaken: 600,
//     },
//     {
//       date: '2015-05-25 15:00',
//       distance: 1400,
//       timeTaken: 800,
//     },
//   ],

// module.exports = mcFaceRuns;
module.exports = {
  Run,
  User,
};
