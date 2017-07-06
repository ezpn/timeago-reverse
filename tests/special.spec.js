const { frozenTime, timeUnits, testBlock, rt } = require('./testCommon');

testBlock('now', (t) => {
  t.equal(rt.parse('now').getTime(), new Date(frozenTime).getTime());
  t.end();
});

testBlock('just now', (t) => {
  t.equal(rt.parse('just now').getTime(), new Date(frozenTime).getTime());
  t.end();
});

testBlock('any moment now', (t) => {
  t.equal(rt.parse('any moment now').getTime(), new Date(frozenTime).getTime());
  t.end();
});

testBlock('tomorrow', (t) => {
  const ms = Math.floor(
    new Date(frozenTime).getTime() / (timeUnits.day)
  ) * timeUnits.day + timeUnits.day;

  t.equal(rt.parse('tomorrow').getTime(), ms);
  t.end();
});

testBlock('today', (t) => {
  const ms = Math.floor(new Date(frozenTime).getTime() / (timeUnits.day)) * timeUnits.day;

  t.equal(rt.parse('today').getTime(), ms);
  t.end();
});

testBlock('yesterday', (t) => {
  const ms = Math.floor(
    new Date(frozenTime).getTime() / (timeUnits.day)
  ) * timeUnits.day - timeUnits.day;

  t.equal(rt.parse('yesterday').getTime(), ms);
  t.end();
});

testBlock('less than a minute', (t) => {
  t.equal(
    rt.parse('less than a minute').getTime(),
    new Date(frozenTime - 30 * timeUnits.second).getTime()
  );
  t.end();
});

testBlock('less than a minute', (t) => {
  t.equal(
    rt.parse('less than a minute ago').getTime(),
    new Date(frozenTime - 30 * timeUnits.second).getTime()
  );
  t.end();
});

testBlock('less than a minute ago', (t) => {
  t.equal(
    rt.parse('less than a minute ago').getTime(),
    new Date(frozenTime - 30 * timeUnits.second).getTime()
  );
  t.end();
});

testBlock('in less than a minute', (t) => {
  t.equal(
    rt.parse('in less than a minute').getTime(),
    new Date(frozenTime + 30 * timeUnits.second).getTime()
  );
  t.end();
});

testBlock('5 millenias ago', (t) => {
  t.throws(
    () => rt.parse('5 millenias ago'),
    new RegExp(/Timeago unit "millenias" is not supported/g)
  );
  t.end();
});

testBlock('a', (t) => {
  t.throws(
    () => rt.parse('a'),
    new RegExp(/Cannot find time unit in timeago expression/g)
  );
  t.end();
});
