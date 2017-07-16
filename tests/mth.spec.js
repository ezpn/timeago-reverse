const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('mth', (t) => {
  t.equal(
    rt.parse('mth').getTime(),
    new Date(frozenTime - timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('mth ago', (t) => {
  t.equal(
    rt.parse('mth ago').getTime(),
    new Date(frozenTime - timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('a mth ago', (t) => {
  t.equal(
    rt.parse('a mth ago').getTime(),
    new Date(frozenTime - timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('1 mth ago', (t) => {
  t.equal(
    rt.parse('1 mth ago').getTime(),
    new Date(frozenTime - timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('about a mth ago', (t) => {
  t.equal(
    rt.parse('about a mth ago').getTime(),
    new Date(frozenTime - timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('few mths ago', (t) => {
  t.equal(
    rt.parse('few mths ago').getTime(),
    new Date(frozenTime - 3 * timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('20 mths ago', (t) => {
  t.equal(
    rt.parse('20 mths ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('20 mths', (t) => {
  t.equal(
    rt.parse('20 mths').getTime(),
    new Date(frozenTime - 20 * timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('mth from now', (t) => {
  t.equal(
    rt.parse('mth from now').getTime(),
    new Date(frozenTime + timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('a mth from now', (t) => {
  t.equal(
    rt.parse('a mth from now').getTime(),
    new Date(frozenTime + timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('1 mth from now', (t) => {
  t.equal(
    rt.parse('1 mth from now').getTime(),
    new Date(frozenTime + timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('23 mths from now', (t) => {
  t.equal(
    rt.parse('23 mths from now').getTime(),
    new Date(frozenTime + 23 * timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('in mth', (t) => {
  t.equal(
    rt.parse('in mth').getTime(),
    new Date(frozenTime + timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('in a mth', (t) => {
  t.equal(
    rt.parse('in a mth').getTime(),
    new Date(frozenTime + timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('in 1 mth', (t) => {
  t.equal(
    rt.parse('in mth').getTime(),
    new Date(frozenTime + timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('in 20 mths', (t) => {
  t.equal(
    rt.parse('in 20 mths').getTime(),
    new Date(frozenTime + 20 * timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('in 23 mths', (t) => {
  t.equal(
    rt.parse('in 23 mths').getTime(),
    new Date(frozenTime + 23 * timeUnits.mth).getTime()
  );
  t.end();
});

testBlock('eight mths ago', (t) => {
  t.throws(
    () => rt.parse('eight mths ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 mths ago', (t) => {
  t.throws(
    () => rt.parse('-10 mths ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});
