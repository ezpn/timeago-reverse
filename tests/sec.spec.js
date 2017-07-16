const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('sec', (t) => {
  t.equal(
    rt.parse('sec').getTime(),
    new Date(frozenTime - timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('sec ago', (t) => {
  t.equal(
    rt.parse('sec ago').getTime(),
    new Date(frozenTime - timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('a sec ago', (t) => {
  t.equal(
    rt.parse('a sec ago').getTime(),
    new Date(frozenTime - timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('1 sec ago', (t) => {
  t.equal(
    rt.parse('1 sec ago').getTime(),
    new Date(frozenTime - timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('about a sec ago', (t) => {
  t.equal(
    rt.parse('about a sec ago').getTime(),
    new Date(frozenTime - timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('few secs ago', (t) => {
  t.equal(
    rt.parse('few secs ago').getTime(),
    new Date(frozenTime - 3 * timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('20 secs ago', (t) => {
  t.equal(
    rt.parse('20 secs ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('20 secs', (t) => {
  t.equal(
    rt.parse('20 secs').getTime(),
    new Date(frozenTime - timeUnits.sec * 20).getTime()
  );
  t.end();
});

testBlock('sec from now', (t) => {
  t.equal(
    rt.parse('sec from now').getTime(),
    new Date(frozenTime + timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('a sec from now', (t) => {
  t.equal(
    rt.parse('a sec from now').getTime(),
    new Date(frozenTime + timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('1 sec from now', (t) => {
  t.equal(
    rt.parse('1 sec from now').getTime(),
    new Date(frozenTime + timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('40 secs from now', (t) => {
  t.equal(
    rt.parse('40 secs from now').getTime(),
    new Date(frozenTime + 40 * timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('in sec', (t) => {
  t.equal(
    rt.parse('in sec').getTime(),
    new Date(frozenTime + timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('in a sec', (t) => {
  t.equal(
    rt.parse('in a sec').getTime(),
    new Date(frozenTime + timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('in 1 sec', (t) => {
  t.equal(
    rt.parse('in sec').getTime(),
    new Date(frozenTime + timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('in 20 secs', (t) => {
  t.equal(
    rt.parse('in 20 secs').getTime(),
    new Date(frozenTime + 20 * timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('in 23 secs', (t) => {
  t.equal(
    rt.parse('in 23 secs').getTime(),
    new Date(frozenTime + 23 * timeUnits.sec).getTime()
  );
  t.end();
});

testBlock('eight secs ago', (t) => {
  t.throws(
    () => rt.parse('eight secs ago'),
    new RegExp(/First part of timeago string must be a time amount \(parsable positive integer\)/g)
  );
  t.end();
});

testBlock('-10 secs ago', (t) => {
  t.throws(
    () => rt.parse('-10 secs ago'),
    new RegExp(/Amount should be a positive integer/g)
  );
  t.end();
});
