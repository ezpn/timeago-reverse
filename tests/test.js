const test = require('tape');
const around = require('tape-around');
const sinon = require('sinon');
const rt = require('../index');

const frozenTime = 1498749529000;

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

/*******************************
 * START Now test section
 */
testBlock('now', (t) => {
  t.equal(rt.parse('now').getTime(), new Date(frozenTime).getTime());
  t.end();
});

testBlock('just now', (t) => {
  t.equal(rt.parse('just now').getTime(), new Date(frozenTime).getTime());
  t.end();
});

testBlock('any moment now', (t) => {
  t.equal(rt.parse('any moment now').getTime(), new Date(frozenTime).getTime());
  t.end();
});

/**
 * END Now test section
 *******************************/


/*******************************
 * START Seconds test section
 */

testBlock('less than a minute', (t) => {
  t.equal(
    rt.parse('less than a minute').getTime(),
    new Date(frozenTime - 30 * 1000).getTime()
  );
  t.end();
});

testBlock('less than a minute ago', (t) => {
  t.equal(
    rt.parse('less than a minute ago').getTime(),
    new Date(frozenTime - 30 * 1000).getTime()
  );
  t.end();
});

testBlock('second', (t) => {
  t.equal(
    rt.parse('second').getTime(),
    new Date(frozenTime - 1000).getTime()
  );
  t.end();
});

testBlock('second ago', (t) => {
  t.equal(
    rt.parse('second ago').getTime(),
    new Date(frozenTime - 1000).getTime()
  );
  t.end();
});

testBlock('second from now', (t) => {
  t.equal(
    rt.parse('second from now').getTime(),
    new Date(frozenTime + 1000).getTime()
  );
  t.end();
});

testBlock('a second ago', (t) => {
  t.equal(
    rt.parse('a second ago').getTime(),
    new Date(frozenTime - 1000).getTime()
  );
  t.end();
});

testBlock('1 second ago', (t) => {
  t.equal(
    rt.parse('1 second ago').getTime(),
    new Date(frozenTime - 1000).getTime()
  );
  t.end();
});

testBlock('20 seconds ago', (t) => {
  t.equal(
    rt.parse('20 seconds ago').getTime(),
    new Date(frozenTime - 1000 * 20).getTime()
  );
  t.end();
});

testBlock('20 seconds', (t) => {
  t.equal(
    rt.parse('20 seconds').getTime(),
    new Date(frozenTime - 1000 * 20).getTime()
  );
  t.end();
});

testBlock('a second from now', (t) => {
  t.equal(
    rt.parse('a second from now').getTime(),
    new Date(frozenTime + 1000).getTime()
  );
  t.end();
});

testBlock('1 second from now', (t) => {
  t.equal(
    rt.parse('1 second from now').getTime(),
    new Date(frozenTime + 1000).getTime()
  );
  t.end();
});

testBlock('40 seconds from now', (t) => {
  t.equal(
    rt.parse('40 seconds from now').getTime(),
    new Date(frozenTime + 1000 * 40).getTime()
  );
  t.end();
});

testBlock('eight seconds ago', (t) => {
  t.throws(
    () => rt.parse('eight seconds ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 seconds ago', (t) => {
  t.throws(
    () => rt.parse('-10 seconds ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});

/**
 * END Seconds test section
 *******************************/


/*******************************
 * START Minutes test section
 */

testBlock('minute', (t) => {
  t.equal(
    rt.parse('minute').getTime(),
    new Date(frozenTime - 1000 * 60).getTime()
  );
  t.end();
});

testBlock('minute ago', (t) => {
  t.equal(
    rt.parse('minute ago').getTime(),
    new Date(frozenTime - 1000 * 60).getTime()
  );
  t.end();
});

testBlock('minute from now', (t) => {
  t.equal(
    rt.parse('minute from now').getTime(),
    new Date(frozenTime + 1000 * 60).getTime()
  );
  t.end();
});

testBlock('a minute ago', (t) => {
  t.equal(
    rt.parse('a minute ago').getTime(),
    new Date(frozenTime - 1000 * 60).getTime()
  );
  t.end();
});

testBlock('1 minute ago', (t) => {
  t.equal(
    rt.parse('1 minute ago').getTime(),
    new Date(frozenTime - 1000 * 60).getTime()
  );
  t.end();
});

testBlock('20 minutes ago', (t) => {
  t.equal(
    rt.parse('20 minutes ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 20).getTime()
  );
  t.end();
});

testBlock('20 minutes', (t) => {
  t.equal(
    rt.parse('20 minutes').getTime(),
    new Date(frozenTime - 1000 * 60 * 20).getTime()
  );
  t.end();
});

testBlock('a minute from now', (t) => {
  t.equal(
    rt.parse('a minute from now').getTime(),
    new Date(frozenTime + 1000 * 60).getTime()
  );
  t.end();
});

testBlock('1 minute from now', (t) => {
  t.equal(
    rt.parse('1 minute from now').getTime(),
    new Date(frozenTime + 1000 * 60).getTime()
  );
  t.end();
});

testBlock('40 minutes from now', (t) => {
  t.equal(
    rt.parse('40 minutes from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 40).getTime()
  );
  t.end();
});

testBlock('eight minutes ago', (t) => {
  t.throws(
    () => rt.parse('eight minutes ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 minutes ago', (t) => {
  t.throws(
    () => rt.parse('-10 minutes ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});

/**
 * END Minutes test section
 *******************************/


/*******************************
 * START Hours test section
 */

testBlock('hour', (t) => {
  t.equal(
    rt.parse('hour').getTime(),
    new Date(frozenTime - 1000 * 60 * 60).getTime()
  );
  t.end();
});

testBlock('hour ago', (t) => {
  t.equal(
    rt.parse('hour ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60).getTime()
  );
  t.end();
});

testBlock('hour from now', (t) => {
  t.equal(
    rt.parse('hour from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60).getTime()
  );
  t.end();
});

testBlock('a hour ago', (t) => {
  t.equal(
    rt.parse('a hour ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60).getTime()
  );
  t.end();
});

testBlock('1 hour ago', (t) => {
  t.equal(
    rt.parse('1 hour ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60).getTime()
  );
  t.end();
});

testBlock('20 hours ago', (t) => {
  t.equal(
    rt.parse('20 hours ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 20).getTime()
  );
  t.end();
});

testBlock('20 hours', (t) => {
  t.equal(
    rt.parse('20 hours').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 20).getTime()
  );
  t.end();
});

testBlock('a hour from now', (t) => {
  t.equal(
    rt.parse('a hour from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60).getTime()
  );
  t.end();
});

testBlock('1 hour from now', (t) => {
  t.equal(
    rt.parse('1 hour from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60).getTime()
  );
  t.end();
});

testBlock('23 hours from now', (t) => {
  t.equal(
    rt.parse('23 hours from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 23).getTime()
  );
  t.end();
});

testBlock('eight hours ago', (t) => {
  t.throws(
    () => rt.parse('eight hours ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 hours ago', (t) => {
  t.throws(
    () => rt.parse('-10 hours ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});

/**
 * END Hours test section
 *******************************/


/*******************************
 * START Days test section
 */

testBlock('day', (t) => {
  t.equal(
    rt.parse('day').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24).getTime()
  );
  t.end();
});

testBlock('day ago', (t) => {
  t.equal(
    rt.parse('day ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24).getTime()
  );
  t.end();
});

testBlock('day from now', (t) => {
  t.equal(
    rt.parse('day from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24).getTime()
  );
  t.end();
});

testBlock('a day ago', (t) => {
  t.equal(
    rt.parse('a day ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24).getTime()
  );
  t.end();
});

testBlock('1 day ago', (t) => {
  t.equal(
    rt.parse('1 day ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24).getTime()
  );
  t.end();
});

testBlock('20 days ago', (t) => {
  t.equal(
    rt.parse('20 days ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 20).getTime()
  );
  t.end();
});

testBlock('20 days', (t) => {
  t.equal(
    rt.parse('20 days').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 20).getTime()
  );
  t.end();
});

testBlock('a day from now', (t) => {
  t.equal(
    rt.parse('a day from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24).getTime()
  );
  t.end();
});

testBlock('1 day from now', (t) => {
  t.equal(
    rt.parse('1 day from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24).getTime()
  );
  t.end();
});

testBlock('23 days from now', (t) => {
  t.equal(
    rt.parse('23 days from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 23).getTime()
  );
  t.end();
});

testBlock('eight days ago', (t) => {
  t.throws(
    () => rt.parse('eight days ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 days ago', (t) => {
  t.throws(
    () => rt.parse('-10 days ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});

/**
 * END Days test section
 *******************************/


/*******************************
 * START Weeks test section
 */

testBlock('week', (t) => {
  t.equal(
    rt.parse('week').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 7).getTime()
  );
  t.end();
});

testBlock('week ago', (t) => {
  t.equal(
    rt.parse('week ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 7).getTime()
  );
  t.end();
});

testBlock('week from now', (t) => {
  t.equal(
    rt.parse('week from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 7).getTime()
  );
  t.end();
});

testBlock('a week ago', (t) => {
  t.equal(
    rt.parse('a week ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 7).getTime()
  );
  t.end();
});

testBlock('1 week ago', (t) => {
  t.equal(
    rt.parse('1 week ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 7).getTime()
  );
  t.end();
});

testBlock('20 weeks ago', (t) => {
  t.equal(
    rt.parse('20 weeks ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 7 * 20).getTime()
  );
  t.end();
});

testBlock('20 weeks', (t) => {
  t.equal(
    rt.parse('20 weeks').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 7 * 20).getTime()
  );
  t.end();
});

testBlock('a week from now', (t) => {
  t.equal(
    rt.parse('a week from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 7).getTime()
  );
  t.end();
});

testBlock('1 week from now', (t) => {
  t.equal(
    rt.parse('1 week from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 7).getTime()
  );
  t.end();
});

testBlock('23 weeks from now', (t) => {
  t.equal(
    rt.parse('23 weeks from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 7 * 23).getTime()
  );
  t.end();
});

testBlock('eight weeks ago', (t) => {
  t.throws(
    () => rt.parse('eight weeks ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 weeks ago', (t) => {
  t.throws(
    () => rt.parse('-10 weeks ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});

/**
 * END Weeks test section
 *******************************/


/*******************************
 * START Months test section
 */

testBlock('month', (t) => {
  t.equal(
    rt.parse('month').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 30).getTime()
  );
  t.end();
});

testBlock('month ago', (t) => {
  t.equal(
    rt.parse('month ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 30).getTime()
  );
  t.end();
});

testBlock('month from now', (t) => {
  t.equal(
    rt.parse('month from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 30).getTime()
  );
  t.end();
});

testBlock('a month ago', (t) => {
  t.equal(
    rt.parse('a month ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 30).getTime()
  );
  t.end();
});

testBlock('1 month ago', (t) => {
  t.equal(
    rt.parse('1 month ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 30).getTime()
  );
  t.end();
});

testBlock('20 months ago', (t) => {
  t.equal(
    rt.parse('20 months ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 30 * 20).getTime()
  );
  t.end();
});

testBlock('20 months', (t) => {
  t.equal(
    rt.parse('20 months').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 30 * 20).getTime()
  );
  t.end();
});

testBlock('a month from now', (t) => {
  t.equal(
    rt.parse('a month from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 30).getTime()
  );
  t.end();
});

testBlock('1 month from now', (t) => {
  t.equal(
    rt.parse('1 month from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 30).getTime()
  );
  t.end();
});

testBlock('23 months from now', (t) => {
  t.equal(
    rt.parse('23 months from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 30 * 23).getTime()
  );
  t.end();
});

testBlock('eight months ago', (t) => {
  t.throws(
    () => rt.parse('eight months ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 months ago', (t) => {
  t.throws(
    () => rt.parse('-10 months ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});

/**
 * END Months test section
 *******************************/


/*******************************
 * START Years test section
 */

testBlock('year', (t) => {
  t.equal(
    rt.parse('year').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 365).getTime()
  );
  t.end();
});

testBlock('year ago', (t) => {
  t.equal(
    rt.parse('year ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 365).getTime()
  );
  t.end();
});

testBlock('year from now', (t) => {
  t.equal(
    rt.parse('year from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 365).getTime()
  );
  t.end();
});

testBlock('a year ago', (t) => {
  t.equal(
    rt.parse('a year ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 365).getTime()
  );
  t.end();
});

testBlock('1 year ago', (t) => {
  t.equal(
    rt.parse('1 year ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 365).getTime()
  );
  t.end();
});

testBlock('20 years ago', (t) => {
  t.equal(
    rt.parse('20 years ago').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 365 * 20).getTime()
  );
  t.end();
});

testBlock('20 years', (t) => {
  t.equal(
    rt.parse('20 years').getTime(),
    new Date(frozenTime - 1000 * 60 * 60 * 24 * 365 * 20).getTime()
  );
  t.end();
});

testBlock('a year from now', (t) => {
  t.equal(
    rt.parse('a year from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 365).getTime()
  );
  t.end();
});

testBlock('1 year from now', (t) => {
  t.equal(
    rt.parse('1 year from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 365).getTime()
  );
  t.end();
});

testBlock('23 years from now', (t) => {
  t.equal(
    rt.parse('23 years from now').getTime(),
    new Date(frozenTime + 1000 * 60 * 60 * 24 * 365 * 23).getTime()
  );
  t.end();
});

testBlock('eight years ago', (t) => {
  t.throws(
    () => rt.parse('eight years ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 years ago', (t) => {
  t.throws(
    () => rt.parse('-10 years ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});

/**
 * END Years test section
 *******************************/


/********************************
 * START Misc error test section
 */
testBlock('5 millenias ago', (t) => {
  t.throws(
    () => rt.parse('5 millenias ago'),
    new RegExp(/Timeago unit "millenias" is not supported/g)
  );
  t.end();
});

testBlock('a', (t) => {
  t.throws(
    () => rt.parse('a'),
    new RegExp(/Cannot find time unit in timeago expression/g)
  );
  t.end();
});

/**
 * END Misc error test section
 *******************************/
