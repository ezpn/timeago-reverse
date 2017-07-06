const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('minute', (t) => {
  t.equal(
    rt.parse('minute').getTime(),
    new Date(frozenTime - timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('minute ago', (t) => {
  t.equal(
    rt.parse('minute ago').getTime(),
    new Date(frozenTime - timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('a minute ago', (t) => {
  t.equal(
    rt.parse('a minute ago').getTime(),
    new Date(frozenTime - timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('1 minute ago', (t) => {
  t.equal(
    rt.parse('1 minute ago').getTime(),
    new Date(frozenTime - timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('about a minute ago', (t) => {
  t.equal(
    rt.parse('about a minute ago').getTime(),
    new Date(frozenTime - timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('few minutes ago', (t) => {
  t.equal(
    rt.parse('few minutes ago').getTime(),
    new Date(frozenTime - 3 * timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('20 minutes ago', (t) => {
  t.equal(
    rt.parse('20 minutes ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('20 minutes', (t) => {
  t.equal(
    rt.parse('20 minutes').getTime(),
    new Date(frozenTime - 20 * timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('a minute from now', (t) => {
  t.equal(
    rt.parse('a minute from now').getTime(),
    new Date(frozenTime + timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('1 minute from now', (t) => {
  t.equal(
    rt.parse('1 minute from now').getTime(),
    new Date(frozenTime + timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('40 minutes from now', (t) => {
  t.equal(
    rt.parse('40 minutes from now').getTime(),
    new Date(frozenTime + 40 * timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('minute from now', (t) => {
  t.equal(
    rt.parse('minute from now').getTime(),
    new Date(frozenTime + timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('in minute', (t) => {
  t.equal(
    rt.parse('in minute').getTime(),
    new Date(frozenTime + timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('in a minute', (t) => {
  t.equal(
    rt.parse('in a minute').getTime(),
    new Date(frozenTime + timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('in 1 minute', (t) => {
  t.equal(
    rt.parse('in minute').getTime(),
    new Date(frozenTime + timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('in 20 minutes', (t) => {
  t.equal(
    rt.parse('in 20 minutes').getTime(),
    new Date(frozenTime + 20 * timeUnits.minute).getTime()
  );
  t.end();
});

testBlock('in 23 minutes', (t) => {
  t.equal(
    rt.parse('in 23 minutes').getTime(),
    new Date(frozenTime + 23 * timeUnits.minute).getTime()
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
