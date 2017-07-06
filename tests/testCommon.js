const test = require('tape');
const around = require('tape-around');
const sinon = require('sinon');
const rt = require('../index');

const frozenTime = 1498749529000;

const timeUnits = { second: 1000 };
timeUnits.seconds = timeUnits.second;
timeUnits.minute = timeUnits.second * 60;
timeUnits.minutes = timeUnits.minute;
timeUnits.hour = timeUnits.minute * 60;
timeUnits.hours = timeUnits.hour;
timeUnits.day = timeUnits.hour * 24;
timeUnits.days = timeUnits.day;
timeUnits.week = timeUnits.day * 7;
timeUnits.weeks = timeUnits.week;
timeUnits.month = timeUnits.day * 30;
timeUnits.months = timeUnits.month;
timeUnits.year = timeUnits.day * 365;
timeUnits.years = timeUnits.year;

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
