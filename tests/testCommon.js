const test = require('tape');
const around = require('tape-around');
const sinon = require('sinon');
const rt = require('../index');

const frozenTime = 1498749529000;

const timeUnits = { second: 1000 };
timeUnits.seconds = timeUnits.secs = timeUnits.sec = timeUnits.second;
timeUnits.minute = timeUnits.minutes = timeUnits.min = timeUnits.mins = timeUnits.second * 60;
timeUnits.hour = timeUnits.hours = timeUnits.minute * 60;
timeUnits.day = timeUnits.days = timeUnits.hour * 24;
timeUnits.week = timeUnits.weeks = timeUnits.day * 7;
timeUnits.month = timeUnits.months = timeUnits.mth = timeUnits.mths = timeUnits.day * 30;
timeUnits.year = timeUnits.years = timeUnits.day * 365;

// Adding before and after fake timers hooks
const testBlock = around(test)
  .before((t) => {
    this.clock = sinon.useFakeTimers(frozenTime);
    t.next();
  })
  .after((t) => {
    this.clock.restore();
    t.end();
  });

module.exports = {
  frozenTime,
  timeUnits,
  testBlock,
  rt,
};
