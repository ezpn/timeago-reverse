const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('month', (t) => {
  t.equal(
    rt.parse('month').getTime(),
    new Date(frozenTime - timeUnits.month).getTime()
  );
  t.end();
});

testBlock('month ago', (t) => {
  t.equal(
    rt.parse('month ago').getTime(),
    new Date(frozenTime - timeUnits.month).getTime()
  );
  t.end();
});

testBlock('a month ago', (t) => {
  t.equal(
    rt.parse('a month ago').getTime(),
    new Date(frozenTime - timeUnits.month).getTime()
  );
  t.end();
});

testBlock('1 month ago', (t) => {
  t.equal(
    rt.parse('1 month ago').getTime(),
    new Date(frozenTime - timeUnits.month).getTime()
  );
  t.end();
});

testBlock('20 months ago', (t) => {
  t.equal(
    rt.parse('20 months ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.month).getTime()
  );
  t.end();
});

testBlock('20 months', (t) => {
  t.equal(
    rt.parse('20 months').getTime(),
    new Date(frozenTime - 20 * timeUnits.month).getTime()
  );
  t.end();
});

testBlock('month from now', (t) => {
  t.equal(
    rt.parse('month from now').getTime(),
    new Date(frozenTime + timeUnits.month).getTime()
  );
  t.end();
});

testBlock('a month from now', (t) => {
  t.equal(
    rt.parse('a month from now').getTime(),
    new Date(frozenTime + timeUnits.month).getTime()
  );
  t.end();
});

testBlock('1 month from now', (t) => {
  t.equal(
    rt.parse('1 month from now').getTime(),
    new Date(frozenTime + timeUnits.month).getTime()
  );
  t.end();
});

testBlock('23 months from now', (t) => {
  t.equal(
    rt.parse('23 months from now').getTime(),
    new Date(frozenTime + 23 * timeUnits.month).getTime()
  );
  t.end();
});

testBlock('in month', (t) => {
  t.equal(
    rt.parse('in month').getTime(),
    new Date(frozenTime + timeUnits.month).getTime()
  );
  t.end();
});

testBlock('in a month', (t) => {
  t.equal(
    rt.parse('in a month').getTime(),
    new Date(frozenTime + timeUnits.month).getTime()
  );
  t.end();
});

testBlock('in 1 month', (t) => {
  t.equal(
    rt.parse('in month').getTime(),
    new Date(frozenTime + timeUnits.month).getTime()
  );
  t.end();
});

testBlock('in 20 months', (t) => {
  t.equal(
    rt.parse('in 20 months').getTime(),
    new Date(frozenTime + 20 * timeUnits.month).getTime()
  );
  t.end();
});

testBlock('in 23 months', (t) => {
  t.equal(
    rt.parse('in 23 months').getTime(),
    new Date(frozenTime + 23 * timeUnits.month).getTime()
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
