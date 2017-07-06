const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('hour', (t) => {
  t.equal(
    rt.parse('hour').getTime(),
    new Date(frozenTime - timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('hour ago', (t) => {
  t.equal(
    rt.parse('hour ago').getTime(),
    new Date(frozenTime - timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('a hour ago', (t) => {
  t.equal(
    rt.parse('a hour ago').getTime(),
    new Date(frozenTime - timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('1 hour ago', (t) => {
  t.equal(
    rt.parse('1 hour ago').getTime(),
    new Date(frozenTime - timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('20 hours ago', (t) => {
  t.equal(
    rt.parse('20 hours ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('20 hours', (t) => {
  t.equal(
    rt.parse('20 hours').getTime(),
    new Date(frozenTime - 20 * timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('hour from now', (t) => {
  t.equal(
    rt.parse('hour from now').getTime(),
    new Date(frozenTime + timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('a hour from now', (t) => {
  t.equal(
    rt.parse('a hour from now').getTime(),
    new Date(frozenTime + timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('1 hour from now', (t) => {
  t.equal(
    rt.parse('1 hour from now').getTime(),
    new Date(frozenTime + timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('23 hours from now', (t) => {
  t.equal(
    rt.parse('23 hours from now').getTime(),
    new Date(frozenTime + 23 * timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('in hour', (t) => {
  t.equal(
    rt.parse('in hour').getTime(),
    new Date(frozenTime + timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('in a hour', (t) => {
  t.equal(
    rt.parse('in a hour').getTime(),
    new Date(frozenTime + timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('in 1 hour', (t) => {
  t.equal(
    rt.parse('in hour').getTime(),
    new Date(frozenTime + timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('in 20 hours', (t) => {
  t.equal(
    rt.parse('in 20 hours').getTime(),
    new Date(frozenTime + 20 * timeUnits.hour).getTime()
  );
  t.end();
});

testBlock('in 23 hours', (t) => {
  t.equal(
    rt.parse('in 23 hours').getTime(),
    new Date(frozenTime + 23 * timeUnits.hour).getTime()
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
