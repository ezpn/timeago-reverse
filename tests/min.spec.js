const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('min', (t) => {
  t.equal(
    rt.parse('min').getTime(),
    new Date(frozenTime - timeUnits.min).getTime()
  );
  t.end();
});

testBlock('min ago', (t) => {
  t.equal(
    rt.parse('min ago').getTime(),
    new Date(frozenTime - timeUnits.min).getTime()
  );
  t.end();
});

testBlock('a min ago', (t) => {
  t.equal(
    rt.parse('a min ago').getTime(),
    new Date(frozenTime - timeUnits.min).getTime()
  );
  t.end();
});

testBlock('1 min ago', (t) => {
  t.equal(
    rt.parse('1 min ago').getTime(),
    new Date(frozenTime - timeUnits.min).getTime()
  );
  t.end();
});

testBlock('about a min ago', (t) => {
  t.equal(
    rt.parse('about a min ago').getTime(),
    new Date(frozenTime - timeUnits.min).getTime()
  );
  t.end();
});

testBlock('few mins ago', (t) => {
  t.equal(
    rt.parse('few mins ago').getTime(),
    new Date(frozenTime - 3 * timeUnits.min).getTime()
  );
  t.end();
});

testBlock('20 mins ago', (t) => {
  t.equal(
    rt.parse('20 mins ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.min).getTime()
  );
  t.end();
});

testBlock('20 mins', (t) => {
  t.equal(
    rt.parse('20 mins').getTime(),
    new Date(frozenTime - 20 * timeUnits.min).getTime()
  );
  t.end();
});

testBlock('a min from now', (t) => {
  t.equal(
    rt.parse('a min from now').getTime(),
    new Date(frozenTime + timeUnits.min).getTime()
  );
  t.end();
});

testBlock('1 min from now', (t) => {
  t.equal(
    rt.parse('1 min from now').getTime(),
    new Date(frozenTime + timeUnits.min).getTime()
  );
  t.end();
});

testBlock('40 mins from now', (t) => {
  t.equal(
    rt.parse('40 mins from now').getTime(),
    new Date(frozenTime + 40 * timeUnits.min).getTime()
  );
  t.end();
});

testBlock('min from now', (t) => {
  t.equal(
    rt.parse('min from now').getTime(),
    new Date(frozenTime + timeUnits.min).getTime()
  );
  t.end();
});

testBlock('in min', (t) => {
  t.equal(
    rt.parse('in min').getTime(),
    new Date(frozenTime + timeUnits.min).getTime()
  );
  t.end();
});

testBlock('in a min', (t) => {
  t.equal(
    rt.parse('in a min').getTime(),
    new Date(frozenTime + timeUnits.min).getTime()
  );
  t.end();
});

testBlock('in 1 min', (t) => {
  t.equal(
    rt.parse('in min').getTime(),
    new Date(frozenTime + timeUnits.min).getTime()
  );
  t.end();
});

testBlock('in 20 mins', (t) => {
  t.equal(
    rt.parse('in 20 mins').getTime(),
    new Date(frozenTime + 20 * timeUnits.min).getTime()
  );
  t.end();
});

testBlock('in 23 mins', (t) => {
  t.equal(
    rt.parse('in 23 mins').getTime(),
    new Date(frozenTime + 23 * timeUnits.min).getTime()
  );
  t.end();
});

testBlock('eight mins ago', (t) => {
  t.throws(
    () => rt.parse('eight mins ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 mins ago', (t) => {
  t.throws(
    () => rt.parse('-10 mins ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});
