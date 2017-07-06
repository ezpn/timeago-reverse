const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('second', (t) => {
  t.equal(
    rt.parse('second').getTime(),
    new Date(frozenTime - timeUnits.second).getTime()
  );
  t.end();
});

testBlock('second ago', (t) => {
  t.equal(
    rt.parse('second ago').getTime(),
    new Date(frozenTime - timeUnits.second).getTime()
  );
  t.end();
});

testBlock('a second ago', (t) => {
  t.equal(
    rt.parse('a second ago').getTime(),
    new Date(frozenTime - timeUnits.second).getTime()
  );
  t.end();
});

testBlock('1 second ago', (t) => {
  t.equal(
    rt.parse('1 second ago').getTime(),
    new Date(frozenTime - timeUnits.second).getTime()
  );
  t.end();
});

testBlock('about a second ago', (t) => {
  t.equal(
    rt.parse('about a second ago').getTime(),
    new Date(frozenTime - timeUnits.second).getTime()
  );
  t.end();
});

testBlock('few seconds ago', (t) => {
  t.equal(
    rt.parse('few seconds ago').getTime(),
    new Date(frozenTime - 3 * timeUnits.second).getTime()
  );
  t.end();
});

testBlock('20 seconds ago', (t) => {
  t.equal(
    rt.parse('20 seconds ago').getTime(),
    new Date(frozenTime - 20 * timeUnits.second).getTime()
  );
  t.end();
});

testBlock('20 seconds', (t) => {
  t.equal(
    rt.parse('20 seconds').getTime(),
    new Date(frozenTime - timeUnits.second * 20).getTime()
  );
  t.end();
});

testBlock('second from now', (t) => {
  t.equal(
    rt.parse('second from now').getTime(),
    new Date(frozenTime + timeUnits.second).getTime()
  );
  t.end();
});

testBlock('a second from now', (t) => {
  t.equal(
    rt.parse('a second from now').getTime(),
    new Date(frozenTime + timeUnits.second).getTime()
  );
  t.end();
});

testBlock('1 second from now', (t) => {
  t.equal(
    rt.parse('1 second from now').getTime(),
    new Date(frozenTime + timeUnits.second).getTime()
  );
  t.end();
});

testBlock('40 seconds from now', (t) => {
  t.equal(
    rt.parse('40 seconds from now').getTime(),
    new Date(frozenTime + 40 * timeUnits.second).getTime()
  );
  t.end();
});

testBlock('in second', (t) => {
  t.equal(
    rt.parse('in second').getTime(),
    new Date(frozenTime + timeUnits.second).getTime()
  );
  t.end();
});

testBlock('in a second', (t) => {
  t.equal(
    rt.parse('in a second').getTime(),
    new Date(frozenTime + timeUnits.second).getTime()
  );
  t.end();
});

testBlock('in 1 second', (t) => {
  t.equal(
    rt.parse('in second').getTime(),
    new Date(frozenTime + timeUnits.second).getTime()
  );
  t.end();
});

testBlock('in 20 seconds', (t) => {
  t.equal(
    rt.parse('in 20 seconds').getTime(),
    new Date(frozenTime + 20 * timeUnits.second).getTime()
  );
  t.end();
});

testBlock('in 23 seconds', (t) => {
  t.equal(
    rt.parse('in 23 seconds').getTime(),
    new Date(frozenTime + 23 * timeUnits.second).getTime()
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
