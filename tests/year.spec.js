const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('year', (t) => {
  t.equal(
    rt.parse('year').getTime(),
    new Date(frozenTime - timeUnits.year).getTime()
  );
  t.end();
});

testBlock('year ago', (t) => {
  t.equal(
    rt.parse('year ago').getTime(),
    new Date(frozenTime - timeUnits.year).getTime()
  );
  t.end();
});

testBlock('a year ago', (t) => {
  t.equal(
    rt.parse('a year ago').getTime(),
    new Date(frozenTime - timeUnits.year).getTime()
  );
  t.end();
});

testBlock('1 year ago', (t) => {
  t.equal(
    rt.parse('1 year ago').getTime(),
    new Date(frozenTime - timeUnits.year).getTime()
  );
  t.end();
});

testBlock('about a year ago', (t) => {
  t.equal(
    rt.parse('about a year ago').getTime(),
    new Date(frozenTime - timeUnits.year).getTime()
  );
  t.end();
});

testBlock('few years ago', (t) => {
  t.equal(
    rt.parse('few years ago').getTime(),
    new Date(frozenTime - 3 * timeUnits.year).getTime()
  );
  t.end();
});

testBlock('20 years ago', (t) => {
  t.equal(
    rt.parse('20 years ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.year).getTime()
  );
  t.end();
});

testBlock('20 years', (t) => {
  t.equal(
    rt.parse('20 years').getTime(),
    new Date(frozenTime - 20 * timeUnits.year).getTime()
  );
  t.end();
});

testBlock('year from now', (t) => {
  t.equal(
    rt.parse('year from now').getTime(),
    new Date(frozenTime + timeUnits.year).getTime()
  );
  t.end();
});

testBlock('a year from now', (t) => {
  t.equal(
    rt.parse('a year from now').getTime(),
    new Date(frozenTime + timeUnits.year).getTime()
  );
  t.end();
});

testBlock('1 year from now', (t) => {
  t.equal(
    rt.parse('1 year from now').getTime(),
    new Date(frozenTime + timeUnits.year).getTime()
  );
  t.end();
});

testBlock('23 years from now', (t) => {
  t.equal(
    rt.parse('23 years from now').getTime(),
    new Date(frozenTime + 23 * timeUnits.year).getTime()
  );
  t.end();
});

testBlock('in year', (t) => {
  t.equal(
    rt.parse('in year').getTime(),
    new Date(frozenTime + timeUnits.year).getTime()
  );
  t.end();
});

testBlock('in a year', (t) => {
  t.equal(
    rt.parse('in a year').getTime(),
    new Date(frozenTime + timeUnits.year).getTime()
  );
  t.end();
});

testBlock('in 1 year', (t) => {
  t.equal(
    rt.parse('in year').getTime(),
    new Date(frozenTime + timeUnits.year).getTime()
  );
  t.end();
});

testBlock('in 20 years', (t) => {
  t.equal(
    rt.parse('in 20 years').getTime(),
    new Date(frozenTime + 20 * timeUnits.year).getTime()
  );
  t.end();
});

testBlock('in 23 years', (t) => {
  t.equal(
    rt.parse('in 23 years').getTime(),
    new Date(frozenTime + 23 * timeUnits.year).getTime()
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
