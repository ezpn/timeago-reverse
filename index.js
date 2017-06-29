const timeUnits = { second: 1000 };
timeUnits.seconds = timeUnits.second;
timeUnits.minute = timeUnits.second * 60;
timeUnits.minutes = timeUnits.minute;
timeUnits.hour = timeUnits.minute * 60;
timeUnits.hours = timeUnits.hour;
timeUnits.day = timeUnits.hour * 24;
timeUnits.days = timeUnits.day;
timeUnits.week = timeUnits.day * 7;
timeUnits.weeks = timeUnits.week;
timeUnits.month = timeUnits.day * 30;
timeUnits.months = timeUnits.month;
timeUnits.year = timeUnits.day * 365;
timeUnits.years = timeUnits.year;

const futureSuffix = 'from now';

/**
 * Splits expression string to amount expression, unit and suffix.
 *
 * @param {string} timeExpression
 *
 * @throws {Error}
 * @return {object}
 */
const splitExpression = (timeExpression) => {
  const timeArr = timeExpression.split(' ');
  const time = {
    amountExpr: null,
    unit: null,
    suffix: null,
  };

  // Cases starting with about
  if (timeArr[0] === 'about' && (timeArr[1] === 'a' || timeArr[1] === 'an')) {
    time.amountExpr = timeArr.splice(0, 2).join(' ');
  // Cases starting with articles
  } else if (timeArr[0] === 'a' || timeArr[0] === 'an' || timeArr[0] === 'few') {
    time.amountExpr = timeArr.splice(0, 1)[0];
  // Cases with no time amount expression (which start with a unit)
  } else if (timeUnits[timeArr[0]] != null) {
    // Noop
  } else {
    time.amountExpr = timeArr.splice(0, 1)[0];
  }

  if (timeArr.length === 0) {
    throw new Error('Cannot find time unit in timeago expression');
  }

  time.unit = timeArr.splice(0, 1)[0];

  if (timeArr.length > 0) {
    time.suffix = timeArr.join(' ');
  }

  return time;
};

/**
 * Parses time amount expression and returns time multiplier
 *
 * @param {string} amountExpr
 *
 * @throws {Error}
 * @return {number}
 */
const parseTimeAmount = (amountExpr) => {
  let amount = null;

  // Special approximate 1 case ie. "about a minute ago", "an hour ago"
  if (amountExpr === 'about a' || amountExpr === 'about an'
  || amountExpr === 'a' || amountExpr === 'an') {
    amount = 1;
  // Special few case ie. "few seconds ago"
  } else if (amountExpr === 'few') {
    amount = 3;
  // In case of empty amount expression
  } else if (amountExpr == null) {
    amount = 1;
  // Regular case ie. "3 hours ago"
  } else {
    amount = parseInt(amountExpr);
  }

  if (isNaN(amount)) {
    throw new Error(
      'First part of timeago string must be a time amount (parsable positive integer)'
    );
  }

  if (amount < 0) {
    throw new Error('Amount should be a positive integer');
  }

  return amount;
};

/**
 * Gets unit multiplier from unit name
 *
 * @param {string} unit
 *
 * @throws {Error}
 * @return {number}
 */
const getUnitMultiplier = (unit) => {
  if (timeUnits[unit] == null) {
    throw new Error(
      `Timeago unit "${unit}" is not supported.
      Use one of "${Object.keys(timeUnits).join('",  "')}"`
    );
  }

  return timeUnits[unit];
};

/**
 * Gets time direction multiplier
 *
 * @param {string} suffix
 *
 * @return {number}
 */
const getTimeDirection = (suffix) => {
  return suffix === futureSuffix ? +1 : -1;
};

/**
 * Counts date from amount, unitMultiplier and timeDirection
 *
 * @param {object} o
 * @param {number} o.amount
 * @param {number} o.unitMultiplier
 * @param {number} o.timeDirection
 *
 * @return {Date}
 */
const countDate = ({ amount, unitMultiplier, timeDirection }) => {
  const now = Date.now();
  const parsedMs = now + amount * unitMultiplier * timeDirection;

  return new Date(parsedMs);
};

/**
 * Parses timeago string and returns approximate Date object
 *
 * @param {string} timeago
 *
 * @return {Date}
 */
const parse = (timeago) => {
  // Handling now cases
  if (timeago.toLowerCase() === 'now'
  || timeago.toLowerCase().includes('just now')
  || timeago.toLowerCase().includes('any moment now')) {
    return new Date();
  }

  // Less than a minute case
  if (timeago.toLowerCase().includes('less than a minute')) {
    return new Date(Date.now() - 30 * 1000);
  }

  const splittedTimeExpr = splitExpression(timeago);

  const time = {
    amount: parseTimeAmount(splittedTimeExpr.amountExpr),
    unitMultiplier: getUnitMultiplier(splittedTimeExpr.unit),
    timeDirection: getTimeDirection(splittedTimeExpr.suffix),
  };

  return countDate(time);
};

module.exports = { parse };
