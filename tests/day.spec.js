const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('day', (t) => {
  t.equal(
    rt.parse('day').getTime(),
    new Date(frozenTime - timeUnits.day).getTime()
  );
  t.end();
});

testBlock('day ago', (t) => {
  t.equal(
    rt.parse('day ago').getTime(),
    new Date(frozenTime - timeUnits.day).getTime()
  );
  t.end();
});

testBlock('a day ago', (t) => {
  t.equal(
    rt.parse('a day ago').getTime(),
    new Date(frozenTime - timeUnits.day).getTime()
  );
  t.end();
});

testBlock('1 day ago', (t) => {
  t.equal(
    rt.parse('1 day ago').getTime(),
    new Date(frozenTime - timeUnits.day).getTime()
  );
  t.end();
});

testBlock('about a day ago', (t) => {
  t.equal(
    rt.parse('about a day ago').getTime(),
    new Date(frozenTime - timeUnits.day).getTime()
  );
  t.end();
});

testBlock('few days ago', (t) => {
  t.equal(
    rt.parse('few days ago').getTime(),
    new Date(frozenTime - 3 * timeUnits.day).getTime()
  );
  t.end();
});

testBlock('20 days ago', (t) => {
  t.equal(
    rt.parse('20 days ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.day).getTime()
  );
  t.end();
});

testBlock('20 days', (t) => {
  t.equal(
    rt.parse('20 days').getTime(),
    new Date(frozenTime - 20 * timeUnits.day).getTime()
  );
  t.end();
});

testBlock('day from now', (t) => {
  t.equal(
    rt.parse('day from now').getTime(),
    new Date(frozenTime + timeUnits.day).getTime()
  );
  t.end();
});

testBlock('a day from now', (t) => {
  t.equal(
    rt.parse('a day from now').getTime(),
    new Date(frozenTime + timeUnits.day).getTime()
  );
  t.end();
});

testBlock('1 day from now', (t) => {
  t.equal(
    rt.parse('1 day from now').getTime(),
    new Date(frozenTime + timeUnits.day).getTime()
  );
  t.end();
});

testBlock('23 days from now', (t) => {
  t.equal(
    rt.parse('23 days from now').getTime(),
    new Date(frozenTime + 23 * timeUnits.day).getTime()
  );
  t.end();
});

testBlock('in day', (t) => {
  t.equal(
    rt.parse('in day').getTime(),
    new Date(frozenTime + timeUnits.day).getTime()
  );
  t.end();
});

testBlock('in a day', (t) => {
  t.equal(
    rt.parse('in a day').getTime(),
    new Date(frozenTime + timeUnits.day).getTime()
  );
  t.end();
});

testBlock('in 1 day', (t) => {
  t.equal(
    rt.parse('in day').getTime(),
    new Date(frozenTime + timeUnits.day).getTime()
  );
  t.end();
});

testBlock('in 20 days', (t) => {
  t.equal(
    rt.parse('in 20 days').getTime(),
    new Date(frozenTime + 20 * timeUnits.day).getTime()
  );
  t.end();
});

testBlock('in 23 days', (t) => {
  t.equal(
    rt.parse('in 23 days').getTime(),
    new Date(frozenTime + 23 * timeUnits.day).getTime()
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
