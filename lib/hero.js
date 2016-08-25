'use strict';

const usePower = function () {
  return this._power;
};

const Hero = function (name, alias, power) {
  this.name = name;
  this.alias = alias;
  this._power = power;
  this.usePower = usePower;
};

module.exports = Hero;
