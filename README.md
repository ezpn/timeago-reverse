# Timeago reverse

[![Build Status](https://travis-ci.org/ezpn/timeago-reverse.svg?branch=master)](https://travis-ci.org/ezpn/timeago-reverse)
[![Coverage Status](https://coveralls.io/repos/github/ezpn/timeago-reverse/badge.svg?branch=master)](https://coveralls.io/github/ezpn/timeago-reverse?branch=master)
[![NPM version](https://img.shields.io/npm/v/nyc.svg)](https://www.npmjs.com/package/ezpn/timeago-reverse)

Parse timeago expression (ie. `2 days ago`) and get an approximate Date object.

## Installation
`npm i timeago-reverse`

## Test
`npm test`

## How to use?
```javascript
const tr = require('timeago-reverse');

const myDate = tr.parse('14 hours ago');
```

## Supported expressions
### Now

- `now`
- `just now`
- `any moment now`

### Past variations

Format: `[a/an/${amount}] ${unit} [ago]`

- `second`
- `second ago`
- `a second`
- `a second ago`
- `an hour`
- `1 second ago`
- `30 seconds`
- `30 seconds ago`

### Future variations

Format: `[a/an/${amount}] ${unit} from now`

- `second from now`
- `a second from now`
- `1 second from now`
- `30 seconds from now`


## Supported units

Supported in both singular and plural forms.

- second(s)
- minute(s)
- hour(s)
- day(s)
- week(s)
- month(s)
- year(s)
