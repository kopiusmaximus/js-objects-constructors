'use strict';

// constructor for a User object
const User = function(name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

// constructor for a Run object
const Run = function(date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

// this code creates Person McFace as a new User object
// let person = new User('Person McFace', 'wdi@personmcface.com',)

// let mcFaceRuns = {
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
//   totalDistance: function () {
//     // access the runs collection and sum all the distances
//     // for each run member (object)
//
//     // building an accumulator, STEP 1: initialize a result variable
//     // give it a sensible default value
//     let result = 0;
//
//     // building an accumulator, STEP 2: add to the the result variable
//     // in this case (and often), using iteration
//     for (let i = 0, max = this.runs.length; i < max; i++) {
//       result += this.runs[i].distance;
//     }
//
//     // building an accumulator, STEP 3: return the result variable
//     return result;
//   },
//   longestRun: function () {},
//   averageSpeed: function () {},
// };



const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600,
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800,
    },
  ],

  totalDistance: function () {
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
  },

  longestRun: function () {
    // define an auxillary variable
    let runs = this.runs;

    let result = runs[0].distance;

    for (let i = 1; i < runs.length; i++) {
      if (runs[i].distance > result) {
        result = runs[i].distance;
      }
    }

    return result;
  },

  averageSpeed: function () {
    // define an auxillary variable
    let runs = this.runs;

    let totalTime = 0;

    for (let i = 0; i < runs.length; i++) {
      totalTime += runs[i].timeTaken;
    }

    return this.totalDistance() / totalTime;
  },
};

// module.exports = mcFaceRuns;
module.exports = Run;
module.exports = User;
