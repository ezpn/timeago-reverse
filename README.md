# Timeago reverse

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
