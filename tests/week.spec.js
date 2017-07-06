const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('week', (t) => {
  t.equal(
    rt.parse('week').getTime(),
    new Date(frozenTime - timeUnits.week).getTime()
  );
  t.end();
});

testBlock('week ago', (t) => {
  t.equal(
    rt.parse('week ago').getTime(),
    new Date(frozenTime - timeUnits.week).getTime()
  );
  t.end();
});

testBlock('a week ago', (t) => {
  t.equal(
    rt.parse('a week ago').getTime(),
    new Date(frozenTime - timeUnits.week).getTime()
  );
  t.end();
});

testBlock('1 week ago', (t) => {
  t.equal(
    rt.parse('1 week ago').getTime(),
    new Date(frozenTime - timeUnits.week).getTime()
  );
  t.end();
});

testBlock('about a week ago', (t) => {
  t.equal(
    rt.parse('about a week ago').getTime(),
    new Date(frozenTime - timeUnits.week).getTime()
  );
  t.end();
});

testBlock('few weeks ago', (t) => {
  t.equal(
    rt.parse('few weeks ago').getTime(),
    new Date(frozenTime - 3 * timeUnits.week).getTime()
  );
  t.end();
});

testBlock('20 weeks ago', (t) => {
  t.equal(
    rt.parse('20 weeks ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.week).getTime()
  );
  t.end();
});

testBlock('20 weeks', (t) => {
  t.equal(
    rt.parse('20 weeks').getTime(),
    new Date(frozenTime - 20 * timeUnits.week).getTime()
  );
  t.end();
});

testBlock('week from now', (t) => {
  t.equal(
    rt.parse('week from now').getTime(),
    new Date(frozenTime + timeUnits.week).getTime()
  );
  t.end();
});

testBlock('a week from now', (t) => {
  t.equal(
    rt.parse('a week from now').getTime(),
    new Date(frozenTime + timeUnits.week).getTime()
  );
  t.end();
});

testBlock('1 week from now', (t) => {
  t.equal(
    rt.parse('1 week from now').getTime(),
    new Date(frozenTime + timeUnits.week).getTime()
  );
  t.end();
});

testBlock('23 weeks from now', (t) => {
  t.equal(
    rt.parse('23 weeks from now').getTime(),
    new Date(frozenTime + 23 * timeUnits.week).getTime()
  );
  t.end();
});

testBlock('in week', (t) => {
  t.equal(
    rt.parse('in week').getTime(),
    new Date(frozenTime + timeUnits.week).getTime()
  );
  t.end();
});

testBlock('in a week', (t) => {
  t.equal(
    rt.parse('in a week').getTime(),
    new Date(frozenTime + timeUnits.week).getTime()
  );
  t.end();
});

testBlock('in 1 week', (t) => {
  t.equal(
    rt.parse('in week').getTime(),
    new Date(frozenTime + timeUnits.week).getTime()
  );
  t.end();
});

testBlock('in 20 weeks', (t) => {
  t.equal(
    rt.parse('in 20 weeks').getTime(),
    new Date(frozenTime + 20 * timeUnits.week).getTime()
  );
  t.end();
});

testBlock('in 23 weeks', (t) => {
  t.equal(
    rt.parse('in 23 weeks').getTime(),
    new Date(frozenTime + 23 * timeUnits.week).getTime()
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
